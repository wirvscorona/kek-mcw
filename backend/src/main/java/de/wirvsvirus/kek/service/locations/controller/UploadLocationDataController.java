package de.wirvsvirus.kek.service.locations.controller;

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;
import de.wirvsvirus.kek.service.locations.model.pojo.TimeLineObject;
import de.wirvsvirus.kek.service.locations.model.pojo.TimelineJsonRoot;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class UploadLocationDataController {

    @Autowired
    private LocationHistoryRepository locationHistoryRepository;

    @PostMapping("/locations/{user}/upload")
    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish", response = Diary.class)
    public ResponseEntity<String> uploadLocationData(@RequestBody TimelineJsonRoot jsonData, @PathVariable String user) {
        jsonData.getTimelineObjects().stream()
                .filter( timeLineObject -> timeLineObject.getPlaceVisit() != null)
                .forEach(this::extractData);

        return new ResponseEntity<String>("Upload success", HttpStatus.OK);
    }

    private void extractData(TimeLineObject timeLineObject) {
        long lat = timeLineObject.getPlaceVisit().getCenterLatE7();
        long lon = timeLineObject.getPlaceVisit().getCenterLngE7();
        long timestamp = timeLineObject.getPlaceVisit().getDuration().getStartTimestampMs();
        long duration = timeLineObject.getPlaceVisit().getDuration().getEndTimestampMs() - timestamp;
        long updateTime = System.currentTimeMillis();

        locationHistoryRepository.save(new LocationHistory(lat, lon, timestamp, duration, updateTime));
    }
}
