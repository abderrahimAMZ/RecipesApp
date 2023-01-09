import React from "react";



const ComplexSearch = ()=> {
  return (
    <div>
      <form>
        <label>
          Meal name:
          <input type={"text"} placeholder={"Meal"}> </input>
        </label>
        <label>
          Cuisine:
          <input type={"text"} placeholder={"cuisine"}> </input>
        </label>
        <label>
        Ingrediants:
          <input type={"text"} placeholder={"ingreadiants"}> </input>
        </label>
        <label>
          Search:
          <input type={"submit"} value={"Submit"} > </input>
        </label>
      </form>
    </div>
  )
};
export default ComplexSearch;