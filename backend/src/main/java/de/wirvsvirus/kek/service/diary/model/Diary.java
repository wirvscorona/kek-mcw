package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.*;

@Entity
@Data
@ApiModel(description = "All details about a diary. ")
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne()
    private User user;

    @OneToMany()
    private List<ContactEntry> contacts;

    @OneToOne()
    private Examination xRay;
    @OneToOne()
    private Examination nasopharynxSwab;
    @OneToOne()
    private Examination sputumSwab;

    private boolean isCured;

    private boolean hasNasopharynxSwabWillingness;
    private boolean hasSputumSampleWillingness;
    private boolean hasBloodSampleWillingness;
}