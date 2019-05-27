import React, { Component } from "react";

export default class TodoListItem extends Component {
  state = {};

  markCompleteHandler = e => {
    this.props.markItemAsComplete(this.props.todolistItem.id);
  };
  render() {
    return (
      <tr>
        <td>{this.props.todolistItem.itemName}</td>
        <td>{this.props.todolistItem.description}</td>
        <td>{this.props.todolistItem.deadline}</td>
        <td>{this.props.todolistItem.status}</td>
        <td>
          {" "}
          <button
            onClick={() => {
              this.markCompleteHandler();
            }}
            className="btn btn-success"
          >
            Mark as Complete
          </button>
        </td>
        <td>
          {" "}
          <button
            onClick={this.props.deleteOneTodoListItem.bind(
              this,
              this.props.todolistItem.id
            )}
            className="btn btn-danger"
          >
            Delete Item
          </button>
        </td>
      </tr>
    );
  }
}
