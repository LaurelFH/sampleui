import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
import PopoverExampleAnimation from "./components/sidebarmenu";
import ButtonExample from "./components/compbuttons";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import FloatingButton from "./components/floatingbutton";
//import Drawer from "material-ui/Drawer";
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
//import MenuItem from 'material-ui/MenuItem';
//import SideNav from "react-materialize/lib/SideNav";
//import sideNavItem from "react-materialize/lib/sideNavItem";

class App extends Component {
  render() {
    return (

      <div className="App">
      <MuiThemeProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         </header>
 <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">FISSION</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Save Your Canvas</a></li>
        <li><a href="collapsible.html">Sign-In</a></li>
      </ul>
    </div>
  </nav>


<Grid>
  <Row>
 <div id="infobox"><FissionButton />This is info on how to use the app;  there will be info here explaining it blah</div>

   <CodeEditor />

   </Row>

   <Row>

<Col xs4={2} lg={4}>  <i class="material-icons md-48">web</i></Col>
<Col xs4={2} lg={4}>   <i class="material-icons md-48">face</i></Col>
<Col xs4={2} lg={4}>    <i class="material-icons md-48">build</i></Col>
<Col xs4={2} lg={4}>    <i class="material-icons md-48">featured_play_list</i></Col>
<Col xs4={2} lg={4}>  <i class="material-icons md-48">web</i></Col>
<Col xs4={2} lg={4}>   <i class="material-icons md-48">face</i></Col>
<Col xs4={2} lg={4}>    <i class="material-icons md-48">build</i></Col>
<Col xs4={2} lg={4}>    <i class="material-icons md-48">featured_play_list</i></Col>

   </Row>



</Grid>
</MuiThemeProvider>
</div>

    );
  }
}

export default App;
