package com.example.server.repository;


import com.example.server.model.Post;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Types;
import java.util.List;

@Repository
public class PostRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private final RowMapper<Post> postRowMapper = (rs, rowNum) -> {
        Post post = new Post();
        post.setId(rs.getLong("id"));
        post.setTitle(rs.getString("title"));
        post.setContent(rs.getString("content"));
        long userId = rs.getLong("user_id");
        post.setUserId(rs.wasNull() ? null : userId);
        return post;
    };

    public PostRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Post> findAll(){
        String sql = "SELECT id AS idPost, title, content FROM post";
        return jdbcTemplate.query(sql, postRowMapper);
    }

    public Post findById(Long id) {
        String sql = "SELECT id, title, content FROM post WHERE id=?";
        List<Post> result = jdbcTemplate.query(sql, postRowMapper, id);
        return result.isEmpty() ? null : result.get(0);
    }

    public Post save(Post post){
        if(post.getId() == null){
            return insert(post);
        }
        else {
            //Update
            return post;
        }
    }


    private Post insert(Post post){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1,post.getTitle());
            ps.setString(2, post.getContent());
            if(post.getUserId() != null){
                ps.setLong(3, post.getUserId());
            } else {
                ps.setNull(3, Types.BIGINT);
            }
            return ps;
        }, keyHolder);

        Number generatedId = keyHolder.getKey();
        post.setId(generatedId != null ? generatedId.longValue() : null);
        return post;
        
    }

}
