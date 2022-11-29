import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoadingShown, setIsLoadingShown] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoadingShown, setIsLoadingShown }}>
      {children}
    </LoadingContext.Provider>
  );
};
