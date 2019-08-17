
import React, { Component } from 'react'
import { log } from 'util';

// eslint-disable-next-line no-unused-vars
class LifeCycleRandomNumber extends Component {
    render() {
        return (
            <div>
                  
                  <h1> Hi Life Cycle Part 1</h1>
                  <Body />

            </div>
        );
    }
}


class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            r : 0
        };

        this.getRandomNumber= this.getRandomNumber.bind(this);
    }
     
    
    // herr make method

    getRandomNumber(){
        //console.log('getRandomNumber')
        this.setState({ r: Math.floor(Math.random()*10)  });
        
    }
    
  render() {
    return (
      <div>
         <h1>here life cycle</h1>
         <button onClick={this.getRandomNumber }>Random Number</button>
         <NumbersRandom myNumber = {this.state.r} />
      </div>
    )
  }
}

// here create 2 step number 



 class NumbersRandom extends Component {
  render() {
    return (
      <div> 

        <p> { this.props.myNumber}</p>
          
      </div>
    )
  }
}



export default LifeCycleRandomNumber;