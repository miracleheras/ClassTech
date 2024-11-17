/** @format */

import { errorHandlerMiddleware } from "@/middleware";
import { recipeService } from "@/services";
import { errorHandlerWrapper } from "@/utils/errorHandlerWrapper";
import { Request, Response } from "express";

const createRecipeHandler = async (req: Request, res: Response) => {
  const { title, instruction, ingredients } = req.body;
  const recipe = await recipeService.createRecipe({
    title,
    instruction,
    ingredients,
  });
  res.status(httpStatus.CREATED).json({ recipe });
};

export const createRecipe = errorHandlerWrapper(createRecipeHandler);
