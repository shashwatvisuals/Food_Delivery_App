// src/MyComponent.js
import React from 'react';
import MyContext from './MyContext';

const MyComponent = () => {
  return (
    <MyContext.Consumer>
      {value => <h1>{value}</h1>}  {/* Using the context value */}
    </MyContext.Consumer>
  );
};

export default MyComponent;
