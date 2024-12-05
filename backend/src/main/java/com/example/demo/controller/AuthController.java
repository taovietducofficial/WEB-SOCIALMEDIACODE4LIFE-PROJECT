package com.example.demo.controller;

import com.example.demo.dto.UserRegistrationDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List; // Thêm import cho List

@RestController
@CrossOrigin(origins = "http://localhost:1903")
@RequestMapping("/api/auth")
class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDTO registrationDTO) {
//        try {
//            User registeredUser = userService.registerUser(registrationDTO);
//            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully with username: " + registeredUser.getUsername());
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//        }
//    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            System.out.println("No users found in the database");
        }
        return ResponseEntity.ok(users);
    }

}

