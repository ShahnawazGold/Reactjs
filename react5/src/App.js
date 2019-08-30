//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
//import FirebaseLogin from './components/FirebaseLogin';
import Github from "./components/Github";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Api App</h1>
          <Github />
          {/* <FirebaseLogin /> */}
        </div>
      </div>
    );
  }
}

export default App;
