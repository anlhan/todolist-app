package com.anlhan.todolistapp.service;

import com.anlhan.todolistapp.entity.TodoListItem;
import com.anlhan.todolistapp.entity.TodoListItemStatus;
import com.anlhan.todolistapp.repository.TodolistItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodolistItemService {

    @Autowired
    private TodolistItemRepository todolistItemRepository;

    public TodoListItem saveOrUpdateTodolistItem(TodoListItem newTodoListItem) {
        return todolistItemRepository.save(newTodoListItem);
    }

    public void deleteOneTodoListItem(Long id) {

        todolistItemRepository.deleteById(id);

    }

    public TodoListItem markItemAsComplete(Long id) {

        TodoListItem todoListItem = todolistItemRepository.getOne(id);
        todoListItem.setStatus(TodoListItemStatus.COMPLETE);

        return todolistItemRepository.save(todoListItem);

    }


}
