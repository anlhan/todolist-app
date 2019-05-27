import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class GetAllTodoListItems extends Component {
  render() {
    return this.props.selectedListItems.map(todolistItem => (
      <TodoListItem
        key={todolistItem.id}
        todolistItem={todolistItem}
        deleteOneTodoListItem={this.props.deleteOneTodoListItem}
        markItemAsComplete={this.props.markItemAsComplete}
      />
    ));
  }
}
