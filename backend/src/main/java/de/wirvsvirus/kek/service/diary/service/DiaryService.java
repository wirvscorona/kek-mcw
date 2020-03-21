package de.wirvsvirus.kek.service.diary.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import de.wirvsvirus.kek.service.diary.model.ContactEntry;
import de.wirvsvirus.kek.service.diary.model.ContactEntryDTO;
import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.model.DiaryDTO;
import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.model.User;
import de.wirvsvirus.kek.service.diary.repository.ContactEntryRepository;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import de.wirvsvirus.kek.service.diary.repository.UserRepository;

@Service
public class DiaryService {

    @Autowired
    private DiaryRepository diaryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactEntryRepository contactEntryRepo;

    @Autowired
    private SymptomRepository symptomRepo;

    public Collection<Diary> findAll() {
        return diaryRepository.findAll();
    }

    public Diary findById(Long id) {
        Optional<Diary> diaryCandidate = diaryRepository.findById(id);
        if (!diaryCandidate.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found");
        }

        return diaryCandidate.get();
    }

    public Diary updateFromDTO(DiaryDTO dto, Long id) {
        Optional<Diary> diaryOptional = diaryRepository.findById(id);
        if (!diaryOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found");
        }
        Diary diary = diaryOptional.get();
        if (dto.getUserId() != diary.getId()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Invalid userid");
        }
        diary.setCured(dto.isCured());

        diary.getContacts().forEach(ce -> contactEntryRepo.delete(ce));
        diary.getContacts().clear();

        dto.getContacts()
                .forEach(contactEntryDTO -> diary.getContacts().add(createContactEntryFromDTO(contactEntryDTO)));

        return diary;
    }

    public Diary saveFromDTO(DiaryDTO dto) {
        Optional<User> userCadidate = userRepository.findById(dto.getUserId());
        if (!userCadidate.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Invalid userid");
        }
        Diary newDiary = new Diary();
        newDiary.setUser(userCadidate.get());
        newDiary.setCured(dto.isCured());
        newDiary.setContacts(new ArrayList<ContactEntry>());
        dto.getContacts()
                .forEach(contactEntryDTO -> newDiary.getContacts().add(createContactEntryFromDTO(contactEntryDTO)));

        return diaryRepository.save(newDiary);
    }

    public void deleteById(Long id) {
        diaryRepository.deleteById(id);
    }

    private ContactEntry createContactEntryFromDTO(ContactEntryDTO dto) {
        ContactEntry contractEntry = new ContactEntry();
        contractEntry.setContactWith(dto.getContactWith());
        contractEntry.setDate(dto.getDate());
        contractEntry.setCustomSymptomPresent(dto.isCustomSymptomPresent());
        contractEntry.setCustomSymptom(dto.getCustomSymptom());
        contractEntry.setDescription(dto.getDescription());

        contractEntry.setSymptoms(new ArrayList<Symptom>());

        dto.getSymptoms().forEach(symptomID -> {
            Optional<Symptom> symptom = symptomRepo.findById(symptomID);
            if (symptom.isPresent()) {
                contractEntry.getSymptoms().add(symptom.get());
            }
        });

        return contractEntry;
    }
}