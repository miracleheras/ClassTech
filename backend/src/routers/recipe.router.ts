/** @format */

import { recipeController } from "@/controllers";
import { recipeCreateValidationSchema, validate } from "@/validation";
import { Router } from "express";

export const recipeRouter = Router();

recipeRouter.get(
  "/",
  validate(recipeCreateValidationSchema),
  recipeController.createRecipe
);
