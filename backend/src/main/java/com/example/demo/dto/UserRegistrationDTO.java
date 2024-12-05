// Source code is decompiled from a .class file using FernFlower decompiler.
package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserRegistrationDTO {
    private @NotBlank @Size(
            min = 4,
            max = 20,
            message = "Username must be between 4 and 20 characters."
    ) String username;
    private @NotBlank @Size(
            min = 6,
            message = "Password must be at least 6 characters long."
    ) String password;
    private @NotBlank @Email(
            message = "Email must be valid."
    ) String email;
    private String id;

    public UserRegistrationDTO() {
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
