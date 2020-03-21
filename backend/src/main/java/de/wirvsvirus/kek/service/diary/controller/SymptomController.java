package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.model.SymptomDTO;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/symptoms")
@Api(value = "Symptom Endpoint", description = "Provides access to symptom data.")
public class SymptomController {

    @Autowired
    private SymptomRepository symptomRepo;

    @ApiOperation(value = "Responds with a list of symptoms", response = Symptom.class)
    @GetMapping
    public ResponseEntity<Collection<Symptom>> findSymptoms(
            @ApiParam(name = "search", value = "The name of the symptom (or part of it) that should be searched") @RequestParam(name = "search", required = false) String symptomSearchQuery) {
        Collection<Symptom> symptoms = null;

        // No search query
        if (symptomSearchQuery == null || symptomSearchQuery.isEmpty()) {
            symptoms = symptomRepo.findAll();
        } else {
            // symptom is searched
            symptoms = symptomRepo.findByNameContains(symptomSearchQuery);
        }

        if (symptoms.isEmpty()) {
            return new ResponseEntity<Collection<Symptom>>(symptoms, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Collection<Symptom>>(symptoms, HttpStatus.OK);
        }
    }

    @ApiOperation(value = "Saves new Symptom object", response = Symptom.class)
    @PostMapping
    public ResponseEntity<Symptom> saveSymptom(@RequestBody SymptomDTO newSymptomDTO) {
        Symptom newSymptom = Symptom.toDomainObject(newSymptomDTO);
        Collection<Symptom> symptomsWithSameName = symptomRepo.findByName(newSymptom.getName());

        // Do not add a symptom with the same name
        if (!symptomsWithSameName.isEmpty()) {
            return new ResponseEntity<Symptom>(newSymptom, HttpStatus.NOT_ACCEPTABLE);
        }

        return new ResponseEntity<Symptom>(symptomRepo.save(newSymptom), HttpStatus.CREATED);
    }

    @ApiOperation(value = "Responds with a symptom object", response = Symptom.class)
    @GetMapping("/{id}")
    public ResponseEntity<Symptom> findUser(@PathVariable Long id) {
        Optional<Symptom> candidate = symptomRepo.findById(id);

        if (!candidate.isPresent()) {
            return new ResponseEntity<Symptom>(new Symptom(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Symptom>(candidate.get(), HttpStatus.OK);
    }

}