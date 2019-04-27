import React from "react";

const Quote = ({ destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt={country} width="60%"   />
    <figcaption>
      <blockquote>Destination :{destination}</blockquote>
      <cite>Distance : {distance} </cite>
      <cite>Village : {country} </cite>
     
    </figcaption>
  </figure>
);

export default Quote;

