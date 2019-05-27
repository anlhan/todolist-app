package com.anlhan.todolistapp.controller;


import com.anlhan.todolistapp.entity.TodoList;
import com.anlhan.todolistapp.entity.TodoListItem;
import com.anlhan.todolistapp.service.TodolistItemService;
import com.anlhan.todolistapp.service.TodolistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/todolists")
@CrossOrigin
public class TodolistController {

    @Autowired
    private TodolistService todolistService;

    @Autowired
    private TodolistItemService todolistItemService;

    @GetMapping("/{td_id}")
    public ResponseEntity<?> getSingleTodoList(@PathVariable Long td_id) {

        TodoList todoList = todolistService.getOneById(td_id);
        return new ResponseEntity<TodoList>(todoList, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<TodoList> getAllTodoLists() {
        return todolistService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> createNewTodoList(@Valid @RequestBody TodoList todoList, BindingResult result) {

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        TodoList newTodoList = todolistService.saveOrUpdateTodolist(todoList);

        return new ResponseEntity<TodoList>(newTodoList, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{td_id}")
    public void deleteTodoList(@PathVariable Long td_id) {

        todolistService.removeOneTodoList(td_id);
    }


    @GetMapping("/todolistDetails/{list_id}")
    public ResponseEntity<?> getAllTodoListItemsById(@PathVariable Long list_id) {

        TodoList todoList = todolistService.getOneById(list_id);

        return new ResponseEntity<>(todoList.getTodoListItems(), HttpStatus.OK);
    }

    @PostMapping("/todolistDetails")
    public ResponseEntity<?> createNewTodoListItem(@Valid @RequestBody TodoListItem todoListItem,
                                                   BindingResult result) {

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        TodoListItem newTodoListItem = todolistItemService.saveOrUpdateTodolistItem(todoListItem);

        return new ResponseEntity<TodoListItem>(newTodoListItem, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/todolistDetails/{td_id}")
    public void deleteOneTodoListItem(@PathVariable Long td_id) {

        todolistItemService.deleteOneTodoListItem(td_id);
    }

    @PutMapping(path = "/todolistDetails/{td_id}")
    public ResponseEntity<?> markItemAsComplete(@PathVariable Long td_id) {

        TodoListItem completedTodoListItem = todolistItemService.markItemAsComplete(td_id);
        return new ResponseEntity<TodoListItem>(completedTodoListItem, HttpStatus.OK);

    }
}
