import React, { Component } from "react";
import SalesApp from "./components/SalesApp";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0
    };
  }

  render() {
    var courses = [
      { name: "React Native", price: 6000 },
      { name: "React JS", price: 6000 },
      { name: "Android ", price: 6000 },
      { name: "iOS Native", price: 6000 }
    ];
    return (
      <div>
        <h1>h1 </h1>
        <SalesApp items={courses} />
      </div>
    );
  }
}
