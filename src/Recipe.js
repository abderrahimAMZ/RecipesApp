import React from "react";

const Recipe = ({ image, title, source }) => {
  console.log(image, source, title);

  return (
    <div className={"Recipe"}>
      <img src={image} alt={title} />
      <p>title: {title}</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={source}> source url for the meal</a>
    </div>
  );
};

export default Recipe;
