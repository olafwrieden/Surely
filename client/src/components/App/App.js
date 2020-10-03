import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <div id="wrapper" className="has-text-centered-mobile">
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
