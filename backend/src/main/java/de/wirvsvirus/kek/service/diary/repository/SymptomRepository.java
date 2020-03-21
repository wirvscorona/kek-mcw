package de.wirvsvirus.kek.service.diary.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import de.wirvsvirus.kek.service.diary.model.Symptom;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom, Long> {
    Collection<Symptom> findByName(String name);
    Collection<Symptom> findByNameContains(String name);
}
