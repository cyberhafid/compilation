import React from 'react';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
    <React.Fragment>
         
         <Routeur />
       </React.Fragment>

    </div>
  );
}

export default App;
