// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Pet from "./Pets";
// eslint-disable-next-line import/no-unresolved
import "./style.css"
/*
const response = await fetch("", {
    method: 'get', // *get, post, put, delete, etc.
    headers: {
        'content-type': 'application/json',
        'key':"ikdjf",
    }
})

 */
const App = () => {
    return (
      <div className="app">
        <h1> life is good ha</h1>
        <Pet name={"dora"} breed={"havanise"} animal={"dog"}/>
      </div>
    );
};

export default App;
