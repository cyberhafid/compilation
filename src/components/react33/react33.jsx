import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
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
       

       <header className="App-header">
          
          <h1 className="App-title">Tu as gagné au millionaire?</h1>
        </header>
       


        <Quotes  />

      
        
      </div>
    );
  }
}


export default react33;
;