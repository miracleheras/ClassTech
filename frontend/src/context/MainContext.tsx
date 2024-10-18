/** @format */

import { mocData } from "moc";
import React, { createContext, useState } from "react";
import { recipeType } from "types";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  editingRecipeID: number;
  setEditingRecipeId: (recipeID: number) => void;
  recipes: recipeType[];
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setRecipes: (recipes: recipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  editingRecipeID: 0,
  setEditingRecipeId: () => {},
  isEdit: false,
  setIsEdit: () => {},
  recipes: mocData,
  setRecipes: () => {},
});

export const MainContextProvider: React.FC<MainProiderProps> = ({
  children,
}) => {
  const [editingRecipeId, setEditingRecipeId] = useState<number>(0);
  const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{
        setIsEdit: setIsEdit,
        isEdit: isEdit,
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
