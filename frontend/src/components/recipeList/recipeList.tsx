/** @format */

import React from "react";
import { mocData } from "moc";
import { Recipe } from "components/recipe/Recipe";
export const RecipeList: React.FC = () => {
  return (
    <>
      <div>
        {mocData.map((recipe, index) => (
          <Recipe recipeData={recipe} key={index} />
        ))}
      </div>
    </>
  );
};
