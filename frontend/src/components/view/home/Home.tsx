/** @format */

import { EditDialogComponent } from "components/editDialog/EditDialog";
import { RecipeDialogComponent } from "components/recipeDialog/RecipeDialog";
import { RecipeList } from "components/recipeList/recipeList";
import { mocData } from "moc";
import React, { useState } from "react";
import { recipeType } from "types";

export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  const [isShowInsertDialog, setIsShowInsertDialog] = useState<boolean>(false);
  const [isShowEditDialog, setIsShowEditDialog] = useState<boolean>(false);

  return (
    <>
      <div className="w-full h-full flex justify-center flex-col flex-grow p-[100px] gap-[50px] font-serif items-center">
        <button
          className="w-[120px] h-[40px] bg-pink-200 rounded-md hover:border hover:border-pink-200 hover:bg-yellow-200 hover:text-white p-[5px]"
          onClick={() => {
            setIsShowInsertDialog(true);
          }}
        >
          Insert Recipe
        </button>
        {isShowInsertDialog && <RecipeDialogComponent />}
        {isShowEditDialog && <EditDialogComponent />}
        <RecipeList recipeArray={recipes} />
      </div>
    </>
  );
};
