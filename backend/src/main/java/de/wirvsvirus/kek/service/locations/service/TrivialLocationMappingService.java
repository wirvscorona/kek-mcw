package de.wirvsvirus.kek.service.locations.service;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class TrivialLocationMappingService {

    @Autowired
    LocationHistoryRepository locationHistoryRepository;

    public List<LocationMatch> computeMatches(List<LocationHistory> locationHistories) {
        List<LocationMatch> matches = new ArrayList<>();

        for (LocationHistory locationHistory : locationHistories) {
            Collection<LocationHistory> infectedLocationHistories = locationHistoryRepository
                    .findAllByLatitudeAndLongitude(locationHistory.getLatitude(), locationHistory.getLongitude());
            for (LocationHistory infectedLocationHistory : infectedLocationHistories) {
                LocationMatch match = new LocationMatch(infectedLocationHistory.getLatitude(),
                        infectedLocationHistory.getLongitude(), infectedLocationHistory.getStartTimestamp(),
                        infectedLocationHistory.getEndTimestamp());
                matches.add(match);
            }
        }
        return matches;
    }
}
