import React, { Component } from "react";

class Header extends Component {
  render() {
    var i = 1;

    return (
      <div>
        <h1>header {i == 3 ? "true" : "false"}</h1>
      </div>
    );
  }
}

export default Header;
