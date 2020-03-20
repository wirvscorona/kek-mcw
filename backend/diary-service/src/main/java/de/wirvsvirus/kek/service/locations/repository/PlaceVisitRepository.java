package de.wirvsvirus.kek.service.locations.repository;

import de.wirvsvirus.kek.service.diary.model.Diary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface PlaceVisitRepository extends CrudRepository<Diary, Long> {
    Collection<Diary> findAll();
}
