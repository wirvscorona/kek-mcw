package de.wirvsvirus.kek.service.diary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.wirvsvirus.kek.service.diary.model.User;
import de.wirvsvirus.kek.service.diary.model.UserDTO;
import de.wirvsvirus.kek.service.diary.repository.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@Api(value = "User Endpoint", description = "Provides access to user data.")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @ApiOperation(value = "Responds with a list of users")
    @GetMapping
    public ResponseEntity<Collection<User>> findUsers() {
        return new ResponseEntity<Collection<User>>(userRepo.findAll(), HttpStatus.OK);
    }

    @ApiOperation(value = "Saves new User object")
    @PostMapping
    public ResponseEntity<User> saveUser(@RequestBody UserDTO newUserDTO) {
        User newUser = User.toDomainObject(newUserDTO);

        return new ResponseEntity<User>(userRepo.save(newUser), HttpStatus.CREATED);
    }

    @ApiOperation(value = "Responds with a user object")
    @GetMapping("/{id}")
    public ResponseEntity<User> findUser(@PathVariable Long id) {
        Optional<User> userCandidate = userRepo.findById(id);

        if (!userCandidate.isPresent()) {
            return new ResponseEntity<User>(new User(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<User>(userCandidate.get(), HttpStatus.OK);
    }

    @ApiOperation(value = "Updates a user object")
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody UserDTO updatedUserDTO, @PathVariable Long id) {
        Optional<User> userCandidate = userRepo.findById(id);

        if (!userCandidate.isPresent()) {
            return new ResponseEntity<User>(new User(), HttpStatus.NOT_FOUND);
        }

        User domainUser = userCandidate.get();
        domainUser.update(updatedUserDTO);

        userRepo.save(domainUser);

        return new ResponseEntity<User>(domainUser, HttpStatus.OK);
    }

    @ApiOperation(value = "Deletes user object")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepo.deleteById(id);
    }

}