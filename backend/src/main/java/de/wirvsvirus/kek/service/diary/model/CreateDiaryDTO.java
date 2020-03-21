package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateDiaryDTO {
    private Long userId;

    private List<ContactEntryDTO> contacts;

    private boolean isCured;
}