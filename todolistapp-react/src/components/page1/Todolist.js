import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Todolist extends Component {
  openListButtonHandler = e => {
    this.props.getAllTodoListItemsFunc(this.props.todolist.id);
    this.props.getSelectedTodoListFunc(this.props.todolist.id);
  };

  render() {
    return (
      <li className="list-group-item">
        {this.props.todolist.name}
        <div className="float-right">
          <Link to="/listDetails">
            <button
              onClick={() => {
                this.openListButtonHandler();
              }}
              className="btn btn-success"
            >
              Open List
            </button>
            {"|||"}
          </Link>
          <button
            onClick={this.props.deleteOneTodoList.bind(
              this,
              this.props.todolist.id
            )}
            className="btn btn-danger "
          >
            Delete List
          </button>
        </div>
      </li>
    );
  }
}

// PropTypes
Todolist.propTypes = {
  todolist: PropTypes.object.isRequired,
  getAllTodoListItemsFunc: PropTypes.func.isRequired,
  getSelectedTodoListFunc: PropTypes.func.isRequired,
  deleteOneTodoList: PropTypes.func.isRequired
};
