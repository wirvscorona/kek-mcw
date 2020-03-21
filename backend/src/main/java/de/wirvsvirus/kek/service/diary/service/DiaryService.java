package de.wirvsvirus.kek.service.diary.service;

import de.wirvsvirus.kek.service.diary.model.Diary;
import java.util.List;

public interface DiaryService {

    List<Diary> findAll();
}