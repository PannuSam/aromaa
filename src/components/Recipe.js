import React, { useState } from "react";
import Details from "./Details";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={label} />
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Details ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;