import React, { Component } from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const navLinksStyle = {
  minWidth: "87px"
};

class NavigationBar extends Component {
  render() {
    return (
      <Navbar fixedTop={true} fluid={true} className="navbar-custom">
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a href="https://cooljeffrey.github.io">Jeffrey Yu</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="https://cooljeffrey.github.io">Home</NavItem>
            <NavDropdown title="About Me" id="basic-nav-dropdown">
              <MenuItem href="/aboutme">Profile</MenuItem>
              <MenuItem href="/resume">Resume</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="avatar-container">
          <div className="avatar-img-border">
            <a href="https://cooljeffrey.github.io ">
              <img
                className="avatar-img"
                src="http://cooljeffrey.com/img/avatar-icon.jpg"
                alt="avatar"
              />
            </a>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
