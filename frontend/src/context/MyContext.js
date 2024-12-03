// src/MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {
  const [state, setState] = useState("Hello from context");

  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  );
};

// Export the context for consumption in other components
export default MyContext;
