import React, { Component } from 'react';
import './React3.css';

import Lamp from './Lamp';
import Working from './Working';

class react3 extends Component {
  render() {
    return (
      <div className="App">
        <Working />
        <Lamp />
      </div>
    );
  }
}
export default react3;

