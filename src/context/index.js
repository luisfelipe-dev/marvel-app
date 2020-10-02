import React from "react";

import { CharactersProvider } from "./charactersContext";

const AppProvider = ({ children }) => (
  <CharactersProvider>{children}</CharactersProvider>
);

export default AppProvider;
