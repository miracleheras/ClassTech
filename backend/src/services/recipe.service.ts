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
): Promise<RecipeEntity | null> => {
  const recipeRepository = AppDataSource.getRepository(RecipeEntity);

  const oldRecipe: RecipeEntity | null = await recipeRepository.findOneBy({
    uuid,
  });

  if (oldRecipe)
    return await recipeRepository.save({ ...oldRecipe, ...recipe });
  return null;
};

export const deleteRecipeService = async (
  uuid: string
): Promise<boolean | null> => {
  const recipeRepository = AppDataSource.getRepository(RecipeEntity);

  const deletingRecipe: RecipeEntity | null = await recipeRepository.findOneBy({
    uuid,
  });
  if (deletingRecipe) {
    await recipeRepository.softRemove(deletingRecipe);
    return true;
  } else return false;
};
