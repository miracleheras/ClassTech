/** @format */

import { HomeView } from "components/view";
import { MainContext } from "context/MainContext";
import React, { useContext, useEffect, useState } from "react";
import { recipeType } from "types";

export const MainContainer: React.FC = () => {
  const {
    insertOrEdit,
    setInsertOrEdit,
    recipes,
    editingRecipeID,
    setRecipes,
    setEditingRecipeId,
  } = useContext(MainContext);

  const [recipe, setRecipe] = useState<recipeType>(recipes[editingRecipeID]);

  useEffect(() => {
    setRecipe(recipes[editingRecipeID]);
  }, [editingRecipeID]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRecipe({ ...recipe, title: e.target.value });
  };

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setRecipe({ ...recipe, instruction: e.target.value });
  };

  const onClickOK = () => {
    const updatedRecipe: recipeType = {
      id:
        insertOrEdit === "Insert"
          ? Math.max(...recipes.map((recipe) => recipe.id)) + 1
          : editingRecipeID,
      title: recipe.title,
      instruction: recipe.instruction,
      ingredients: recipe.ingredients,
    };
    const updatedRecipes: recipeType[] = [...recipes];
    updatedRecipes[editingRecipeID] = updatedRecipe;

    if (
      recipe.title === "" ||
      recipe.instruction === "" ||
      recipe.ingredients.length === 0
    ) {
      alert("Please fill out all inputs");
    } else {
      setInsertOrEdit("");
      setRecipes(
        insertOrEdit === "Insert" ? [...recipes, updatedRecipe] : updatedRecipes
      );
    }
  };

  const onClickCancel = () => {
    setInsertOrEdit("");
  };

  const deleteIngredient = (deleteID: number) => {
    const updatedIngredients = recipe.ingredients.filter(
      (_, index: number) => index != deleteID
    );
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (e.key !== "Enter") {
      return;
    }

    if (recipe.ingredients.includes(value)) {
      e.currentTarget.value = "";
      return;
    }

    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, value] });
    e.currentTarget.value = "";
  };

  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    recipeData: recipeType
  ) => {
    setRecipes([...recipes.filter((recipe) => recipe.id !== recipeData.id)]);
    e.stopPropagation();
  };

  const onClickRecipe = (recipeData: recipeType) => {
    setEditingRecipeId(recipeData.id);
    setInsertOrEdit("Edit");
  };

  const onClickInsert = () => {
    setInsertOrEdit("Insert");
    setRecipe({ id: -1, title: "", instruction: "", ingredients: [] });
  };

  return (
    <HomeView
      onClickInsert={onClickInsert}
      recipe={recipe}
      handleIntroductionChange={handleIntroductionChange}
      handleTitleChange={handleTitleChange}
      handleKeyDown={handleKeyDown}
      onClickCancel={onClickCancel}
      onClickOK={onClickOK}
      deleteIngredient={deleteIngredient}
      onClickDelete={onClickDelete}
      onClickRecipe={onClickRecipe}
    />
  );
};
