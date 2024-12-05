// Source code is decompiled from a .class file using FernFlower decompiler.
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(String id) {
        // Kiểm tra user có tồn tại hay không
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found"); // Báo lỗi nếu không tìm thấy
        }
        userRepository.deleteById(id); // Xóa user
    }
}
