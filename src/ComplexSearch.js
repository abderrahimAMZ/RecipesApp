import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
const ComplexSearch = () => {
  const cuisines = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];
  const [Meal, setMeal] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [Ingrediants, setIngrediants] = useState("");
  const [Recipes, setRecipes] = useState([]);
  useEffect(() => requestRecipes(), []);
  async function requestRecipes() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=8b36495f0cdc4b85a307f2fe0ff570f8&query=${Meal}&cuisine=${cuisine}&includeIngredients=${Ingrediants}`
    );
    const json = await res.json();
    var results = json.results;
    setRecipes(results);
  }

  return (
    <div className={"navs_Recipe_list"}>

    <div className={"navs"}>

      <form
        onSubmit={ (e) => {
          e.preventDefault();
            requestRecipes();
          }
        }
      >
        <label htmlFor="location">
          Meal
          <input
            id="Meal"
            value={Meal}
            onChange={(event) => {
              setMeal(event.target.value);
            }}
            placeholder="your meal name here"
          />
        </label>
        <label htmlFor="Cuisine">
         Choose Cuisine
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => {
              setcuisine(e.target.value);
            }}
            onBlur={(e) => {
              setcuisine(e.target.value);
            }}
          >
            <option />
            {cuisines.map(function (cuisine) {
              return (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="Ingrediants">
         Ingrediants
          <input
            id="Ingrediants"
            value={Ingrediants}
            onChange={(event) => {
              setIngrediants(event.target.value);
            }}
            placeholder="place ingrediants seperated with coma ','"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>

      <div className={"recipe_list"}>
        {Recipes.map((item) => {
          console.log(item);
          return (
            <Recipe
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              source={item.sourceUrl}
            />
          );
        })}
      </div>
</div>
  );
};
export default ComplexSearch;
