package de.wirvsvirus.kek.service.diary.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import java.util.Set;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.util.HashSet;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@ApiModel(description = "All details about a User. ")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;

    @ElementCollection
    private Set<CorrespondenceDetails> correspondenceDetails;

    public void update(UserDTO dto) {
        this.firstName = dto.getFirstName();
        this.lastName = dto.getLastName();
        this.correspondenceDetails.clear();

        dto.getCorrespondenceDetails()
                .forEach(methodDTO -> this.correspondenceDetails.add(CorrespondenceDetails.toDomainObject(methodDTO)));
    }

    public static User toDomainObject(UserDTO dto) {
        User newUser = new User(null, dto.getFirstName(), dto.getLastName(), new HashSet<CorrespondenceDetails>());

        dto.getCorrespondenceDetails().forEach(
                methodDTO -> newUser.getCorrespondenceDetails().add(CorrespondenceDetails.toDomainObject(methodDTO)));

        return newUser;
    }

    public UserDTO toDTO() {
        UserDTO newUserDTO = new UserDTO(this.getFirstName(), this.getLastName(),
                new HashSet<CorrespondenceDetailsDTO>());
        this.correspondenceDetails.forEach(method -> newUserDTO.getCorrespondenceDetails().add(method.toDTO()));
        return newUserDTO;
    }
}