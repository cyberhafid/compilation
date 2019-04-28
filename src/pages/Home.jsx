import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '../components/contents/Liste';
import Menu from '../components/contents/Menu';
import Code from '../components/contents/Code';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    
  
          <Row>
            <Col xs="4" sm="4">
              <Menu />
               </Col>
            
             <Col xs="8" sm="8">
                <List />  
                <Code />  
                </Col>
         
          </Row>

       
    
    );
  }
}