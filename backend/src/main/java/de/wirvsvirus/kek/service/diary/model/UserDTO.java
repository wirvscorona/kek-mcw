package de.wirvsvirus.kek.service.diary.model;

import java.util.Set;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import de.wirvsvirus.kek.service.diary.model.CorrespondenceDetailsDTO;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "All details about a User. ")
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private Set<CorrespondenceDetailsDTO> correspondenceDetails;
}