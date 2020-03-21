package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.locations.model.pojo.Duration;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.Place;
import de.wirvsvirus.kek.service.locations.repository.PlaceVisit;
import de.wirvsvirus.kek.service.locations.repository.PlaceVisitRepository;
import de.wirvsvirus.kek.service.locations.service.TrivialLocationMappingService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/")
public class PlaceVisitDataController {

    @Autowired
    private PlaceVisitRepository placeVisitRepository;

    @Autowired
    private TrivialLocationMappingService trivialLocationMappingService;

    @PostMapping("/locations/{user}/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish", response = Diary.class)
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData, @PathVariable String user) {
        List<PlaceVisit> locationHistories = jsonData.getTimelineObjects().stream()
                .filter( timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map(this::extractData)
                .collect(Collectors.toList());
        placeVisitRepository.saveAll(locationHistories);



        return new ResponseEntity<String>("Upload success", HttpStatus.OK);
    }

    private PlaceVisit extractData(TimeLineObject timeLineObject) {
        long lat = timeLineObject.getPlaceVisit().getLocation().getLatitudeE7();
        long lon = timeLineObject.getPlaceVisit().getLocation().getLongitudeE7();
        String id = timeLineObject.getPlaceVisit().getLocation().getPlaceId();
        long startTimestampMs = timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs();
        long endTimestampMs = timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs();
        long updateTime = System.currentTimeMillis();
        long duration = endTimestampMs-startTimestampMs;
        Place place = new Place(lat, lon, "", id);
        return new PlaceVisit(place, updateTime, duration);
    }
}
