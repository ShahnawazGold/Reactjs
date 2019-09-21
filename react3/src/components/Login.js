import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert("A name submit " + this.state.email + this.state.password);
    event.preventDefault();
  }
  handleChange(e) {
    //console.log([e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>hi login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            email :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            password :
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
