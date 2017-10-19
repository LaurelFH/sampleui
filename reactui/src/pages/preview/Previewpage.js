import React, { Component } from 'react';
import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/navbar";
import Sidebarmenunew from "../../components/sidebarmenunew";
 import Newcompomenu from "../../components/newcompomenu";
 import FissionButton from "../../components/fissionButton";

//set up the Drag and Drop tool
import ReactDOM from 'react-dom';
//import Draggable from 'react-draggable'; // The default
import { Draggable, Droppable } from 'react-drag-and-drop';
import RaisedButton from "material-ui/RaisedButton";


 import "./Previewpage.css";


//make a bunch of buttons with this data and label them like drag and drop menu?
//set up the render?
//convert to class instead of const here since I'm passing data through?
//
//
//showData =()=> this.setState({})
//onDrop(data){
 // console.log(data)
//}

//<Droppable types ={['usercompo']} 
// onDrop ={this.onDrop.bind(this)}>
//<div id ="preview"> "preview results go here"</div>
//</Droppable>
//
//
//

const Canvaspage = () =>

<div>

    <h2>A preview of the components you have created and styled: </h2>
    
    <Container style={{ marginTop: 30 }}>

    <p>  Return to the editor on the canvas page for your final edits, or to add more components you would like to use</p>
    <p> If you are happy with what you see, click the Fission button to save you work</p>
  <Row>
<div id="preview"></div>

  </Row>



  <Row>

<Draggable type ="usercompo" data="menucompo"><span><RaisedButton> This is menu compo</RaisedButton></span></Draggable>
<Draggable type ="usercompo" data="Navbarcompo"><span><RaisedButton> This is a Navbar compo</RaisedButton></span></Draggable>
<Draggable type ="notgoodcompo" data="Footercompo"><span><RaisedButton> This is a Footer comppo</RaisedButton></span></Draggable>
</Row>

 



<FissionButton />
    </Container>
  </div>;

export default Canvaspage;
