

import React, { Component } from 'react';

export class Fun extends Component {

    sayHellow (name){
        return "hello  "+name
    }

    render() {
        return (
            <div>
                <h1>  <p>just same data  { this.sayHellow("shahnawaz")} </p></h1>
            </div>
        );
    }
}

export default Fun;
