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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class LocationDataController {

    private static final long DEFAULT_VIRUS_PERSISTENCE_TIME = 1800000; // 30 min
    private static final long DEFAULT_MAX_DISTANCE = 100;

    private final LocationHistoryRepository locationHistoryRepository;

    private final TrivialLocationMappingService trivialLocationMappingService;

    @Autowired
    public LocationDataController(LocationHistoryRepository locationHistoryRepository, TrivialLocationMappingService trivialLocationMappingService) {
        this.locationHistoryRepository = locationHistoryRepository;
        this.trivialLocationMappingService = trivialLocationMappingService;
    }

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

    @PostMapping("/locations/check")
    @ApiOperation(value = "Responds with a list of matched locations")
    public ResponseEntity<List<LocationMatch>> getMatchingLocations(@RequestBody TimelineJsonRoot jsonData,
                                                                    @RequestParam long maxDistanceInMeters,
                                                                    @RequestParam long virusPersistenceTimeInMillis) {
        List<LocationHistory> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractData)
                .collect(Collectors.toList());

        List<LocationMatch> locationMatches = trivialLocationMappingService.computeNearbyMatches(
                locationHistories,
                maxDistanceInMeters == 0 ? DEFAULT_MAX_DISTANCE : maxDistanceInMeters,
                virusPersistenceTimeInMillis == 0 ? DEFAULT_VIRUS_PERSISTENCE_TIME : virusPersistenceTimeInMillis);
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
