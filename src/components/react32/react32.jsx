import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'




const user = {
firstname: 'david',
lastname: 'marie',
email:'dd@imp'
};

class react32 extends Component {
  render() {
    return (
      <div className="App">
       

<ClassComponent  title="je suis le titre class" {...user} />
<FunctionComponent  title="je suis le titre fonction" />

    

        
           
        
      </div>
    );
  }
}


export default react32;
;