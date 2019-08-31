import React, { Component } from "react";

class SetStatsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.setHendler = this.setHendler.bind(this);
  }

  setHendler() {
    var items = "setstate";
    var myArry = (this.state.data += 1);
    this.setState({ data: myArry });
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <button onClick={this.setHendler}> Set State</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default SetStatsComp;
