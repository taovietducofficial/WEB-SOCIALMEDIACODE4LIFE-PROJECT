package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "courses")
public class Course {
    @Id
    private String id;
    private String name;       // Tên khóa học
    private String instructor; // Giảng viên
    private String level;      // Trình độ
    private String duration;   // Thời lượng
    private Double price;      // Giá
    private String description; // Mô tả

    // Constructor
    public Course(String name, String instructor, String level, String duration, Double price, String description) {
        this.name = name;
        this.instructor = instructor;
        this.level = level;
        this.duration = duration;
        this.price = price;
        this.description = description;
    }

    // Getters và setters
    // ...
}
