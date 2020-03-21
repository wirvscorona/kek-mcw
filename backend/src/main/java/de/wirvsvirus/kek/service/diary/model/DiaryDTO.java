package de.wirvsvirus.kek.service.diary.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class DiaryDTO {
    private Long userId;

    private List<ContactEntryDTO> contacts;

    private boolean isCured;
}