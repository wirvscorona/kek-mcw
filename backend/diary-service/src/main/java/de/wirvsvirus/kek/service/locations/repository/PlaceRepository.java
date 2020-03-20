package de.wirvsvirus.kek.service.locations.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface PlaceRepository extends CrudRepository<Place, Long> {
    Collection<Place> findAll();
}
