package com.example.demo.service;

import com.example.demo.model.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(String id, Post updatedPost) {
        // Kiểm tra xem bài viết có tồn tại không
        Post existingPost = postRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Bài viết với ID: " + id + " không tồn tại"));

        // Cập nhật các trường của bài viết
        if (updatedPost.getStatus() != null) {
            existingPost.setStatus(updatedPost.getStatus());
        }
        if (updatedPost.getImageUrl() != null) {
            existingPost.setImageUrl(updatedPost.getImageUrl());
        }
        if (updatedPost.getVideoUrl() != null) {
            existingPost.setVideoUrl(updatedPost.getVideoUrl());
        }

        // Lưu lại bài viết đã chỉnh sửa
        return postRepository.save(existingPost);
    }

    public void deletePost(String id) {
        if (!postRepository.existsById(id)) {
            throw new IllegalArgumentException("Bài viết với ID: " + id + " không tồn tại");
        }
        postRepository.deleteById(id);
    }
}


