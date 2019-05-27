package com.anlhan.todolistapp.repository;

import com.anlhan.todolistapp.entity.TodoListItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodolistItemRepository extends JpaRepository<TodoListItem,Long> {

}
