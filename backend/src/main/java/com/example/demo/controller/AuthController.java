// Source code is decompiled from a .class file using FernFlower decompiler.
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(
        origins = {"http://localhost:1903"}
)
@RequestMapping({"/api/auth"})
class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping({"/users"})
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = this.userService.getAllUsers();
        if (users.isEmpty()) {
            System.out.println("No users found in the database");
        }

        return ResponseEntity.ok(users);
    }

    @DeleteMapping({"/users/{id}"})
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        try {
            System.out.println("Received request to delete user with ID: " + id); // Log ID
            this.userService.deleteUser(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage()); // Log lỗi chi tiết
            return ResponseEntity.badRequest().body("Error deleting user: " + e.getMessage());
        }
    }
}
