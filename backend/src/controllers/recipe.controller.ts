/** @format */

import { recipeService } from "@/services";
import { errorHandlerWrapper } from "@/utils/errorHandlerWrapper";
import { Request, Response } from "express";
import httpStatus from "http-status";

const createRecipeHandler = async (req: Request, res: Response) => {
  const { title, instruction, ingredients } = req.body;
  const recipe = await recipeService.createRecipeService({
    title,
    instruction,
    ingredients,
  });
  res.status(httpStatus.CREATED).json({ recipe });
};

const updateRecipeHandler = async (req: Request, res: Response) => {
  const recipe = await recipeService.updateRecipeService(
    req.params.id,
    req.body
  );

  res.status(httpStatus.OK).json(recipe);
};

const deleteRecipeHandler = async (req: Request, res: Response) => {
  await recipeService.deleteRecipeService(req.params.id);

  res.status(httpStatus.NO_CONTENT).json({});
};

const getRecipeHandler = async (req: Request, res: Response) => {
  const recipe = await recipeService.getRecipeService(req.params.id);

  res.status(httpStatus.OK).json(recipe);
};

const getAllRecipeHandler = async (req: Request, res: Response) => {
  const recipes = await recipeService.getAllRecipeService();

  res.status(httpStatus.OK).json(recipes);
};

export const createRecipe = errorHandlerWrapper(createRecipeHandler);
export const updateRecipe = errorHandlerWrapper(updateRecipeHandler);
export const deleteRecipe = errorHandlerWrapper(deleteRecipeHandler);
export const getRecipe = errorHandlerWrapper(getRecipeHandler);
export const getAllRecipe = errorHandlerWrapper(getAllRecipeHandler);
