import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

 import Canvaspage from "./pages/canvas/Canvaspage.js";
 import Aboutpage from "./pages/about/Aboutpage.js";

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router> 
      <Switch>

      <Route exact path="/" component={Canvaspage} />
      <Route exact path="/about" component={Aboutpage} />


      </Switch>
      </Router>

        <NavbarBrandNew />
        
         <Grid>
          <Row> 
          <Col md={6}>
        <CodeEditor />
  
        </Col>

        <Col md={6}>
        <PopoverExampleAnimation />
         
        </Col>
        </Row>

        <FissionButton />This is info on how to use the app;  there will be info here explaining it blah./n
        You can add components from the menu below to the editor via copy and paste.
 
 <Row>
<Col md={4}>  <ButtonExample /></Col>
<Col md={4}>  <ButtonExample /></Col>
<Col md={4}>  <ButtonExample /></Col>

 </Row>


        </Grid>


       
       
                  </div>
                                   
    );
  }
}

export default App;
