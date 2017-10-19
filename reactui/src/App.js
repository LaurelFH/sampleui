import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/editor";
import FissionButton from "./components/fissionButton";
//import PopoverExampleAnimation from "./components/sidebarmenu";
//import ButtonExample from "./components/compbuttons";


import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import NavbarBrandNew from "./components/navbar";
import NavItem from "reactstrap/lib/NavItem";
//importing page routes
 import Canvaspage from "./pages/canvas/Canvaspage.js";
 import Aboutpage from "./pages/about/Aboutpage.js";
 import Previewpage from "./pages/preview/Previewpage.js";

//importing the sidebar menus
 import Sidebarmenunew from "./components/sidebarmenunew";
 import Newcompomenu from "./components/newcompomenu";

class App extends Component {

  render() {
    return (
     <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
      <NavbarBrandNew />

      <Router> 
      <Switch>
      <Route exact path="/about" component={Aboutpage} />
      <Route exact path="/canvas" component={Canvaspage} />
      <Route exact path="/preview" component={Previewpage} />
      </Switch>
      </Router>

    
        <Container>

          <Row> 
          <Col xs="6">
       
        <Newcompomenu />
          </Col>

         <Col xs="6">
        <Sidebarmenunew />
         </Col>
        </Row>

        <FissionButton />This is info on how to use the app;  there will be info here explaining it./n
        You can add components from the menu below to the editor via copy and paste.
 
 <Row>


 </Row>    


       </Container>
       
                  </div>
                  </MuiThemeProvider>
                                   
    );
  }
}

export default App;
