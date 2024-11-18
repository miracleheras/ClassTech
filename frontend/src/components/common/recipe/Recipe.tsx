/** @format */

import React from "react";
import { RecipeType } from "types";

interface RecipeProps {
  onClickRecipe: (recipeData: RecipeType) => void;
  onClickDelete: (
    e: React.MouseEvent<HTMLButtonElement>,
    recipeData: RecipeType
  ) => void;
  recipeData: RecipeType;
}

export const Recipe: React.FC<RecipeProps> = ({
  recipeData,
  onClickDelete,
  onClickRecipe,
}) => {
  return (
    <>
      <div
        className="w-full flex bg-red-50 border-2 m-[5px] hover:border-2 hover:border-pink-300 hover:cursor-pointer text-blue-900 shadow-lg"
        onClick={() => onClickRecipe(recipeData)}
      >
        <div className="w-[150px] p-[5px] items-center overflow-auto border">
          {recipeData.title}
        </div>
        <div className="w-full items-center p-[5px] border overflow-auto">
          {recipeData.instruction}
        </div>
        <div className="w-[350px] flex gap-[5px] border overflow-auto">
          {recipeData.ingredients.map((ingredient, index) => (
            <div key={index} className="rounded-[3px] p-[5px]">
              {ingredient}
            </div>
          ))}
        </div>
        <div className="border">
          <button
            className="bg-white shadow-lg border border-blue-500 rounded-[3px] pl-[4px] pr-[4px] m-[5px] hover:bg-pink-200 hover:text-white"
            onClick={(e) => onClickDelete(e, recipeData)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
