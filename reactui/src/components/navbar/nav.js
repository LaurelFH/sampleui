import React, { Component} from "react";
import NavItem from "react-bootstrap/lib/NavItem";
import Navbar from "react-bootstrap/lib/Navbar";
import NavbarBrand from "react-bootstrap/lib/NavbarBrand";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Nav from "react-bootstrap/lib/Nav";
import "./navbar.css";

class NavbarBrandNew extends Component{

  handleSelect(eventKey) {
    //event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/about">FISSION</NavItem>
        <NavItem eventKey="2" href="/canvas">NavItem 2 content</NavItem>
         <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">About</MenuItem>
          <MenuItem eventKey="4.2">Log-in</MenuItem>
          // <MenuItem divider />
          // <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}


export default NavbarBrandNew;
