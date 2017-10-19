import React from "react";
import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/navbar";
import Sidebarmenunew from "../../components/sidebarmenunew";
 import Newcompomenu from "../../components/newcompomenu";
 import FissionButton from "../../components/fissionButton";

const Canvaspage = () =>
<div>

    <h2>A preview of the components you have created and styled: </h2>
    
    <Container style={{ marginTop: 30 }}>

    <p>  Return to the editor on the canvas page for your final edits, or to add more components you would like to use</p>
    <p> If you are happy with what you see, click the Fission button to save you work</p>
  
<div id ="preview">preview results should show up here in this div labelled "preview"</div>
<FissionButton />
    </Container>
  </div>;

export default Canvaspage;
