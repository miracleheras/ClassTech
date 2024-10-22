/** @format */

import { MainContext } from "context/MainContext";
import React, { useContext } from "react";
import { recipeType } from "types";

interface EditDialogProps {
  handleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  deleteIngredient: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickOK: () => void;
  onClickCancel: () => void;
  recipe: recipeType;
}

export const DialogComponent: React.FC<EditDialogProps> = ({
  recipe,
  handleTitleChange,
  handleIntroductionChange,
  deleteIngredient,
  handleKeyDown,
  onClickCancel,
  onClickOK,
}) => {
  const { insertOrEdit } = useContext(MainContext);

  return (
    <div className="w-[600px] h-[400px] flex flex-col z-10 absolute items-center bg-gray-100 rounded-[20px] shalow-lg border p-[30px]">
      <div className="text-[30px] text-blue-400">Edit Recipe!</div>
      <div className="flex flex-col">
        <div className="flex flex-row w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center gap-[5px]">
          <div>
            <div className="tex-bold text-purple-400 text-[20px]">Title</div>
            <textarea
              className="p-[10px] h-[200px] w-[70px] focus:outline-none resize-none"
              rows={3}
              onChange={handleTitleChange}
              value={recipe.title}
            >
              {insertOrEdit === "Insert" ? "" : recipe.title}
            </textarea>
          </div>
          <div>
            <div className="tex-bold text-purple-400 text-[20px]">
              Instruction
            </div>
            <textarea
              className="p-[10px] h-[200px] w-[350px] resize-none focus:outline-none"
              rows={3}
              onChange={handleIntroductionChange}
              value={recipe.instruction}
            >
              {insertOrEdit === "Insert" ? "" : recipe.instruction}
            </textarea>
          </div>
          <div>
            <div className="tex-bold text-purple-400 text-[20px]">
              Ingrediants
            </div>
            <div className="border border-white-700 h-[200px] w-[150px] overflow-auto">
              {recipe.ingredients.map((ingredient, index) => (
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
  );
};
