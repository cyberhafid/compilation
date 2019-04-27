import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Home from '../pages/Home';
import Quete from '../pages/Quete';
import react3 from '../components/react3/react3';
import react31 from '../components/react31/react31';
import react32 from '../components/react32/react32';
import react33 from '../components/react33/react33';
import react34 from '../components/react34/react34';
import divers from '../components/divers/divers';
import App from '../components/reseau/App';
import Html from './html/integration/integration';
import Entree from './html/wildcircus/entree';

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
          <Route path="/react33/" component={react33} />
          <Route path="/react34/" component={react34} />
          <Route path="/divers/" component={divers} />
          <Route path="/reseau/" component={App} />
          <Route path="/html/integration/" component={Html} />
          <Route path="/html/wildcircus/" component={Entree} />
          
        </Switch>
        
      </div>
  
    );
  }
}
