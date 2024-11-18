/** @format */

import { DialogComponent } from "components/common/dialog/Dialog";
import { RecipeList } from "components/common/recipeList/recipeList";
import { MainContext } from "context/MainContext";
import React, { useContext } from "react";
import { RecipeType } from "types";
import background from "assets/background.jpg";

interface HomeViewProps {
  handleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickOK: () => void;
  onClickCancel: () => void;
  deleteIngredient: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  recipe: RecipeType;
  onClickDelete: (
    e: React.MouseEvent<HTMLButtonElement>,
    recipeData: RecipeType
  ) => void;
  onClickRecipe: (recipeData: RecipeType) => void;
  onClickInsert: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  recipe,
  handleTitleChange,
  handleIntroductionChange,
  onClickOK,
  onClickCancel,
  deleteIngredient,
  handleKeyDown,
  onClickDelete,
  onClickRecipe,
  onClickInsert,
}) => {
  const { insertOrEdit, recipes } = useContext(MainContext);

  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="w-full h-full flex justify-center flex-col flex-grow p-[100px] gap-[50px] font-serif items-center"
    >
      <button
        className="w-[120px] h-[40px] bg-pink-200 rounded-md hover:border hover:border-pink-200 hover:bg-yellow-200 hover:text-white p-[5px]"
        onClick={onClickInsert}
      >
        Insert Recipe
      </button>
      {insertOrEdit !== "" && (
        <DialogComponent
          handleIntroductionChange={handleIntroductionChange}
          handleKeyDown={handleKeyDown}
          handleTitleChange={handleTitleChange}
          onClickCancel={onClickCancel}
          onClickOK={onClickOK}
          deleteIngredient={deleteIngredient}
          recipe={recipe}
        />
      )}
      <RecipeList
        recipeArray={recipes}
        onClickDelete={onClickDelete}
        onClickRecipe={onClickRecipe}
      />
    </div>
  );
};
