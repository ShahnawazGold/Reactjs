import React, { Component } from "react";
import Header from "./components/Header";
import Github from "./components/Github";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Github />
      </div>
    );
  }
}

export default App;
