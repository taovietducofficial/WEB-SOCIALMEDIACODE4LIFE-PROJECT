package com.example.demo.controller;

import com.example.demo.model.Post;
import com.example.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin(origins = "http://localhost:1903") // Cấu hình CORS để hỗ trợ Frontend
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // Đọc thư mục lưu file từ application.properties
    @Value("${file.upload-dir}")
    private String uploadDir;

    // API tạo bài viết mới
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post createdPost = postService.createPost(post);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    // API chỉnh sửa bài viết
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable String id, @RequestBody Post updatedPost) {
        Post post = postService.updatePost(id, updatedPost);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    // API tải lên file (hình ảnh, video)
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // Kiểm tra và tạo thư mục lưu trữ
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Lưu file vào thư mục
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename(); // Đặt tên file để tránh trùng
            Path filePath = uploadPath.resolve(fileName);
            Files.write(filePath, file.getBytes());

            // Trả về URL của file
            String fileUrl = "http://localhost:8081/files/" + fileName;
            return new ResponseEntity<>(fileUrl, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Lỗi khi upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // API xóa bài viết
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
}
