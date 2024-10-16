/** @format */

import React, { useState } from "react";
import { recipeType } from "types";

interface RecipeProps {
  recipeData: recipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ recipeData }) => {
  const [recipe, setRecipe] = useState<recipeType>(recipeData);

  return (
    <>
      <div className="w-full flex border border-pink-300">
        <div className="">{recipe.id}</div>
        <div>{recipe.title}</div>
        <div>{recipe.instruction}</div>
        <div>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
          ))}
        </div>
      </div>
    </>
  );
};
