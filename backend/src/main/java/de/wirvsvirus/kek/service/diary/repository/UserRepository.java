package de.wirvsvirus.kek.service.diary.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import de.wirvsvirus.kek.service.diary.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Collection<User> findAll();
}
