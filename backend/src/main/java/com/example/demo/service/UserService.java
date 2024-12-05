package com.example.demo.service;

import com.example.demo.dto.UserRegistrationDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    // Đăng ký người dùng mới
//    public User registerUser(UserRegistrationDTO registrationDTO) {
//        // Mã hóa mật khẩu sử dụng BCrypt
//        String hashedPassword = BCrypt.hashpw(registrationDTO.getPassword(), BCrypt.gensalt());
//
//        // Tạo đối tượng người dùng và lưu vào database
//        User user = new User(registrationDTO.getUsername(), hashedPassword, registrationDTO.getEmail());
//        return userRepository.save(user);
//    }

    // Lấy danh sách người dùng
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        System.out.println("Number of users in the database: " + users.size());  // Debugging log
        return users;
    }

}
