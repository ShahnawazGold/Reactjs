import React, { Component } from 'react';

class Timer extends Component {

  
     ///===================
    //
    //       1.1 step   
    // 
    //====================
   constructor(props) {
       super(props);
       this.state = {
           clock :0
       };
       this.ticker = this.ticker.bind(this);
   }
    ///===================
    //
    //       1.2 step   
    // 
    //====================
    ticker(){
        this.setState({clock : new Date() - this.props.start});
    }
     ///===================
    //
    //       1.3 step   
    // 
    //====================

    componentDidMount(){
        this.timer = setInterval(this.ticker,1000)
    }
      
    render() {

        var clock = Math.round(this.state.clock / 1000);

        return (
            <div>
                <h1>Timer</h1>
                <p> here you seen timer</p> <br/>
                <span> {clock}</span>
                <p>Seconds</p>
                
            </div>
            
        );
    }
}

export default Timer;