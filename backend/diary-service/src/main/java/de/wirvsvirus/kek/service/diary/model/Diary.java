package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;

import java.util.*;

@Entity
@ApiModel(description = "All details about a diary. ")
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne() // TODO add relationship from USER to DIARY ??
    private User user;

    @OneToMany()
    private List<ContactEntry> contacts;

    @OneToOne()
    private Examination xRay = new Examination();
    @OneToOne()
    private Examination nasopharynxSwab = new Examination();
    @OneToOne()
    private Examination sputumSwab = new Examination();

    private boolean isCured;

    private boolean hasNasopharynxSwabWillingness;
    private boolean hasSputumSampleWillingness;
    private boolean hasBloodSampleWillingness;

    public Diary() {

    }

    public Diary(User user, List<ContactEntry> contacts, Examination xRay, Examination nasopharynxSwab,
            Examination sputumSwab, boolean isCured, boolean hasNasopharynxSwabWillingness,
            boolean hasSputumSampleWillingness, boolean hasBloodSampleWillingness) {
        this.user = user;
        this.contacts = contacts;
        this.xRay = xRay;
        this.nasopharynxSwab = nasopharynxSwab;
        this.sputumSwab = sputumSwab;
    }

    public User getUser() {
        return user;
    }

    public List<ContactEntry> getContacts() {
        return contacts;
    }

    public Examination getxRay() {
        return xRay;
    }

    public Examination getNasopharynxSwab() {
        return nasopharynxSwab;
    }

    public Examination getSputumSwab() {
        return sputumSwab;
    }

    public boolean isCured() {
        return isCured;
    }

    public boolean hasNasopharynxSwabWillingness() {
        return hasNasopharynxSwabWillingness;
    }

    public boolean hasSputumSampleWillingness() {
        return hasSputumSampleWillingness;
    }

    public boolean hasBloodSampleWillingness() {
        return hasBloodSampleWillingness;
    }
}