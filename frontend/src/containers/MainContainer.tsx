/** @format */

import { HomeView } from "components/view";
import { MainContext } from "context/MainContext";
import React, { useContext, useState } from "react";
import { RecipeType } from "types";
import axios from "axios";

export const MainContainer: React.FC = () => {
  const { insertOrEdit, setInsertOrEdit, recipes, setRecipes } =
    useContext(MainContext);

  const [recipe, setRecipe] = useState<RecipeType>({
    uuid: "",
    title: "",
    instruction: "",
    ingredients: [],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRecipe({ ...recipe, title: e.target.value });
  };

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setRecipe({ ...recipe, instruction: e.target.value });
  };

  const onClickOK = () => {
    if (insertOrEdit === "Insert") {
      axios
        .post("http://localhost:5001/api/recipes/", {
          title: recipe.title,
          instruction: recipe.instruction,
          ingredients: recipe.ingredients,
        })
        .then((response) => {
          setRecipe(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    if (insertOrEdit === "Edit") {
      axios
        .put(`http://localhost:5001/api/recipes/${recipe.uuid}`, {
          title: recipe.title,
          instruction: recipe.instruction,
          ingredients: recipe.ingredients,
        })
        .then((response) => {
          setRecipe(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    const updatedRecipes: RecipeType[] = recipes.map((r) => {
      if (r.uuid === recipe.uuid) {
        r = recipe;
      }
      return r;
    });

    if (
      recipe.title === "" ||
      recipe.instruction === "" ||
      recipe.ingredients.length === 0
    ) {
      alert("Please fill out all inputs");
    } else {
      setInsertOrEdit("");
      setRecipes(
        insertOrEdit === "Insert" ? [...recipes, recipe] : updatedRecipes
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
    recipeData: RecipeType
  ) => {
    console.log(recipeData.uuid);
    axios
      .delete(`http://localhost:5001/api/recipes/${recipeData.uuid}`)
      .then((response) => {
        console.log(response.data);
        setRecipes([
          ...recipes.filter((recipe) => recipe.uuid !== recipeData.uuid),
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
    e.stopPropagation();
  };

  const onClickRecipe = (recipeData: RecipeType) => {
    setRecipe(recipeData);
    setInsertOrEdit("Edit");
  };

  const onClickInsert = () => {
    setInsertOrEdit("Insert");
    setRecipe({ uuid: "", title: "", instruction: "", ingredients: [] });
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
