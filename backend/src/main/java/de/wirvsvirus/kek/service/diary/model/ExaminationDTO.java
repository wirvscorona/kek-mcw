package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "All details about an examination.")
public class ExaminationDTO {
    private String streetname;
    private String city;
    private String zipCode;

    private Date dateOfExamination;

    private List<Long> symptomsID;

    private List<String> symptomDescription;
}