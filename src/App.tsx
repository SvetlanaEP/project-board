import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app/router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
