package com.example.server.controller;

import com.example.server.model.Post;
import com.example.server.model.User;
import com.example.server.repository.PostRepository;
import com.example.server.repository.UserRepository;
import com.example.server.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")

public class UserController {

    private final UserRepository userRepository;
    private final PostService postService;

    @Autowired
    public UserController(PostService postService, UserRepository userRepository){
        this.postService = postService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userRepository.findById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/username/{username}")
    public  ResponseEntity<User> findByUsername(@PathVariable String username){
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User userRequest){
        User newUser = userRepository.save(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    @PostMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userRequest){
        User user = userRepository.findById(id);
        if(user == null){
            return ResponseEntity.notFound().build();
        }
        user.setUsername(userRequest.getUsername());
        user.setPassword(userRequest.getPassword());
        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);

    }

    @GetMapping("/{userId}/post")
    public List<Post> getUserPost(@PathVariable Long userId) {
        return postService.getAllPostByUserId(userId);
    }
}
