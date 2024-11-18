/** @format */

import React from "react";
import { Recipe } from "components/common/recipe/Recipe";
import { RecipeType } from "types";

interface RecipeListProps {
  recipeArray: RecipeType[];
  onClickRecipe: (recipeData: RecipeType) => void;
  onClickDelete: (
    e: React.MouseEvent<HTMLButtonElement>,
    recipeData: RecipeType
  ) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({
  recipeArray,
  onClickDelete,
  onClickRecipe,
}) => {
  return (
    <>
      <div className="flex flex-col h-full w-[800px] rounded-[20px] gap-[2px] items-cetner justify-center">
        {recipeArray.map((recipe) => (
          <Recipe
            recipeData={recipe}
            key={recipe.uuid}
            onClickDelete={(e) => onClickDelete(e, recipe)}
            onClickRecipe={() => onClickRecipe(recipe)}
          />
        ))}
      </div>
    </>
  );
};
