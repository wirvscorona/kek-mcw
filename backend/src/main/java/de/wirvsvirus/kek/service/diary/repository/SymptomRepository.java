package de.wirvsvirus.kek.service.diary.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import de.wirvsvirus.kek.service.diary.model.Record;

@Repository
public interface SymptomRepository extends CrudRepository<Record, Long> {
	Collection<Record> findAll();

    Optional<Record> findById(Long id);
}
