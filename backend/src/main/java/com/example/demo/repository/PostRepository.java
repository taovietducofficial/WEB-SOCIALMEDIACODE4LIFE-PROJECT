package com.example.demo.repository;

import com.example.demo.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
    // Bạn có thể thêm các phương thức tùy chỉnh ở đây nếu cần
}