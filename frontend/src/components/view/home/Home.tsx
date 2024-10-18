/** @format */

import { EditDialogComponent } from "components/editDialog/EditDialog";
import { RecipeDialogComponent } from "components/recipeDialog/RecipeDialog";
import { RecipeList } from "components/recipeList/recipeList";
import { MainContext } from "context/MainContext";
import React, { useContext, useEffect, useState } from "react";

export const Home: React.FC = () => {
  // const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  const [isShowInsertDialog, setIsShowInsertDialog] = useState<boolean>(false);
  // const [isShowEditDialog, setIsShowEditDialog] = useState<boolean>(false);

  const {
    editingRecipeID,
    setEditingRecipeId,
    isEdit,
    setIsEdit,
    recipes,
    setRecipes,
  } = useContext(MainContext);

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
        {isEdit && <EditDialogComponent recipe={recipes[editingRecipeID]} />}
        <RecipeList recipeArray={recipes} />
      </div>
    </>
  );
};
