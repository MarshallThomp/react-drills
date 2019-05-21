import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&w=1000&q=80"}/>
      </div>
    );
  }
}

export default App;
