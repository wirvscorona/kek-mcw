package de.wirvsvirus.kek.service.locations.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface PlaceVisitRepository extends CrudRepository<PlaceVisit, Long> {
    Collection<PlaceVisit> findAll();
    PlaceVisit findFirstByPlaceEqualsAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(Place place, long endTimestamp, long startTimestamp);
}
