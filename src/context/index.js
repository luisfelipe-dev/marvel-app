import React from "react";

import { CharactersProvider } from "./charactersContext";
import { LoadingProvider } from "./loadingContext";

const AppProvider = ({ children }) => (
  <CharactersProvider>
    <LoadingProvider>{children}</LoadingProvider>
  </CharactersProvider>
);

export default AppProvider;
