/** @format */

export type CreateRecipeRequestType = {
  uuid?: string;
  title: string;
  instruction: string;
  ingredients: string[];
};

export type UpdateRecipeRequestType = {
  title: string;
  instruction: string;
  ingredients: string[];
};
