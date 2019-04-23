import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Home from '../pages/Home';
import Quete from '../pages/Quete';
import react3 from '../components/react3/react3';
import react31 from '../components/react31/react31';
import react32 from '../components/react32/react32';

export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Quete/" component={Quete} />
          <Route path="/react3/" component={react3} />
          <Route path="/react31/" component={react31} />
          <Route path="/react32/" component={react32} />
          
        </Switch>
        
      </div>
  
    );
  }
}
