import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};
