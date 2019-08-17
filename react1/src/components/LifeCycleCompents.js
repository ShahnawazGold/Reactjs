


import React, { Component } from 'react';
import { log } from 'util';

class LifeCycleCompents extends Component {
    render() {
        return (
            <div>
                  
                  <h1> Hi Life Cycle Part 2 </h1>
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


      componentDidMount() {
          console.log('componentDidMount called here')
        
      }
        
      componentWillMount (){
        console.log('componentWillMount called here')
      }
      componentWillReceiveProps (newProps){
        console.log('componentWillReceiveProps called here')
      }

      // shouldComponentUpdate (newProps , nextState){
      //   console.log('componentWillReceiveProps called here')
      // }

    //   componentWillUpdate (newProps,nextState){
    //     console.log('componentWillUpdate called here')
    //   }

    //   componentDidUpdate (newProps  ,nextState){
    //     console.log('componentDidUpdate called here')
    //   }
     
    //  componentWillUnmount (){
    //   console.log('componentWillUnmount called here')
    //  }


  render() {
    return (
      <div> 
        <p> { this.props.myNumber}</p> 
      </div>
    )
  }
}



export default LifeCycleCompents;