package com.example.server.repository;


import com.example.server.model.Post;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;

public class PostRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Post> findAll(){
        return entityManager.createQuery("SELECT id, title, content", Post.class).getResultList();
    }
}
