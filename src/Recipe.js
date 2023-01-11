import React from "react";

const Recipe = ({ image, title, source }) => {
  console.log(image, source, title);

  return (
    <div className={"Recipe"}>
      <div className={"image"}>
        <img src={image} alt={title} />
      </div>
      <div className={"title"}>
        {title}
      </div>
    </div>
  );
};

export default Recipe;
