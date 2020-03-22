package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.ContactEntry;
import de.wirvsvirus.kek.service.diary.model.ContactEntryDTO;
import de.wirvsvirus.kek.service.diary.model.DiaryDTO;
import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.model.User;
import de.wirvsvirus.kek.service.diary.service.DiaryService;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import de.wirvsvirus.kek.service.diary.repository.UserRepository;
import io.swagger.annotations.Api;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import io.swagger.annotations.ApiOperation;

import java.util.Collection;

@RestController
@RequestMapping("/api/diaries")
@Api(value = "Diaries Endpoint", description = "Provides access to diary data.")
public class DiaryController {

    @Autowired
    private DiaryService diaryService;

    @ApiOperation(value = "Responds with a list of diaries")
    @GetMapping
    public ResponseEntity<Collection<Diary>> findDiaries() {
        return new ResponseEntity<Collection<Diary>>(diaryService.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "Responds with a diary object")
    @GetMapping("/{id}")
    public ResponseEntity<Diary> findDiary(@PathVariable Long id) {
        return new ResponseEntity<Diary>(diaryService.findById(id), HttpStatus.OK);
    }

    @ApiOperation(value = "Saves new diary object")
    @PostMapping("/")
    public ResponseEntity<Diary> saveDiary(@RequestBody DiaryDTO diaryDTO) {
        return new ResponseEntity<Diary>(diaryService.saveFromDTO(diaryDTO), HttpStatus.OK);
    }

    @ApiOperation(value = "Updates a diary object")
    @PutMapping("/{id}")
    public ResponseEntity<Diary> updateDiary(@RequestBody DiaryDTO diaryDTO, @PathVariable Long id) {
        return new ResponseEntity<Diary>(diaryService.updateFromDTO(diaryDTO, id), HttpStatus.OK);
    }

    @ApiOperation(value = "Deletes diary object")
    @DeleteMapping("/{id}")
    public void deleteDiary(@PathVariable Long id) {
        diaryService.deleteById(id);
    }
}
