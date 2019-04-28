import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './../../App.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
     
        <p>Be sure to <strong> use the standard <code>.btn</code> classes here</strong>.</p>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Import HTML via magic.reactjs.net</ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/integration/wildcircus"> Wild Circus </NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/integration/findtheprecious"> 1 - Find The Precious</NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/integration/css">Gandalf</NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/integration/bootstrap"> Oeil de Sauron</NavLink></ListGroupItem>

        </ListGroup>
        <p />
        <h3>Buttons </h3>
        <ListGroup>
          <ListGroupItem active tag="button" action>Troubleshooting</ListGroupItem>
          <ListGroupItem tag="button" action>Css en cascade dans React</ListGroupItem>
          <ListGroupItem tag="button" action>Interpretation JS -> React</ListGroupItem>
 
        </ListGroup>
      </div>
    );
  }
}