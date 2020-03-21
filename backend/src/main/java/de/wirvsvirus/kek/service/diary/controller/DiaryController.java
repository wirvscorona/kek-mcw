package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.ContactEntry;
import de.wirvsvirus.kek.service.diary.model.ContactEntryDTO;
import de.wirvsvirus.kek.service.diary.model.CreateDiaryDTO;
import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.model.User;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import de.wirvsvirus.kek.service.diary.repository.UserRepository;
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

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private SymptomRepository symptomRepo;

    @ApiOperation(value = "Responds with a list of diaries", response = Diary.class)
    @GetMapping
    public ResponseEntity<Collection<Diary>> findDiaries() {
        return new ResponseEntity<Collection<Diary>>(diaryRepo.findAll(), HttpStatus.OK);
    }

    // TODO move to seperate controller
    @ApiOperation(value = "Responds with a diary object", response = User.class)
    @GetMapping("/user/{id}")
    public ResponseEntity<User> findUser(@PathVariable Long id) {
        Optional<User> user = userRepo.findById(id);
        if (!user.isPresent()) {
            return new ResponseEntity<User>(new User(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<User>(user.get(), HttpStatus.OK);
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
    public ResponseEntity<Diary> newDiary(@RequestBody CreateDiaryDTO createDiaryDTO) {
        Diary newDiary = new Diary();
        Optional<User> user = userRepo.findById(createDiaryDTO.getUserId());
        if (!user.isPresent()) {
            return new ResponseEntity<Diary>(new Diary(), HttpStatus.NOT_FOUND);
        }
        newDiary.setUser(user.get());
        newDiary.setCured(createDiaryDTO.isCured());
        createDiaryDTO.getContacts().forEach(ce -> newDiary.getContacts().add(ContactEntryDTOtoEntity(ce)));
        return new ResponseEntity<Diary>(diaryRepo.save(newDiary), HttpStatus.OK);
    }

    private ContactEntry ContactEntryDTOtoEntity(ContactEntryDTO entryDTO) {
        ContactEntry entry = new ContactEntry();
        entry.setContactWith(entryDTO.getContactWith());
        entry.setCustomSymptom(entryDTO.getCustomSymptom());
        entry.setDate(entryDTO.getDate());
        entry.setCustomSymptomPresent(entryDTO.isCustomSymptomPresent());
        entry.setDescription(entryDTO.getDescription());

        entryDTO.getSymptoms().forEach(symptomID -> {
            Optional<Symptom> symptom = symptomRepo.findById(symptomID);
            if (symptom.isPresent()) {
                entry.getSymptoms().add(symptom.get());
            }
        });

        return entry;
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
