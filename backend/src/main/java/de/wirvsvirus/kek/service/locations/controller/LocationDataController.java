package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.model.PlaceMatch;
import de.wirvsvirus.kek.service.locations.model.pojo.Duration;
import de.wirvsvirus.kek.service.locations.model.pojo.Location;
import de.wirvsvirus.kek.service.locations.repository.*;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
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
    private final PlaceRepository placeRepository;

    @Autowired
    public LocationDataController(LocationHistoryRepository locationHistoryRepository, TrivialLocationMappingService trivialLocationMappingService, PlaceVisitRepository placeVisitRepository, PlaceRepository placeRepository) {
        this.locationHistoryRepository = locationHistoryRepository;
        this.trivialLocationMappingService = trivialLocationMappingService;
        this.placeVisitRepository = placeVisitRepository;
        this.placeRepository = placeRepository;
    }

    @PostMapping("/locations/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish")
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData) {
        List<LocationHistory> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractLocationData)
                .collect(Collectors.toList());
        List<PlaceVisit> placeVisits = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractPlaceVisitData)
                .collect(Collectors.toList());
        locationHistoryRepository.saveAll(locationHistories);
        placeVisitRepository.saveAll(placeVisits);
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

    @PostMapping("/locations/checkp")
    @ApiOperation(value = "Responds with a list of matched predefined places")
    public ResponseEntity<List<PlaceMatch>> getMatchingPlaces(@RequestBody TimelineJsonRoot jsonData,
                                                              @RequestParam(required = false, defaultValue = DEFAULT_VIRUS_PERSISTENCE_TIME) long virusPersistenceTimeInMillis) {
        List<PlaceVisit> locationHistories = jsonData.getTimelineObjects().stream()
                .filter(timeLineObject -> timeLineObject.getPlaceVisit() != null).map(this::extractPlaceVisitData)
                .collect(Collectors.toList());

        List<PlaceMatch> placeMatches = trivialLocationMappingService.computePlaceMatches(
                locationHistories,
                virusPersistenceTimeInMillis);
        return new ResponseEntity<>(placeMatches, HttpStatus.OK);
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
        de.wirvsvirus.kek.service.locations.model.pojo.PlaceVisit placeVisit = timeLineObject.getPlaceVisit();
        Location location = placeVisit.getLocation();
        Duration duration = placeVisit.getDuration();
        Place place = new Place(location.getLatitudeE7(), location.getLongitudeE7(), location.getName(), location.getPlaceId());
        placeRepository.save(place);
        return new PlaceVisit(place, duration.getStartTimestampMs(), duration.getEndTimestampMs(), System.currentTimeMillis());
    }
}
