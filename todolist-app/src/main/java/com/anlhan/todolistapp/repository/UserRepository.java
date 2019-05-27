package com.anlhan.todolistapp.repository;

import com.anlhan.todolistapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
