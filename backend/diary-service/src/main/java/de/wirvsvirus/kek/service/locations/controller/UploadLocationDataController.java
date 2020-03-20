package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.locations.model.PlaceVisitModel;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
import io.swagger.annotations.ApiOperation;
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
public class UploadLocationDataController {

    @PostMapping("/locations/{user}/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish", response = Diary.class)
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData, @PathVariable String user) {
        List<PlaceVisitModel> visitedPlaces = jsonData.getTimelineObjects().stream()
                .filter( timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .map( timeLineObject -> toModel(timeLineObject, user))
                .collect(Collectors.toList());


        return new ResponseEntity<String>("Upload success", HttpStatus.OK);
    }

    private PlaceVisitModel toModel(TimeLineObject timeLineObject, String user) {
        PlaceVisitModel placeVisitModel = new PlaceVisitModel();
        placeVisitModel.setUser(user);
        placeVisitModel.setCenterLatE7(timeLineObject.getPlaceVisit().getCenterLatE7());
        placeVisitModel.setCenterLngE7(timeLineObject.getPlaceVisit().getCenterLngE7());
        placeVisitModel.setStartTimestampMs(timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs());
        placeVisitModel.setEndTimestampMs(timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs());
        return placeVisitModel;
    }
}
