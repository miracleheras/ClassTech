/** @format */

import React from "react";
import { recipeType } from "types";

interface EditDialogProps {
  recipe: recipeType;
}

export const EditDialogComponent: React.FC<EditDialogProps> = ({ recipe }) => {
  return (
    <>
      <div className="w-[600px] h-[400px] flex z-10 absolute bg-gray-200 rounded-[20px] shalow-lg">
        <button>OK</button>
        <button>Cancel</button>
      </div>
    </>
  );
};
