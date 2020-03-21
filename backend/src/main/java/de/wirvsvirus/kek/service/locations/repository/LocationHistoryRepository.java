package de.wirvsvirus.kek.service.locations.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface LocationHistoryRepository extends CrudRepository<LocationHistory, Long> {
    Collection<LocationHistory> findAll();
    LocationHistory findFirstByLatitudeAndLongitudeAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(
            long latitude, long longitude, long endTimestamp, long startTimestamp);
    Collection<LocationHistory> findAllByLatitudeBetweenAndLongitudeBetween(long minLatitude, long maxLatitude, long minLongitude, long maxLongitude);
    Collection<LocationHistory> findAllByLatitudeBetweenAndLongitudeBetweenAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(long minLatitude, long maxLatitude, long minLongitude, long maxLongitude, long maxStartTimestamp, long minEndTimestamp);
}
