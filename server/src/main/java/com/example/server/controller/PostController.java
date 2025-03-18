package com.example.server.controller;

import com.example.server.model.Post;
import com.example.server.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post")

public class PostController {

    @Autowired
    PostRepository postRepository;

    @GetMapping()
    public List<Post> getAll(){
        return postRepository.findAll();
    };

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Post post = postRepository.findById(id);
        if(post == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(post);
    }

}
