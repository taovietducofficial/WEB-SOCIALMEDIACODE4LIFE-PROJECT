package com.example.demo.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    // Sử dụng SecretKey từ thư viện để tránh lỗi tiềm tàng khi sử dụng String làm khóa
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    /**
     * Tạo JWT token với thông tin username.
     *
     * @param username Tên người dùng
     * @return Token đã tạo
     */
    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims) // Các thông tin bổ sung trong token
                .setSubject(username) // Username sẽ được lưu trong "subject"
                .setIssuedAt(new Date(System.currentTimeMillis())) // Ngày phát hành
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 giờ
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256) // Ký bằng HS256 với khóa bảo mật
                .compact();
    }

    /**
     * Trích xuất username từ JWT token.
     *
     * @param token JWT token
     * @return Username
     */
    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    /**
     * Kiểm tra token có hợp lệ hay không.
     *
     * @param token   JWT token
     * @param username Username để so khớp
     * @return true nếu hợp lệ, ngược lại là false
     */
    public boolean validateToken(String token, String username) {
        String extractedUsername = extractUsername(token);
        return extractedUsername.equals(username) && !isTokenExpired(token);
    }

    /**
     * Kiểm tra token đã hết hạn hay chưa.
     *
     * @param token JWT token
     * @return true nếu token đã hết hạn, ngược lại là false
     */
    private boolean isTokenExpired(String token) {
        Date expirationDate = getClaims(token).getExpiration();
        return expirationDate.before(new Date());
    }

    /**
     * Lấy thông tin Claims từ token.
     *
     * @param token JWT token
     * @return Claims (payload của token)
     */
    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
