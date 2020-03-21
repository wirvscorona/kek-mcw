package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactEntryDTO {
    @Id
    private Long id;

    private Date date;

    private String description;

    private List<Long> symptoms;

    private boolean customSymptomPresent;
    private String customSymptom;
    private String contactWith;
}