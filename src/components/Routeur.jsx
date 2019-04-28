import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Quete from '../pages/Quete';
import react3 from './react/react3/react3';
import react31 from './react/react31/react31';
import react32 from './react/react32/react32';
import react33 from './react/react33/react33';
import react34 from './react/react34/react34';
import react5 from './react/react5/react5';
import divers from './divers/divers';
import App from './reseau/question/App';
import Html from './integration/Findtheprecious/integration';
import Entree from './integration/wildcircus/entree';
import Oeil from './integration/bootstrap/Oeil';
import Gandalf from './integration/css/Gandalf';
import Demande from './reseau/api/demande';
import Foot from './reseau/api/foot';
import react4 from './react/react4/react4';
import React7 from './react/react7/react7';


export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Quete/" component={Quete} />
          <Route path="/react/react3/" component={react3} />
          <Route path="/react/react31/" component={react31} />
          <Route path="/react/react32/" component={react32} />
          <Route path="/react/react33/" component={react33} />
          <Route path="/react/react34/" component={react34} />
          <Route path="/react/react5/" component={react5} />
          <Route path="/react/react4/" component={react4} />
          <Route path="/react/react7/" component={React7} />

          <Route path="/divers/" component={divers} />
          <Route path="/reseau/question/" component={App} />
          <Route path="/integration/Findtheprecious/" component={Html} />
          <Route path="/integration/wildcircus/" component={Entree} />
          <Route path="/integration/bootstrap/" component={Oeil} />
          <Route path="/integration/css/" component={Gandalf} />
          <Route path="/reseau/api/demande/" component={Demande} />
          <Route path="/reseau/api/foot/" component={Foot} />
         
          
        </Switch>
        
      </div>
  
    );
  }
}
