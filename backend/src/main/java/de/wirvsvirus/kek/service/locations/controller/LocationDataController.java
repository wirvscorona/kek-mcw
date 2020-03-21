package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import de.wirvsvirus.kek.service.locations.service.TrivialLocationMappingService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class LocationDataController {

    @Autowired
    private LocationHistoryRepository locationHistoryRepository;

    @Autowired
    private TrivialLocationMappingService trivialLocationMappingService;

    @PostMapping("/locations/{user}/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish")
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData, @PathVariable String user) {
        List<LocationHistory> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractData)
                .collect(Collectors.toList());
        locationHistoryRepository.saveAll(locationHistories);
        return new ResponseEntity<String>("Upload success", HttpStatus.OK);
    }

    // FIXME GetMapping does not support @RequestBody
    @PostMapping("/locations/check/{maxDistanceInMeters}")
    @ApiOperation(value = "Responds with a list of matched locations")
    public ResponseEntity<List<LocationMatch>> getMatchingLocations(@RequestBody TimelineJsonRoot jsonData, @PathVariable int maxDistanceInMeters) {
        List<LocationHistory> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractData)
                .collect(Collectors.toList());
        List<LocationMatch> locationMatches = trivialLocationMappingService.computeNearbyMatches(locationHistories, maxDistanceInMeters);
        return new ResponseEntity<List<LocationMatch>>(locationMatches, HttpStatus.OK);
    }

    private LocationHistory extractData(TimeLineObject timeLineObject) {
        long lat = timeLineObject.getPlaceVisit().getCenterLatE7();
        long lon = timeLineObject.getPlaceVisit().getCenterLngE7();
        long startTimestampMs = timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs();
        long endTimestampMs = timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs();
        long updateTime = System.currentTimeMillis();

        return new LocationHistory(lat, lon, startTimestampMs, endTimestampMs, updateTime);
    }
}
