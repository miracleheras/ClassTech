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

recipeRouter.post(
  "/",
  validate(recipeCreateValidationSchema),
  recipeController.createRecipe
);

recipeRouter.put(
  "/:id",
  validate(recipeIDValidationSchema),
  validate(recipeUpdateValidationSchema),
  recipeController.updateRecipe
);

recipeRouter.delete(
  "/:id",
  validate(recipeIDValidationSchema),
  recipeController.deleteRecipe
);

recipeRouter.get(
  "/:id",
  validate(recipeIDValidationSchema),
  recipeController.getRecipe
);

recipeRouter.get("/", recipeController.getAllRecipe);
