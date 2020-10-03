import React, { useState, createContext } from "react";
import Loading from "../components/Loading";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const loadingState = useState(false)

  const[loading,] = loadingState;
  
  return (
    <LoadingContext.Provider
      value={{
        loadingState
      }}
    >
      <Loading active={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
