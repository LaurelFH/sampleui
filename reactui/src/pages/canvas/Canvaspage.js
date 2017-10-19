import React from "react";
import Container from "reactstrap/lib/Container";
//import Grid from "reactstrap/lib/Grid";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/navbar";
 import Sidebarmenunew from "../../components/sidebarmenunew";
 import Newcompomenu from "../../components/newcompomenu";
//import FissionButton from "../../components/fissionButton";

const Canvaspage = () =>
<div>     
    
    <Container style={{ marginTop: 30 }}>
        <Col size="md-12">
          <p>
 Your canvas page, a space to preview and style your final selected components before creating a "fission" of your work
          </p>
          
           <Row> 
          <Col xs="6">
     
        <Newcompomenu />
          </Col>

        </Row>

 
 <Row>
<Col xs="6">
        <Sidebarmenunew />

</Col>

 </Row>    





        
    </Col>
    </Container>
  </div>;

export default Canvaspage;
