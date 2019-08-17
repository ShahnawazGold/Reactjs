
import React, { Component } from 'react';
 
class SalesApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            total :0
        };
        this.sumPrices= this.sumPrices.bind(this);
    }

    //============ step  1.3 here make method and call sub price
    sumPrices(price){
         this.setState({ total :this.state.total +price });
    }
     

    render() { 
        console.log(this.props.items);
       //======= step 1.4 check data in console 


        //==== 1.5  here calll data in child component with use map method, map(() => {})  its return data
       var courses = this.props.items.map((item, i) => {
           return <Course  name ={item.name} price={item.price} key ={i}
            sumPrices ={this.sumPrices} active ={item.active} />

       })

        return (
            <div>
               <h1>You can buy course</h1>
               <div id="courses">
                     {courses}
                     <p id= "total ">Total <b>{this.state.total}</b></p>
               </div>
                
            </div>
        );
    }
}


 
class Course  extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
            active :false 
        };

        this.clicker= this.clicker.bind(this);
    }
    //============ 2.1 ==== add clicker method  js call add prices

    clicker(){
        var active = ! this.state.active;
        this.setState({ active : active  });

        //======= 2.2   here call sum prices method with active state check price
        this.props.sumPrices(active ? this.props.price : - this.props.price)
    }
     

    render() { 
        return (
            <div>
                {/* ========= 2.3 here call clicker method add prices then show total */}
                  <p onClick ={this.clicker} >  {this.props.name }  <b> {this.props.price}</b></p>
            </div>
        );
    }
}
 
export default SalesApp;