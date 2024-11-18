/** @format */
import React, { createContext, useEffect, useState } from "react";
import { RecipeType } from "types";
import axios from "axios";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  insertOrEdit: string;
  setInsertOrEdit: (setIsshoworEdit: string) => void;
  editingRecipeID: string;
  setEditingRecipeId: (recipeID: string) => void;
  recipes: RecipeType[];
  setRecipes: (recipes: RecipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  insertOrEdit: "",
  setInsertOrEdit: () => {},
  editingRecipeID: "",
  setEditingRecipeId: () => {},
  recipes: [],
  setRecipes: () => {},
});

export const MainContextProvider: React.FC<MainProiderProps> = ({
  children,
}) => {
  const [editingRecipeID, setEditingRecipeId] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [insertOrEdit, setInsertOrEdit] = useState<string>("");

  useEffect(() => {
    axios
      .get<RecipeType[]>("http://localhost:5001/api/recipes/")
      .then((response) => {
        setRecipes([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MainContext.Provider
      value={{
        insertOrEdit,
        setInsertOrEdit,
        editingRecipeID,
        recipes,
        setEditingRecipeId,
        setRecipes,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
