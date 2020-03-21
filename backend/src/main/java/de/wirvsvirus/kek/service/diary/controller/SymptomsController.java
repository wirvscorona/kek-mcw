package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.wirvsvirus.kek.service.diary.model.Record;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import io.swagger.annotations.Api;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import io.swagger.annotations.ApiOperation;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/records")
@Api(value = "Symptoms Endpoint", description = "Provides access to symptom records data.")
public class SymptomsController {

    @Autowired
    private SymptomRepository symptomsRepo;

    @ApiOperation(value = "Responds with a list of records", response = Record.class)
    @GetMapping
    public ResponseEntity<Collection<Record>> findRecords() {
        return new ResponseEntity<Collection<Record>>(symptomsRepo.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "Responds with a record object", response = Record.class)
    @GetMapping("/{id}")
    public ResponseEntity<Record> findSymptoms(@PathVariable Long id) {
        Optional<Record> symptomsCandidate = symptomsRepo.findById(id);
        if (!symptomsCandidate.isPresent()) {
            return new ResponseEntity<Record>(new Record(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Record>(symptomsCandidate.get(), HttpStatus.OK);
    }

    @ApiOperation(value = "Saves new record object", response = Record.class)
    @PostMapping("/{id}")
    public ResponseEntity<Record> newSymptoms(@RequestBody Record newSymptoms) {
        return new ResponseEntity<Record>(symptomsRepo.save(newSymptoms), HttpStatus.OK);
    }

    @ApiOperation(value = "Updates a record object", response = Record.class)
    @PutMapping("/{id}")
    public ResponseEntity<Record> replaceSymptoms(@RequestBody Record newSymptoms, @PathVariable Long id) {
        Optional<Record> symptomsCandidate = symptomsRepo.findById(id);
        if (!symptomsCandidate.isPresent()) {
            return new ResponseEntity<Record>(new Record(), HttpStatus.NOT_FOUND);
        }

        Record symptoms = symptomsCandidate.get();
        BeanUtils.copyProperties(newSymptoms, symptoms);

        return new ResponseEntity<Record>(symptomsRepo.save(symptoms), HttpStatus.OK);
    }

    @ApiOperation(value = "Deletes record object", response = Record.class)
    @DeleteMapping("/{id}")
    public void deleteSymptoms(@PathVariable Long id) {
        symptomsRepo.deleteById(id);
    }
}
