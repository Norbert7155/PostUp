package com.example.server.repository;

import com.example.server.model.Post;
import com.example.server.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;


    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<User> userRowMapper = (rs, rowNum) ->{
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        return user;
    };

    public List<User> findAll(){
        String sql = "SELECT id, username, password FROM user";
        return jdbcTemplate.query(sql, userRowMapper);
    }

    public User findById(Long id){
        String sql = "SELECT id, username, password FROM user WHERE id = ?";
        List<User> results = jdbcTemplate.query(sql, userRowMapper, id);
        return results.isEmpty() ? null : results.get(0);
    }

    public User findByUsername(String username){
        String sql = "SELECT id, username, passwrod FROM user WHERE username = ?";
        List<User> result = jdbcTemplate.query(sql, userRowMapper, username);
        return  result.isEmpty() ? null : result.get(0);
    }

    public User save(User user) {
        if (user.getId() == null) {
            return insert(user);
        } else {
            return update(user);
        }
    }

    public User insert(User user){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO user (username, password) VALUES (?, ?)";

        jdbcTemplate.update(connection->{
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            return ps;
        }, keyHolder);

        Number generatedId = keyHolder.getKey();
        user.setId(generatedId != null ? generatedId.longValue() : null);
        return user;
    }

    public User update(User user){
        String sql = "UPDATE user SET username = ?, password = ? WHERE id = ?";
        jdbcTemplate.update(sql, user.getUsername() , user.getPassword(), user.getId() );
        return user;
    }

}
