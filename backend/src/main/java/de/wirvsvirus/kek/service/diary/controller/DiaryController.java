package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;

import io.swagger.annotations.Api;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import io.swagger.annotations.ApiOperation;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/diaries")
@Api(value = "Diaries Endpoint", description = "Provides access to diary data.")
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepo;

    @ApiOperation(value = "Responds with a list of diaries", response = Diary.class)
    @GetMapping
    public ResponseEntity<Collection<Diary>> findDiaries() {
        return new ResponseEntity<Collection<Diary>>(diaryRepo.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "Responds with a diary object", response = Diary.class)
    @GetMapping("/{id}")
    public ResponseEntity<Diary> findDiary(@PathVariable Long id) {
        Optional<Diary> diaryCandidate = diaryRepo.findById(id);
        if (!diaryCandidate.isPresent()) {
            return new ResponseEntity<Diary>(new Diary(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Diary>(diaryCandidate.get(), HttpStatus.OK);
    }

    @ApiOperation(value = "Saves new diary object", response = Diary.class)
    @PostMapping("/{id}")
    public ResponseEntity<Diary> newDiary(@RequestBody Diary newDiary) {
        return new ResponseEntity<Diary>(diaryRepo.save(newDiary), HttpStatus.OK);
    }

    @ApiOperation(value = "Updates a diary object", response = Diary.class)
    @PutMapping("/{id}")
    public ResponseEntity<Diary> replaceDiary(@RequestBody Diary newDiary, @PathVariable Long id) {
        Optional<Diary> diaryCandidate = diaryRepo.findById(id);
        if (!diaryCandidate.isPresent()) {
            return new ResponseEntity<Diary>(new Diary(), HttpStatus.NOT_FOUND);
        }

        Diary diary = diaryCandidate.get();
        BeanUtils.copyProperties(newDiary, diary);

        return new ResponseEntity<Diary>(diaryRepo.save(diary), HttpStatus.OK);
    }

    @ApiOperation(value = "Deletes diary object", response = Diary.class)
    @DeleteMapping("/{id}")
    public void deleteDiary(@PathVariable Long id) {
        diaryRepo.deleteById(id);
    }
}
