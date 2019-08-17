

//===================call with state 
//               
//             topic 2 here states
//
//===========================

import React, { Component } from 'react';


class Propss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars  : ["s-MBW", "s-honda", "s-Audi", "Y"]
        };
        this.handleClick= this.handleClick.bind(this);
    }
     
    // 1st make method then .. we will binding method 
    handleClick (){
          this.setState( { cars: this.state.cars.reverse()})
    }
    

    render() {
        return (
            <div>
                  
                  <h1  onClick={this.handleClick}>Props here</h1>
                  <Cars msg="this is my car components" model ="2344"  coolCars = { this.state.cars} />

            </div>
        );
    }
}

/// here careate defualt complonent


Propss.defaultProps = {
    cars  : ["MBW", "honda", "Audi", "Y"]
};



class Cars extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                  <h1> CAR one</h1>
                  <p>  { this.props.msg} </p>
                  <p>  { this.props.model} </p>
                  <p>  { this.props.coolCars.map( (item, i) => {
                      return <p key ={i}> {item}</p> 
                  })} </p>
            </div>
        );
    }
}

export default Propss;


//===================call with state 
//               
//             topic 1 Props
//
//===========================


// import React, { Component } from 'react';


// class Propss extends Component {

//     render() {
//         return (
//             <div>
                  
//                   <h1  > Props here</h1>
//                   <Cars msg="this is my car components" model ="2344"  coolCars = { this.props.cars} />

//             </div>
//         );
//     }
// }


// Propss.defaultProps = {
//     cars  : ["MBW", "honda", "Audi", "Y"]
// };


// class Cars extends Component {
//     render() {
//         console.log(this.props);
        
//         return (
//             <div>
//                   <h1> CAR one</h1>
//                   <p>  { this.props.msg} </p>
//                   <p>  { this.props.model} </p>
//                   <p>  { this.props.coolCars.map( (item, i) => {
//                       return <p key ={i}> {item}</p> 
//                   })} </p>
//             </div>
//         );
//     }
// }

// export default Propss;