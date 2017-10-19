import React from "react";
import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/navbar";

const Canvaspage = () =>
<div>

      <h1>Fission</h1>
      <h2>A preview of your work space: </h2>
    
    <Container style={{ marginTop: 30 }}>

    <p>  A space to preview your work!</p>
    <div id="canvas"></div>



    </Container>
  </div>;

export default Canvaspage;
