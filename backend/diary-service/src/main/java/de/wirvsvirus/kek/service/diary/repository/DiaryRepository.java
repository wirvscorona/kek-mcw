package de.wirvsvirus.kek.service.diary.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import de.wirvsvirus.kek.service.diary.model.Diary;


@Repository
public interface DiaryRepository extends CrudRepository<Diary, Long> {
    Collection<Diary> findAll();
}
