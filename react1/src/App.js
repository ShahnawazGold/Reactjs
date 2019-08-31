import React, { Component } from "react";
import Header from "./components/Header";
import LifeCycleCompents from "./components/LifeCycleCompents";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shah",
      email: "abc@email.com",
      marksheet: { physics: 76, biology: 65, urdu: 56 }
    };
  }

  render() {
    return (
      <div>
        <Header />
        <LifeCycleCompents />
        {/* <NewComponent propname={this.state.name} />
        <Registration propemail={this.state.email} /> */}
        <Marksheet marksheet={this.state.marksheet} />
      </div>
    );
  }
}

class NewComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.propname}</h1>
      </div>
    );
  }
}

class Registration extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.propemail}</h1>
      </div>
    );
  }
}

class Marksheet extends Component {
  render() {
    return (
      <div>
        <h1>Physics: {this.props.marksheet.physics}</h1>
        <h1>Biology: {this.props.marksheet.biology}</h1>
        <h1>Urdu: {this.props.marksheet.urdu}</h1>
      </div>
    );
  }
}
