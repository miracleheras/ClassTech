/** @format */

import { mocData } from "moc";
import React, { createContext, useState } from "react";
import { recipeType } from "types";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  insertOrEdit: string;
  setInsertOrEdit: (setIsshoworEdit: string) => void;
  editingRecipeID: number;
  setEditingRecipeId: (recipeID: number) => void;
  recipes: recipeType[];
  setRecipes: (recipes: recipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  insertOrEdit: "",
  setInsertOrEdit: () => {},
  editingRecipeID: 0,
  setEditingRecipeId: () => {},
  recipes: mocData,
  setRecipes: () => {},
});

export const MainContextProvider: React.FC<MainProiderProps> = ({
  children,
}) => {
  const [editingRecipeID, setEditingRecipeId] = useState<number>(0);
  const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  const [insertOrEdit, setInsertOrEdit] = useState<string>("");

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
