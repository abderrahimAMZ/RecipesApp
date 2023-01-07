import React from 'react'

const Recipe = ({image,  title, source})=> {
    console.log(image,source,title)

  return (
    <div>
      <div>
        <img src={image} alt={title}  />
      </div>
        <p>title: {title}</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={source}> source url for the meal</a>
    </div>
  )
}



export default Recipe;