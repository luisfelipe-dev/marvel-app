import React from "react";

import AppProvider from "./context";
import Route from "./routes/route";

function App() {
  return (
    <AppProvider>
      <Route />
    </AppProvider>
  );
}

export default App;
