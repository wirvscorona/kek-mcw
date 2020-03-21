package de.wirvsvirus.kek.service.diary.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.wirvsvirus.kek.service.diary.model.Examination;
import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.repository.ExaminationRepository;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/export")
@Api(value = "Export Endpoint", description = "Provides access to data in machine readable formats.")
public class ExportController {

    @Autowired
    private SymptomRepository symptomRepo;

    @Autowired
    private ExaminationRepository examRepo;

    @ApiOperation(value = "Responds with a list of diaries", produces = "text/csv")
    @GetMapping(value = "/examination_feature_set.csv", produces = "text/csv")
    public void exportExaminationFeatures(HttpServletResponse response) {
        response.setContentType("text/csv; charset=utf-8");

        PrintWriter responseOutput = null;
        try {
            responseOutput = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }

        Collection<Symptom> symptoms = symptomRepo.findAll();

        String csvString = "ID,";

        for (Symptom symp : symptoms) {
            csvString += symp.getId().toString() + ",";
        }

        csvString = csvString.substring(0, csvString.length() - 1);
        csvString += "\n";

        Collection<Examination> examinations = examRepo.findAll();

        for (Examination examination : examinations) {
            csvString += examination.getId() + ",";

            // look which symptoms exist in the examination
            for (Symptom symp : symptoms) {
                if (examination.getSymptomsID().contains(symp.getId())) {
                    // examination contains symptom
                    csvString += "1,";
                } else {
                    // examination does not contains symptom
                    csvString += "0,";
                }
            }
            csvString = csvString.substring(0, csvString.length() - 1);
            csvString += "\n";           
        }

        csvString = csvString.substring(0, csvString.length() - 1);
        csvString += "\n";

        responseOutput.print(csvString);
    }

}