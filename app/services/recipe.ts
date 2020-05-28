import { IRecipe } from "../entities/recipe.ts";
import { RecipeRepository } from "../repositories/recipe.ts";

export class RecipeService {
  constructor() {}

  readonly repository = new RecipeRepository();

  async getMany() {
    return this.repository.find();
  }

  async insertOne(recipe: IRecipe) {
    return this.repository.insertOne(recipe);
  }
}
