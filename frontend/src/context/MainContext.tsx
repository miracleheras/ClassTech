/** @format */

import { mocData } from "moc";
import React, { createContext, useState } from "react";
import { recipeType } from "types";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  isShowInsertDialog: boolean;
  setIsShowInsertDialog: (isShow: boolean) => void;
  editingRecipeID: number;
  setEditingRecipeId: (recipeID: number) => void;
  recipes: recipeType[];
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setRecipes: (recipes: recipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  isShowInsertDialog: false,
  setIsShowInsertDialog: () => {},
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
  const [isShowInsertDialog, setIsShowInsertDialog] = useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{
        isShowInsertDialog: isShowInsertDialog,
        setIsShowInsertDialog: setIsShowInsertDialog,
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
