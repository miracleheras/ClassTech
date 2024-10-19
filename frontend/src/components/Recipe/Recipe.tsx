/** @format */

import { MainContext } from "context/MainContext";
import React, { useContext } from "react";
import { recipeType } from "types";

interface RecipeProps {
  recipeData: recipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ recipeData }) => {
  const { setIsEdit, setEditingRecipeId, recipes, setRecipes } =
    useContext(MainContext);

  const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRecipes([...recipes.filter((recipe) => recipe.id !== recipeData.id)]);
    e.stopPropagation();
  };

  const onClickRecipe = () => {
    setEditingRecipeId(recipeData.id);
    console.log("recipeData.id", recipeData.id);
    setIsEdit(true);
  };

  return (
    <>
      <div
        className="w-full flex bg-red-50 border-2 m-[5px] hover:border-2 hover:border-green-600 hover:cursor-pointer shadow-lg"
        onClick={() => onClickRecipe()}
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
            onClick={onClickDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
