import { db } from "../db/mongo.ts";
import { IRecipe } from "../entities/recipe.ts";

export class RecipeRepository {
  constructor() {}

  readonly collection = db.collection("recipes");

  async find() {
    return this.collection.find();
  }

  async insertOne(recipe: IRecipe) {
    return this.collection.insertOne(recipe);
  }
}
