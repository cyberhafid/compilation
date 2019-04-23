import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBare from './NavBare';
import Question from './Question';
import Questions from './Questions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBare/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/:questionId' component={Question}/>
      </div>
    );
  }
}

export default App;