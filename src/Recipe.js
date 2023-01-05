import React from 'react'

const Recipe = ({image, author, title, sourceUrl})=> {
    console.log(image,author,sourceUrl,title)

  return (
    <div>

      <img alt="recipe" src={image} />
      <p>author is {author}</p>
      <p>title: {title}</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={sourceUrl}> source url</a>
    </div>
  )
}




export default Recipe;