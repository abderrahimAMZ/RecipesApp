import React from "react";

const Recipe = ({ image, title, source }) => {
  console.log(image, source, title);

  return (
    <div className={"Recipe"}>
        <img src={image} alt={title} />
      <div className={"title"}>{title}</div>
    </div>
  );
};

export default Recipe;
