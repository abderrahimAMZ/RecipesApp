// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Recipe from "./Recipe"
// eslint-disable-next-line import/no-unresolved
import ComplexSearch from "./ComplexSearch"
import "./style.css"
import NavBar from "./NavBar";
const res = await fetch('https://api.spoonacular.com/recipes/search?apiKey=8b36495f0cdc4b85a307f2fe0ff570f8&query=chicken');
const json = await res.json();
var results = json.results;
const App = () => {
    console.log(json);
    console.log(results)
    return (
      <div className="app">
        <NavBar />
        <div className={"navs_Recipe_list"}>
          <div className={"navs"}>
          </div>
        <div className={"Recipe_list"}>
              {results.map((item)=> {
                  console.log(item);
                  return(
                        <Recipe id={item.id} key={item.id} title={item.title} image={item.image} source={item.sourceUrl} />
                  )
              })}
        </div>
      </div>
    </div>
)
};

export default App;
