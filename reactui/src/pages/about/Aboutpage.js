import React from "react";
import Container from "react-bootstrap/lib/Container";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

const Aboutpage = () =>
  <div>
    <div backgroundImage="https://fthmb.tqn.com/MxQws4FSM1dNTMb1u5fexkvF-yI=/4016x2479/filters:fill(auto,1)/atom-splitting-in-nuclear-fission-587169643-5792680a3df78c1734990723.jpg">
      <h1>Fission</h1>
      <h2>Making Your Components, Easier</h2>
    </div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Fission</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          ABOUT PAGE WOOOO~
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
            mi sollicitudin turpis semper, et interdum risus lobortis.
            Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non,
            tristique tempor erat. Nullam non sem facilisis, tempus tortor sit
            amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae
            tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent
            suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis
            consequat mattis tortor vitae mattis.
          </p>
          
        </Col>
      </Row>
    </Container>
  </div>;

export default Aboutpage;
