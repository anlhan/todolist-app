import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import GetTodoLists from "./components/page1/GetTodoLists";
import CreateTodoList from "./components/page1/CreateTodoList";

import axios from "axios";
import GetAllTodoListItems from "./components/page2/GetAllTodoListItems";
import CreateTodoListItem from "./components/page2/CreateTodoListItem";

class App extends Component {
  state = {
    allTodoLists: [], //page 1 tüm listeler

    selectedListID: "",
    selectedList: {}, //açılan liste için

    selectedListItems: [] // page 2 selectedlist itemları için
  };

  //Tüm TodoListleri Listeler
  componentDidMount() {
    axios.get("http://localhost:8080/api/todolists/all").then(res => {
      this.setState({ allTodoLists: res.data });
    });
  }

  // Get Selected Todolist
  getSelectedTodoListFunc = id => {
    axios.get(`http://localhost:8080/api/todolists/${id}`).then(res => {
      this.setState({ selectedList: res.data, selectedListID: res.data.id });
    });
  };

  // Get TodoListItems Alt Itemları Çek
  getAllTodoListItemsFunc = list_id => {
    axios
      .get(`http://localhost:8080/api/todolists/todolistDetails/${list_id}`)
      .then(res => {
        this.setState({ selectedListItems: res.data });
      });
  };

  // Create New TodoList
  createNewTodoList = name => {
    axios
      .post("http://localhost:8080/api/todolists", {
        name
      })
      .then(res =>
        this.setState({ allTodoLists: [...this.state.allTodoLists, res.data] })
      );
  };

  // Create New TodoList Item
  createNewTodoListItem = newItem => {
    axios
      .post("http://localhost:8080/api/todolists/todolistDetails", newItem)
      .then(res => {
        this.setState({
          selectedListItems: [...this.state.selectedListItems, res.data]
        });
      });
  };

  // Delete One Todo List
  deleteOneTodoList = id => {
    axios.delete(`http://localhost:8080/api/todolists/${id}`).then(res =>
      this.setState({
        allTodoLists: [
          ...this.state.allTodoLists.filter(todo => todo.id !== id)
        ]
      })
    );
  };

  // Delete One Todo List ITEM
  deleteOneTodoListItem = list_id => {
    axios
      .delete(`http://localhost:8080/api/todolists/todolistDetails/${list_id}`)
      .then(res =>
        this.setState({
          selectedListItems: [
            ...this.state.selectedListItems.filter(todo => todo.id !== list_id)
          ]
        })
      );
  };

  //Mark One TodoList Item As COMPLETE (status:INCOMPLETE -> COMPLETE)
  markItemAsComplete = item_id => {
    axios
      .put(`http://localhost:8080/api/todolists/todolistDetails/${item_id}`)
      .then(() => {
        this.getAllTodoListItemsFunc(this.state.selectedListID);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="list-group">
                        <h1>To Do Lists</h1>
                        <GetTodoLists
                          allTodoLists={this.state.allTodoLists}
                          getAllTodoListItemsFunc={this.getAllTodoListItemsFunc}
                          getSelectedTodoListFunc={this.getSelectedTodoListFunc}
                          deleteOneTodoList={this.deleteOneTodoList}
                        />
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h1>Create New List</h1>
                      <CreateTodoList
                        createNewTodoList={this.createNewTodoList}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            />

            <Route
              exact
              path="/listDetails"
              render={props => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-md-8">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Status</th>
                            <th scope="col">Complete</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <GetAllTodoListItems
                            selectedListItems={this.state.selectedListItems}
                            deleteOneTodoListItem={this.deleteOneTodoListItem}
                            markItemAsComplete={this.markItemAsComplete}
                          />
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-4">
                      <h3>Create New To-do Item</h3>
                      <CreateTodoListItem
                        createNewTodoListItem={this.createNewTodoListItem}
                        selectedList={this.state.selectedList}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
