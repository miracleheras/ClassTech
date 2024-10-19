/** @format */

import { MainContext } from "context/MainContext";
import React, { useContext, useState } from "react";
import { recipeType } from "types";

export const InsertDialogComponent: React.FC = () => {
  const { recipes, setRecipes, setIsShowInsertDialog } =
    useContext(MainContext);

  const [title, setTitle] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInstruction(e.target.value);
  };

  const onClickOK = () => {
    const updatedRecipe: recipeType = {
      id: Math.max(...recipes.map((recipe) => recipe.id)) + 1,
      title: title,
      instruction: instruction,
      ingredients: ingredients,
    };
    const updatedRecipes: recipeType[] = [...recipes];
    updatedRecipes.push(updatedRecipe);

    setRecipes(updatedRecipes);

    setIsShowInsertDialog(false);
  };

  const onClickCancel = () => {
    setIsShowInsertDialog(false);
  };

  const deleteIngredient = (deleteID: number) => {
    const updatedIngredients = ingredients.filter(
      (_, index: number) => index != deleteID
    );
    setIngredients(updatedIngredients);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (e.key !== "Enter") {
      return;
    }

    if (ingredients.includes(value)) {
      e.currentTarget.value = "";
      return;
    }

    setIngredients([...ingredients, value]);
    e.currentTarget.value = "";
  };
  return (
    <>
      <div className="w-[600px] h-[400px] flex flex-col z-10 absolute items-center bg-gray-100 rounded-[20px] shalow-lg border p-[30px]">
        <div className="text-[30px] text-blue-400">Insert Recipe!</div>
        <div className="flex flex-col">
          <div className="flex flex-row w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center gap-[5px]">
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">Title</div>
              <textarea
                className="p-[10px] h-[200px] w-[70px] focus:outline-none resize-none"
                rows={3}
                required
                onChange={handleTitleChange}
                value={title}
              ></textarea>
            </div>
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">
                Instruction
              </div>
              <textarea
                required
                className="p-[10px] h-[200px] w-[350px] resize-none focus:outline-none"
                rows={3}
                onChange={handleIntroductionChange}
                value={instruction}
              ></textarea>
            </div>
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">
                Ingrediants
              </div>
              <div className="border border-white-700 h-[200px] w-[150px] overflow-auto">
                {ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="p-[2px] border border-white hover:bg-pink-400 hover:text-white hover:cursor-pointer"
                    onClick={() => deleteIngredient(index)}
                  >
                    {ingredient}
                  </div>
                ))}
                <input
                  className="w-full border-[2px] border-blue-500 "
                  onKeyDown={handleKeyDown}
                  required
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] text-[20px]">
          <button
            className="border-[2px] pl-[5px] pr-[5px] rounded-[10px] hover:text-green-800 hover:bg-pink-100"
            onClick={onClickOK}
          >
            OK
          </button>
          <button
            className="border-[2px] pl-[5px] pr-[5px] rounded-[10px] hover:text-green-800 hover:bg-pink-100"
            onClick={onClickCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
