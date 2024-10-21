/** @format */

import React from "react";
import { Recipe } from "components/common/recipe/Recipe";
import { recipeType } from "types";

interface RecipeListProps {
  recipeArray: recipeType[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipeArray }) => {
  return (
    <>
      <div className="flex flex-col h-full w-[800px] rounded-[20px] gap-[2px] items-cetner justify-center">
        {recipeArray.map((recipe) => (
          <Recipe recipeData={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
};
