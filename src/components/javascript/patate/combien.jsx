import React, { Component } from 'react';



export default class Combien extends Component {
    render () {
      return (
        <div>
          <title>Title</title>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <h2>Histoire de patate </h2>
          {

let signe = prompt("Hey mon ami ! Tu aimes ça les patates ?");
if (signe.toLowerCase() === 'oui' || signe.toLowerCase() === 'yes' || signe.toLowerCase() === 'ok'   ) {
  //if (signe.toLowerCase() === 'oui'  ) {  
  let resultatPrompt ="";
 for (let i = 0; i < 7; i++) {
 
  resultatPrompt=resultatPrompt+"#";
  console.log(resultatPrompt);
 }
}else if (signe.toLowerCase() === 'non' || signe.toLowerCase() === 'no' || signe.toLowerCase() === 'da'   ) {
  let resultatPrompt="nonnnnnn pkoi pas de patate";
  document.write(resultatPrompt);
  alert(resultatPrompt);
} else {
  
  let resultatPrompt="Je vous sens comme tiraillé";
  document.write(resultatPrompt);
  alert(resultatPrompt);
}

          }

        </div>
      );
    }
  };