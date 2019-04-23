import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Quete from '../pages/Quete';
import Navbar from '../components/header/Navbar';

export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Quete/" component={Quete} />
        </Switch>
        
      </div>
  
    );
  }
}
