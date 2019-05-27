package com.anlhan.todolistapp.service;

import com.anlhan.todolistapp.entity.TodoList;
import com.anlhan.todolistapp.entity.TodoListItem;
import com.anlhan.todolistapp.repository.TodolistItemRepository;
import com.anlhan.todolistapp.repository.TodolistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodolistService {

    @Autowired
    private TodolistRepository todolistRepository;

    @Autowired
    private TodolistItemRepository todolistItemRepository;

    public TodoList saveOrUpdateTodolist(TodoList newTodoList){
        return todolistRepository.save(newTodoList);
    }

    public Iterable<TodoList> getAll(){
        return todolistRepository.findAll();
    }

    public TodoList getOneById(Long id) {return todolistRepository.getOne(id); }

    public void removeOneTodoList(Long id) {

        List<TodoListItem> subItems = todolistRepository.getOne(id).getTodoListItems();

        todolistItemRepository.deleteAll(subItems);

        todolistRepository.deleteById(id);

    }
}
