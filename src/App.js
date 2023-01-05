import React from "react";
import Pet from "./Pets";

var props = { name: "name", id: "id", idk: "idk" };
/*
const response = await fetch("", {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json',
        'key':"ikdjf",
    }
})

 */
const App = () => {
  return React.createElement("div", {}, [React.createElement(Pet, { props })]);
};

export default App;
