/** @format */

import React from "react";
import { recipeType } from "types";

interface EditDialogProps {
  recipe: recipeType;
}

export const EditDialogComponent: React.FC<EditDialogProps> = ({ recipe }) => {
  return (
    <>
      <div className="w-[600px] h-[400px] flex flex-col z-10 absolute items-center bg-gray-100 rounded-[20px] shalow-lg border p-[30px]">
        <div className="text-[30px] text-blue-400">Edit Recipe!</div>
        <div className="flex flex-col">
          <div className="flex flex-row w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center gap-[5px]">
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">Title</div>
              <textarea
                className="h-[200px] w-[70px] focus:outline-none resize-none"
                rows={3}
              ></textarea>
            </div>
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">
                Instruction
              </div>
              <textarea
                className="h-[200px] w-[350px] resize-none"
                rows={3}
              ></textarea>
            </div>
            <div>
              <div className="tex-bold text-purple-400 text-[20px]">
                Ingrediants
              </div>
              <div className="border border-white-700 h-[200px] w-[150px]">
                {recipe.ingredients.map((ingredient) => (
                  <div>{ingredient}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] text-[20px]">
          <button className="border-[2px] pl-[5px] pr-[5px] rounded-[10px] hover:text-green-800 hover:bg-pink-100">
            OK
          </button>
          <button className="border-[2px] pl-[5px] pr-[5px] rounded-[10px] hover:text-green-800 hover:bg-pink-100">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
