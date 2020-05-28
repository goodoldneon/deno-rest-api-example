import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { RecipeService } from "../services/recipe.ts";

const recipeService = new RecipeService();

export async function createRecipe(context: RouterContext) {
  const { request, response } = context;

  if (request.hasBody) {
    const { value: body } = await request.body();

    const recipe = {
      title: body.title,
      description: body.description,
      ingredients: body.ingredients,
    };

    response.status = 201;
    response.body = await recipeService.insertOne(recipe);
  } else {
    response.status = 400;
  }
}

export async function getRecipes(context: RouterContext) {
  context.response.body = await recipeService.getMany();
}
