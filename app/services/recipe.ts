import { IRecipe } from "../entities/recipe.ts";
import { RecipeRepository } from "../repositories/recipe.ts";

export class RecipeService {
  constructor() {}

  readonly repository = new RecipeRepository();

  async deleteOne(id: string) {
    return this.repository.deleteOne(id);
  }

  async findMany(): Promise<IRecipe[]> {
    return this.repository.findMany();
  }

  async insertOne(recipe: IRecipe) {
    return this.repository.insertOne(recipe);
  }

  async updateOne(id: string, recipe: IRecipe) {
    return this.repository.updateOne(id, recipe);
  }
}
