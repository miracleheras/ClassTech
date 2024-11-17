/** @format */

import { recipeController } from "@/controllers";
import {
  recipeCreateValidationSchema,
  recipeIDValidationSchema,
  recipeUpdateValidationSchema,
  validate,
} from "@/validation";
import { Router } from "express";

export const recipeRouter = Router();

recipeRouter.get(
  "/",
  validate(recipeCreateValidationSchema),
  recipeController.createRecipe
);

recipeRouter.get(
  "/:id",
  validate(recipeIDValidationSchema),
  validate(recipeUpdateValidationSchema),
  recipeController.updateRecipe
);
