import React, { Component } from "react";
import PropTypes from "prop-types";
import Todolist from "./Todolist";

export default class GetTodoLists extends Component {
  state = {};

  render() {
    return this.props.allTodoLists.map(todolist => (
      <Todolist
        key={todolist.id}
        todolist={todolist}
        deleteOneTodoList={this.props.deleteOneTodoList}
        getAllTodoListItemsFunc={this.props.getAllTodoListItemsFunc}
        getSelectedTodoListFunc={this.props.getSelectedTodoListFunc}
      />
    ));
  }
}

// PropTypes
GetTodoLists.propTypes = {
  allTodoLists: PropTypes.array.isRequired,
  deleteOneTodoList: PropTypes.func.isRequired,
  getAllTodoListItemsFunc: PropTypes.func.isRequired,
  getSelectedTodoListFunc: PropTypes.func.isRequired
};
