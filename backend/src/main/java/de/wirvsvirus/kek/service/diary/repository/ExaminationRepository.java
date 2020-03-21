package de.wirvsvirus.kek.service.diary.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import de.wirvsvirus.kek.service.diary.model.Examination;

@Repository
public interface ExaminationRepository extends CrudRepository<Examination, Long> {
    Collection<Examination> findAll();
    Collection<Examination> findBySymptomsIDIn(List<Long> symptomIDs);
}
