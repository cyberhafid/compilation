import React, { Component } from 'react';

import Quotes from "./Quotes";




const user = {
firstname: 'david',
lastname: 'marie',
email:'dd@imp'
};

class react33 extends Component {
  render() {
    return (
      <div className="App">
       

       
          
          <h1 className="App-title">Tu as gagné au millionaire?</h1>
       
       


        <Quotes  />

      
        
      </div>
    );
  }
}


export default react33;
;