/** @format */

/** @format */
import { RecipeEntity } from "@/entities";
import { CreateRecipeRequestType } from "@/types";
import { AppDataSource } from "@/data-source";

export const createRecipe = async ({
  title,
  instruction,
  ingredients,
}: CreateRecipeRequestType): Promise<RecipeEntity> => {
  const recipeRepository = AppDataSource.getRepository(RecipeEntity);
  const newRecipe = new RecipeEntity();
  Object.assign(newRecipe, { title, instruction, ingredients });
  return await recipeRepository.save(newRecipe);
};
