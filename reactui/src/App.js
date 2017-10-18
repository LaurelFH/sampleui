import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
import PopoverExampleAnimation from "./components/sidebarmenu";
import ButtonExample from "./components/compbuttons";


import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import NavbarBrandNew from "./components/navbar";
import NavItem from "react-bootstrap/lib/NavItem";



class App extends Component {

  render() {
    return (
      <div className="App">

        <NavbarBrandNew />

        <div id="infobox"><FissionButton />This is info on how to use the app;  there will be info here explaining it blah</div>
         
         <Grid>
          <Row> 
          <Col  xs={12} md={8}>
        <CodeEditor />
        <div>
        You can add components from the menu below to the editor via copy and paste.
        </div>
        </Col>
        <Col xs={6} md={4}> <PopoverExampleAnimation /><div id="sidebarmenu">This should be a popoverside menu</div>
        </Col>
        </Row>
 
 <Row>
<Col xs={6} md={4}>  <ButtonExample /></Col>
<Col xs={6} md={4}>  <ButtonExample /></Col>
<Col xs={6} md={4}>  <ButtonExample /></Col>
<Col xs={6} md={4}>  <ButtonExample /></Col>
<Col xs={6} md={4}>  <ButtonExample /></Col>
<Col xs={6} md={4}>  <ButtonExample /></Col>
 </Row>


        </Grid>


       
       
                  </div>
                                   
    );
  }
}

export default App;
