import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      input: "",
    }
  }

  handleInputChange = value => {
    this.setState({ input: value })
  }
  handleAddTask = (value) => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }


  render() {
    let list = this.state.list.map((task, index) => {
      return <Todo key={index} task={task}/>
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
        <input 
        value={this.state.input}
        placeholder="Enter new task"   
        onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
