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
import java.util.ArrayList;
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
    
    @OneToMany
    private Set<ContactMethod> contactMethods;

    public void update(UserDTO dto) {
        this.firstName = dto.getFirstName();
        this.lastName = dto.getLastName();
        this.contactMethods.clear();

        dto.getContactMethods().forEach(methodDTO -> this.contactMethods.add(ContactMethod.toDomainObject(methodDTO)));
    }

    public static User toDomainObject(UserDTO dto) {
        User newUser = new User(dto.getId(), dto.getFirstName(), dto.getLastName(), new HashSet<ContactMethod>());

        dto.getContactMethods().forEach(methodDTO -> newUser.getContactMethods().add(ContactMethod.toDomainObject(methodDTO)));

        return newUser;
    }

    public UserDTO toDTO() {
        UserDTO newUserDTO = new UserDTO(this.getId(), this.getFirstName(), this.getLastName(), new HashSet<ContactMethodDTO>());
        this.getContactMethods().forEach(method -> newUserDTO.getContactMethods().add(method.toDTO()));
        return newUserDTO;
    }
}