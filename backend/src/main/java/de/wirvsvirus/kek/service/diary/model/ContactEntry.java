package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "All details about a contact entry.")
public class ContactEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    private String description;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Examination examination;

    private boolean customSymptomPresent;
    private String customSymptom;
    private String contactWith;
}