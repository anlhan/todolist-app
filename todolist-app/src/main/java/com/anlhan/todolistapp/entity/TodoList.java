package com.anlhan.todolistapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "todolists")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "todolist_name", length = 100)
    @NotBlank(message = "Please enter the name!")
    private String name;

    @JoinColumn(name = "owner_user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private User todolistOwner;

    @JsonIgnore
    @OneToMany(mappedBy = "ownerTodoList")
    private List<TodoListItem> todoListItems;
}

