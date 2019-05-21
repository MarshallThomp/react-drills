import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  handleAddTask = task => {
    this.setState({ list: [...this.state.list, task]})
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List task={this.state.list} />
      </div>
    );
  }
}

export default App;
