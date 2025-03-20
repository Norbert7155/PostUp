package com.example.server.repository;


import com.example.server.controller.UserController;
import com.example.server.model.Post;
import com.example.server.service.PostService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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
        long userId = rs.getLong("userId");
        post.setUserId(rs.wasNull() ? null : userId);
        return post;
    };


    public List<Post> findAll(){
        String sql = "SELECT id, title, content, userId FROM post";
        return jdbcTemplate.query(sql, postRowMapper);
    }

    public Post findById(Long id) {
        String sql = "SELECT id, title, content, userId FROM post WHERE id=?";
        List<Post> result = jdbcTemplate.query(sql, postRowMapper, id);
        return result.isEmpty() ? null : result.get(0);
    }

    public Post save(Post post){
        if(post.getId() == null){
            return createPost(post);
        }
        else {
            return update(post);
        }
    }


    private Post createPost(Post post){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO post (title, content, userId) VALUES (?, ?, ?)";

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

    private Post update(Post post){
        String sql = "UPDATE post SET title=?, content=?, userId=? WHERE id=?";
        jdbcTemplate.update(sql, post.getTitle(), post.getContent(), post.getUserId(), post.getId());
        return post;
    }

    public void deleteById(Long id){
        String sql = "DELETE FROM post WHERE id = ?";
        jdbcTemplate.update(sql,id);
    }

    public List<Post> getAllPostByUserId(Long userId){
        String sql = "SELECT id, title, content, userId FROM post WHERE userId = ?";
        return jdbcTemplate.query(sql, postRowMapper, userId);
    }


}
