package com.anlhan.todolistapp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "todolist_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoListItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 100)
    private String itemName;

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "deadline")
    @Temporal(TemporalType.DATE)
    private Date deadline;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private TodoListItemStatus status;

    @JoinColumn(name = "owner_todolist_id")
    @ManyToOne
    private TodoList ownerTodoList;

}