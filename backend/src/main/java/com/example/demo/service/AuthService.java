package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User signup(String username, String password, String email) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username already exists!");
        }
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email already exists!");
        }

        // Mã hóa mật khẩu
        String encodedPassword = Base64.getEncoder().encodeToString(password.getBytes());
        User newUser = new User(username, encodedPassword, email);
        return userRepository.save(newUser);
    }

    public User login(String username, String password) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found!");
        }

        String encodedPassword = Base64.getEncoder().encodeToString(password.getBytes());
        if (!userOpt.get().getPassword().equals(encodedPassword)) {
            throw new RuntimeException("Invalid password!");
        }

        return userOpt.get();
    }
}

