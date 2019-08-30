import React, { Component } from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Git Search</Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavItem href="#"> login</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
