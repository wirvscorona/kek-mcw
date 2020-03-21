package de.wirvsvirus.kek.service.diary.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import de.wirvsvirus.kek.service.diary.model.User;
import io.swagger.annotations.ApiModel;
import lombok.Data;

@Entity
@Data
@ApiModel(description = "All details about a User. ")
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@ManyToOne
	private User user;

	@OneToMany
	private List<Symptom> symptoms;
}