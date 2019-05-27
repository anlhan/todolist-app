package com.anlhan.todolistapp.service;

import com.anlhan.todolistapp.entity.User;
import com.anlhan.todolistapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User newUser){

        return userRepository.save(newUser);
    }






}
