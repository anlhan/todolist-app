import React, { Component } from "react";

export default class CreateTodoListItem extends Component {
  state = {
    name: "",
    description: "",
    deadline: "",
    status: "INCOMPLETE",
    ownerTodoList: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      itemName: this.state.name,
      description: this.state.description,
      deadline: this.state.deadline,
      status: this.state.status,
      ownerTodoList: this.props.selectedList
    };

    this.props.createNewTodoListItem(newItem);

    this.setState({
      name: "",
      description: "",
      deadline: "",
      ownerTodoList: {}
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter new item name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="deadline"
            className="form-control"
            placeholder="Deadline"
            value={this.state.deadline}
            onChange={this.onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create List Item
        </button>
      </form>
    );
  }
}
