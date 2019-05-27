package com.anlhan.todolistapp.controller;

import com.anlhan.todolistapp.entity.User;
import com.anlhan.todolistapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> save(@RequestBody User user){

        User newUser = userService.saveOrUpdateUser(user);

        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);

    }



}
