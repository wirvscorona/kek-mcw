package de.wirvsvirus.kek.service.diary.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import de.wirvsvirus.kek.service.diary.model.ContactEntry;

@Repository
public interface ContactEntryRepository extends CrudRepository<ContactEntry, Long> {
}
