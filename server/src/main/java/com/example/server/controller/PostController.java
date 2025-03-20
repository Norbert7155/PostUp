package com.example.server.controller;

import com.example.server.model.Post;
import com.example.server.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post postReqest){
        Post savedPost = postRepository.save(postReqest);
        return ResponseEntity.ok(savedPost);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> update(@PathVariable Long id, @RequestBody Post postReqest){
        Post post = postRepository.findById(id);
        if(post == null){
            return ResponseEntity.notFound().build();
        }
        post.setTitle(postReqest.getTitle());
        post.setContent(postReqest.getContent());
        post.setUserId(post.getUserId());

        Post updatePost = postRepository.save(post);
        return ResponseEntity.ok(updatePost);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id){
        Post post = postRepository.findById(id);
        if(post == null){
            return ResponseEntity.notFound().build();
        }
        postRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }




}
