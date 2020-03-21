package de.wirvsvirus.kek.service.locations.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface LocationHistoryRepository extends CrudRepository<LocationHistory, Long> {
    Collection<LocationHistory> findAll();
    Collection<LocationHistory> findAllByLatitudeAndLongitude(long latitude, long longitude);
}
