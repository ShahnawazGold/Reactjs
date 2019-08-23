
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
const Link = require("react-router-dom").Link;
 
class App extends Component {


  render() { 
    return (
      <div>
        <div className="App">
        <h1>Router App</h1>  
         <ul>
         <li><Link to="/One">One</Link></li>
         </ul>
        </div>
      </div>
    );
  }
}
 
export default App;
