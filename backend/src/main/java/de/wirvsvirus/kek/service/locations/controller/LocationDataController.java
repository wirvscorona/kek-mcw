package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.PlaceVisit;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import de.wirvsvirus.kek.service.locations.repository.Place;
import de.wirvsvirus.kek.service.locations.repository.PlaceVisitRepository;
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
import java.util.stream.Stream;

@RestController
@RequestMapping("/")
public class LocationDataController {
    private static final String DEFAULT_VIRUS_PERSISTENCE_TIME = "1800000"; // 30 min
    private static final String DEFAULT_MAX_DISTANCE = "100"; // 100 meter radius

    private final LocationHistoryRepository locationHistoryRepository;

    private final TrivialLocationMappingService trivialLocationMappingService;

    private final PlaceVisitRepository placeVisitRepository;

    @Autowired
    public LocationDataController(LocationHistoryRepository locationHistoryRepository, TrivialLocationMappingService trivialLocationMappingService, PlaceVisitRepository placeVisitRepository) {
        this.locationHistoryRepository = locationHistoryRepository;
        this.trivialLocationMappingService = trivialLocationMappingService;
        this.placeVisitRepository = placeVisitRepository;
    }

    @PostMapping("/locations/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish")
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData,
            @PathVariable String user) {
        Stream<TimeLineObject> histories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null);
        List<LocationHistory> locationHistories = histories.map(this::extractLocationData).collect(Collectors.toList());
        List<PlaceVisit> placeVisits = histories.map(this::extractPlaceVisitData).collect(Collectors.toList());
        placeVisitRepository.saveAll(placeVisits);
        locationHistoryRepository.saveAll(locationHistories);
        return new ResponseEntity<>("Upload success", HttpStatus.OK);
    }

    @PostMapping("/locations/check")
    @ApiOperation(value = "Responds with a list of matched locations")
    public ResponseEntity<List<LocationMatch>> getMatchingLocations(@RequestBody TimelineJsonRoot jsonData,
                                                                    @RequestParam(required = false, defaultValue = DEFAULT_MAX_DISTANCE) long maxDistanceInMeters,
                                                                    @RequestParam(required = false, defaultValue = DEFAULT_VIRUS_PERSISTENCE_TIME) long virusPersistenceTimeInMillis) {
        List<LocationHistory> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null).map(this::extractLocationData)
                .collect(Collectors.toList());

        List<LocationMatch> locationMatches = trivialLocationMappingService.computeNearbyMatches(
                locationHistories,
                maxDistanceInMeters,
                virusPersistenceTimeInMillis);
        return new ResponseEntity<>(locationMatches, HttpStatus.OK);
    }

    private LocationHistory extractLocationData(TimeLineObject timeLineObject) {
        long lat = timeLineObject.getPlaceVisit().getCenterLatE7();
        long lon = timeLineObject.getPlaceVisit().getCenterLngE7();
        long startTimestampMs = timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs();
        long endTimestampMs = timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs();
        long updateTime = System.currentTimeMillis();

        return new LocationHistory(lat, lon, startTimestampMs, endTimestampMs, updateTime);
    }

    private PlaceVisit extractPlaceVisitData(TimeLineObject timeLineObject) {
        long lat = timeLineObject.getPlaceVisit().getLocation().getLatitudeE7();
        long lon = timeLineObject.getPlaceVisit().getLocation().getLongitudeE7();
        String id = timeLineObject.getPlaceVisit().getLocation().getPlaceId();
        String name = timeLineObject.getPlaceVisit().getLocation().getName();
        long startTimestampMs = timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs();
        long endTimestampMs = timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs();
        long updateTime = System.currentTimeMillis();
        long duration = endTimestampMs - startTimestampMs;
        Place place = new Place(lat, lon, name, id);
        return new PlaceVisit(place, updateTime, duration);
    }
}
