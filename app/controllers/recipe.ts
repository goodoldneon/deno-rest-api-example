import { Request, RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { RecipeService } from "../services/recipe.ts";
import { IRecipe } from "../entities/recipe.ts";

const recipeService = new RecipeService();

export async function createRecipe(context: RouterContext) {
  const { request, response } = context;

  if (request.hasBody) {
    const recipe = await getRecipeFromRequestBody(request);

    response.status = 201;
    response.body = await recipeService.insertOne(recipe);
  } else {
    response.status = 400;
  }
}

export async function deleteRecipe(context: RouterContext) {
  const { id } = context.params;

  if (id !== undefined) {
    await recipeService.deleteOne(id);
  } else {
    context.response.status = 404;
  }
}

export async function getRecipes(context: RouterContext) {
  context.response.body = await recipeService.findMany();
}

export async function updateRecipe(context: RouterContext) {
  const { request, response } = context;

  if (request.hasBody) {
    const { id } = context.params;

    if (id !== undefined) {
      const { value: partialRecipe } = await request.body();

      response.status = 204;
      await recipeService.updateOne(id, partialRecipe);
    } else {
      response.status = 404;
    }
  } else {
    response.status = 400;
  }
}

async function getRecipeFromRequestBody(request: Request): Promise<IRecipe> {
  const { value: body } = await request.body();

  return {
    title: body.title,
    description: body.description,
    ingredients: body.ingredients,
  };
}
