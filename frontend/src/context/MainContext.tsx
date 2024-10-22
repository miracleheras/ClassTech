/** @format */

import { mocData } from "moc";
import React, { createContext, useState } from "react";
import { recipeType } from "types";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  isInsertOrEdit: string;
  setIsShowOrEdit: (setIsshoworEdit: string) => void;
  editingRecipeID: number;
  setEditingRecipeId: (recipeID: number) => void;
  recipes: recipeType[];
  setRecipes: (recipes: recipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  isInsertOrEdit: "",
  setIsShowOrEdit: () => {},
  editingRecipeID: 0,
  setEditingRecipeId: () => {},
  recipes: mocData,
  setRecipes: () => {},
});

export const MainContextProvider: React.FC<MainProiderProps> = ({
  children,
}) => {
  const [editingRecipeId, setEditingRecipeId] = useState<number>(0);
  const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  const [isShowOrEdit, setIsShowOrEdit] = useState<string>("");

  return (
    <MainContext.Provider
      value={{
        isInsertOrEdit: isShowOrEdit,
        setIsShowOrEdit: setIsShowOrEdit,
        editingRecipeID: editingRecipeId,
        recipes: recipes,
        setEditingRecipeId: setEditingRecipeId,
        setRecipes: setRecipes,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
