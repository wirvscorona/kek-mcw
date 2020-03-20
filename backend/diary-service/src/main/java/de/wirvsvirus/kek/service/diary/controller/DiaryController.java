package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import io.swagger.annotations.ApiOperation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/diaries")
@Api(value="Diaries Endpoint", description="Provides access to diary data.")
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepo;

    @ApiOperation(value = "Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish", response = Diary.class)
    @GetMapping
    public ResponseEntity<Collection<Diary>> findDiaries() {
        return new ResponseEntity<Collection<Diary>>(diaryRepo.findAll(), HttpStatus.OK);
    }
}
