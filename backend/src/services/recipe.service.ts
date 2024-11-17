/** @format */

/** @format */
import { RecipeEntity } from "@/entities";
import { CreateRecipeRequestType, UpdateRecipeRequestType } from "@/types";
import { AppDataSource } from "@/setup/data-source";

export const createRecipeService = async ({
  title,
  instruction,
  ingredients,
}: CreateRecipeRequestType): Promise<RecipeEntity> => {
  const recipeRepository = AppDataSource.getRepository(RecipeEntity);
  const newRecipe = new RecipeEntity();
  Object.assign(newRecipe, { title, instruction, ingredients });
  return await recipeRepository.save(newRecipe);
};

export const updateRecipeService = async (
  uuid: string,
  recipe: UpdateRecipeRequestType
): Promise<RecipeEntity> => {
  const recipeRepository = AppDataSource.getRepository(RecipeEntity);

  const oldRecipe: RecipeEntity | null = await recipeRepository.findOneBy({
    uuid,
  });

  return await recipeRepository.save({ ...oldRecipe, recipe });
};
