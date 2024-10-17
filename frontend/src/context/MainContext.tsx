/** @format */

import { mocData } from "moc";
import React, { createContext, useState } from "react";
import { recipeType } from "types";

interface MainProiderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  recipes: recipeType[];
  setRecipes: (recipes: recipeType[]) => void;
}

export const MainContext = createContext<MainContextProps>({
  recipes: [],
  setRecipes: () => {},
});

export const MainContextProvider: React.FC<MainProiderProps> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<recipeType[]>(mocData);
  return (
    <MainContext.Provider value={{ recipes: recipes, setRecipes: setRecipes }}>
      {children}
    </MainContext.Provider>
  );
};
