package de.wirvsvirus.kek.service.diary.model;

import java.util.ArrayList;
import java.util.Set;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
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

    // TODO testing purposes this should not cascade
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Symptom> symptoms;

    private boolean customSymptomPresent;
    private String customSymptom;
    private String contactWith;
}