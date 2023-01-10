// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Recipe from "./Recipe";
// eslint-disable-next-line import/no-unresolved
import ComplexSearch from "./ComplexSearch";
import "./style.css";
import NavBar from "./NavBar";
const App = () => {
  return (
    <div className="app">
      <ComplexSearch />
    </div>
  );
};

export default App;
