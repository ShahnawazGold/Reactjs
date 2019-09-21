import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  handleSubmit(event) {
    alert("A name submit " + this.state.value);
    event.preventDefault();
  }
  changeHandle(e) {
    this.setState({ value: e.target.value });
    console.log("change event");
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>form </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            name :
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.changeHandle}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
