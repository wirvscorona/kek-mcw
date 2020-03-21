package de.wirvsvirus.kek.service.locations.service;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TrivialLocationMappingService {
    private static final long VIRUS_PERSISTENCE_TIME = 1800000; // 30 minutes

    @Autowired
    LocationHistoryRepository locationHistoryRepository;

    public List<LocationMatch> computeMatches(List<LocationHistory> locationHistories) {
        List<LocationMatch> matches = new ArrayList<>();

        for (LocationHistory locationHistory : locationHistories) {
            LocationHistory infectedLocationHistory = locationHistoryRepository
                    .findFirstByLatitudeAndLongitudeAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(
                            locationHistory.getLatitude(), locationHistory.getLongitude(),
                            locationHistory.getEndTimestamp(), locationHistory.getStartTimestamp() - VIRUS_PERSISTENCE_TIME);

            if (infectedLocationHistory != null) {
                LocationMatch match = new LocationMatch(locationHistory.getLatitude(),
                        locationHistory.getLongitude(), locationHistory.getStartTimestamp(),
                        locationHistory.getEndTimestamp());
                matches.add(match);
            }
        }
        return matches;
    }
}