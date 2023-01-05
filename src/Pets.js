import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("div", {}, props.id),
    React.createElement("div", {}, props.name),
    React.createElement("div", {}, props.idk),
  ]);
};
export default Pet;
