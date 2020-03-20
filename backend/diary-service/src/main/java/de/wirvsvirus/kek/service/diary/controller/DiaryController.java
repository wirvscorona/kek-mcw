package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.Diary;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/diaries")
@Api(value="Diaries Endpoint", description="Provides access to diary data.")
public class DiaryController {

    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish", response = Diary.class)
    @GetMapping
    public ResponseEntity<Collection<Diary>> findDiaries() {
        List<Diary> newList = new ArrayList<Diary>();
        newList.add(new Diary());
        return new ResponseEntity<Collection<Diary>>(newList, HttpStatus.OK);
    }
}
