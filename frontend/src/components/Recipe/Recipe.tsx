/** @format */

import { EditDialogComponent } from "components/editDialog/EditDialog";
import React, { useState } from "react";
import { recipeType } from "types";

interface RecipeProps {
  recipeData: recipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ recipeData }) => {
  const [recipe, setRecipe] = useState<recipeType>(recipeData);
  const [isShowEditDialog, setIsShowEditDialog] = useState<boolean>(false);

  const onClickDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <div
        className="w-full flex bg-red-50 border-2 m-[5px] hover:border-2 hover:border-green-600 hover:cursor-pointer shadow-lg"
        onClick={() => setIsShowEditDialog(true)}
      >
        <div className="min-w-[20px] p-[5px] items-center border">
          {recipe.id + 1}
        </div>
        <div className="min-w-[100px] p-[5px] items-center border">
          {recipe.title}
        </div>
        <div className="w-full items-center p-[5px] border">
          {recipe.instruction}
        </div>
        {/* <div className="min-w-[150px] flex gap-[5px] border">
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="rounded-[3px] p-[5px]">
              {ingredient}
            </div>
          ))}
        </div> */}
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
