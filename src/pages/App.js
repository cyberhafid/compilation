import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Question from './Question';
import Questions from './Questions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/:questionId' component={Question}/>
      </div>
    );
  }
}

export default App;