import React, { Component } from 'react';
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

class App extends Component {
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
        <Col xs={6} md={4}> <PopoverExampleAnimation />
        </Col>
        </Row>
        </Grid>


         <ButtonExample />
       
                  </div>
                                   
    );
  }
}

export default App;
