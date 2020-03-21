package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactEntryDTO {
    private Date date;

    private String description;

    private ExaminationDTO examination;

    private boolean customSymptomPresent;
    private String customSymptom;
    private String contactWith;
}