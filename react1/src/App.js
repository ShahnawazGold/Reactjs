
import React, { Component } from 'react';
import Header2 from './components/Header';
import Fun from './components/Fun'
// import Propss from './components/Propss';
import LifeCycleRandomNumber from './components/LifeCycleRandomNumber'
import LifeCycleCompents from './components/LifeCycleCompents'
import Timer from './components/Timer'


export class App extends Component {
  render() {
    return (
      <div>

         <Timer start ={ Date.now() }/>
        <LifeCycleRandomNumber />
        <LifeCycleCompents />
        {/* <Propss /> */}
        <Fun />
        <Header2 />
        <Header />
        <Footer />

      </div>
    );
  }
}


 
class Header  extends Component {
  render() { 
    return (
      <div>
         <h1>header </h1>

      </div>
    );
  }
}


 
class Footer  extends Component {
  render() { 
    return (
      <div>
         <h1>footer </h1>
      </div>
    );
  }
}
 


 


export default App;




