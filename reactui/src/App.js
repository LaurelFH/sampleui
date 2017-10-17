import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/editor";
// import AceEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
import PopoverExampleAnimation from "./components/sidebarmenu";
import ButtonExample from "./components/compbuttons";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
//import Navbar from "./components/navbar";
import Navbar from "react-bootstrap/lib/Navbar";
import NavItem from "react-bootstrap/lib/NavItem";
//import Canvaspage from "./src/pages";
//import Aboutpage from "./src/pages";





class App extends Component {
//would I have to set this to the buttons array like in the example?
//state={ components};

//
//
//testing Navbar 
// <Navbar brand='logo' right>
//   <NavItem href='Aboutpage.js'>Welcome</NavItem>
//   <NavItem href='Canvaspage.js'>Components</NavItem>
// </Navbar>


//testing old routing

      //<Router>
      //<Navbar />
      //<Switch>

      //<Route exact path="/" component={Aboutpage} />
      //<Route exact path="/canvas" component={Canvaspage} />

      //</Switch>
      //</Router>




  render() {
    return (
      <div className="App">

        <nav>
          <div className="nav-wrapper">
            <a href="www.google.com" className="brand-logo">FISSION</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="collapsible.html">Sign-in</a></li>
           </ul>
           </div>
       </nav>


        <div id="infobox"><FissionButton />This is info on how to use the app</div>
  
           <Grid>
          <Row> 
          <Col  xs={12} md={8}>
        <CodeEditor />
        </Col>
        <Col xs={6} md={4}> <PopoverExampleAnimation /><div id="sidebarmenu"></div>
        </Col>
        </Row>
        </Grid>


         <ButtonExample />
       
                  </div>
                                   
    );
  }
}

export default App;
