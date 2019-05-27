package com.anlhan.todolistapp.repository;

import com.anlhan.todolistapp.entity.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodolistRepository extends JpaRepository<TodoList,Long> {

}
