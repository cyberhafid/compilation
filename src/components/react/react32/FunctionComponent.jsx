import React, { Component } from 'react';




export default function FunctionComponent({title}) {
  console.log ('IN FUNCTION', this);
    return (
      <div>
    {title}
      </div>
    )
  }


