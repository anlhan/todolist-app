import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CreateTodoList extends Component {
  state = {
    todoListName: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createNewTodoList(this.state.todoListName);
    this.setState({ todoListName: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="todoListName"
            className="form-control"
            placeholder="Enter new to-do list name"
            value={this.state.todoListName}
            onChange={this.onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create List
        </button>
      </form>
    );
  }
}

// PropTypes
CreateTodoList.propTypes = {
  createNewTodoList: PropTypes.func.isRequired
};
