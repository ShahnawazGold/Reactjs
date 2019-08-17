
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SalesApp from './components/SalesApp'
 
class App extends Component {


  render() { 


    // ======step 1 here create data 
    var courses  = [        
             { name : 'React Native', price  :6000},
             { name : 'React JS', price  :6000},
             { name : 'Android ', price  :6000},
             { name : 'iOS Native', price  :6000},
         ]

    return (
      <div>

        <div className="App">
        <h1>Sales Course App</h1>
           {/* step 1.2 here called component and pass props */}
           <SalesApp  items ={courses}/>
            
        </div>
      </div>
    );
  }
}
 
export default App;
