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

import de.wirvsvirus.kek.service.diary.model.Examination;
import de.wirvsvirus.kek.service.diary.model.ExaminationDTO;
import de.wirvsvirus.kek.service.diary.repository.ExaminationRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/examinations")
@Api(value = "Examination Endpoint", description = "Provides access to examination data.")
public class ExaminationController {


    @Autowired
    private ExaminationRepository examRepo;

    @ApiOperation(value = "Responds with a list of examinations", response = ExaminationDTO.class)
    @GetMapping
    public ResponseEntity<Collection<ExaminationDTO>> findExaminations(@ApiParam(name="containssymptoms", value="A comma seperated list of symptom ids that should be searched for") @RequestParam(name = "containssymptoms", required = false) List<Long> symptomsIDSearchList) {
        Collection<ExaminationDTO> examinationDTOs = new ArrayList<ExaminationDTO>();
        Iterable<Examination> examinations = null;

        // No search query
        if (symptomsIDSearchList == null || symptomsIDSearchList.isEmpty()) {
            examinations = examRepo.findAll();
        } else {
            // symptom is searched
            examinations = examRepo.findBySymptomsIDIn(symptomsIDSearchList);
        }

        examinations.forEach(examination -> examinationDTOs.add(examination.toDTO()));
    
        if (examinationDTOs.isEmpty()) {
            return new ResponseEntity<Collection<ExaminationDTO>>(examinationDTOs, HttpStatus.NOT_FOUND);

        } else {
            return new ResponseEntity<Collection<ExaminationDTO>>(examinationDTOs, HttpStatus.OK);
        }
    }


    @ApiOperation(value = "Saves new Examination object", response = ExaminationDTO.class)
    @PostMapping
    public ResponseEntity<ExaminationDTO> saveExamination(@RequestBody ExaminationDTO newExaminationDTO) {
        Examination newExamination = Examination.toDomainObject(newExaminationDTO);

        ExaminationDTO responseDTO = examRepo.save(newExamination).toDTO();

        return new ResponseEntity<ExaminationDTO>(responseDTO, HttpStatus.CREATED);
    }


    @ApiOperation(value = "Responds with an examination object", response = ExaminationDTO.class)
    @GetMapping("/{id}")
    public ResponseEntity<ExaminationDTO> findExamination(@PathVariable Long id) {
        Optional<Examination> candidate = examRepo.findById(id);

        if (!candidate.isPresent()) {
            return new ResponseEntity<ExaminationDTO>(new ExaminationDTO(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<ExaminationDTO>(candidate.get().toDTO(), HttpStatus.OK);
    }

}