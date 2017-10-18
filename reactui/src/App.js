import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/editor";
// import AceEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
import PopoverExampleAnimation from "./components/sidebarmenu";
import ButtonExample from "./components/compbuttons";
//import Grid from "react-bootstrap/lib/Grid";
//import Col from "react-bootstrap/lib/Col";
//import Row from "react-bootstrap/lib/Row";
//import Navbar from "./components/navbar";
//import Navbar from "react-bootstrap/lib/Navbar";
//import NavItem from "react-bootstrap/lib/NavItem";
import { Button, Card } from 'react-materialize';
import { Grid, Row, Col } from 'react-material-responsive-grid';
//import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import AppBar from 'material-ui/AppBar';
//import DragSource from "./components/draginfo";
//import AccessAlarmIcon from "material-ui-icons/AccessAlarmIcon";
//import Canvaspage from "./src/pages";
//import Aboutpage from "./src/pages";
//import FlatButton from 'material-ui/FlatButton';
// ES6
//import Draggable from 'react-draggable'; // The default
//import {DraggableCore} from 'react-draggable'; // <DraggableCore>
//import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

// CommonJS
//let Draggable = require('react-draggable');
//let DraggableCore = Draggable.DraggableCore;


 // <Draggable
 //        axis="x"
 //        handle=".handle"
 //        defaultPosition={{x: 0, y: 0}}
 //        position={null}
 //        grid={[25, 25]}
 //        onStart={this.handleStart}
 //        onDrag={this.handleDrag}
 //        onStop={this.handleStop}>
 // <div id="example1"> let's try this out</div>
 // </Draggable>




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
      //implementing DnD eventlistener in Jquery 
      //$("#editor").droppable({
//         drop: function (e) {
//             var draggedElement = e.draggable.currentTarget;
//             var text = $.trim(draggedElement.text());
//             console.log("Dragged Element: "+text);
//         }
// });

eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };



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
 

<Col xs4={4} lg={6}>  <ButtonExample /></Col>
<Col xs4={4} lg={6}>   <ButtonExample /></Col>
<Col xs4={4} lg={6}>  <i class="material-icons md-48">web</i></Col>
<Col xs4={4} lg={6}>   <i class="material-icons md-48">face</i></Col>
<Col xs4={4} lg={6}>    <i class="material-icons md-48">build</i></Col>
<Col xs4={4} lg={6}>    <i class="material-icons md-48">featured_play_list</i></Col>



 </Row>
</Grid>

       

       
                  </div>
                                   
    );
  }
}

export default App;
