import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid backg">
       
        <Container>
          <Row>
            <h2>Contenu</h2>
          </Row>
        </Container>
       
      </div>
    );
  }
}