/** @format */

import { RecipeDialogComponent } from "components/recipeDialog/RecipeDialog";
import { RecipeList } from "components/recipeList/recipeList";
import React, { useState } from "react";

export const Home: React.FC = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  return (
    <>
      <div className="w-full h-full flex justify-center flex-grow p-[100px]">
        <button
          className="w-[100px] h-[40px] bg-pink-200 rounded-md hover:border hover:border-pink-200 hover:bg-yellow-200 hover:text-white"
          onClick={() => {
            setIsShowDialog(true);
          }}
        >
          Insert Recipe
        </button>
        {isShowDialog && <RecipeDialogComponent />}
        <RecipeList></RecipeList>
      </div>
    </>
  );
};
