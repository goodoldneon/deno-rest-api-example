import { ObjectId } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

import { db } from "../db/mongo.ts";
import { IRecipe } from "../entities/recipe.ts";

export class RecipeRepository {
  constructor() {}

  readonly collection = db.collection("recipes");

  async deleteOne(id: string) {
    const query = { _id: createObjectId(id) };

    return this.collection.deleteOne(query);
  }

  async findMany(): Promise<IRecipe[]> {
    return this.collection.find();
  }

  async findOne(id: string): Promise<IRecipe> {
    const query = { _id: createObjectId(id) };

    return this.collection.findOne(query);
  }

  async insertOne(recipe: IRecipe) {
    return this.collection.insertOne(recipe);
  }

  async updateOne(id: string, partialRecipe: object) {
    const oldRecipe = await this.findOne(id);
    const newRecipe = updateRecipe(oldRecipe, partialRecipe);
    const query = { _id: createObjectId(id) };

    return this.collection.updateOne(query, newRecipe);
  }
}

function createObjectId(id: string): ObjectId {
  return { $oid: id };
}

function updateRecipe(oldRecipe: IRecipe, partialRecipe: object): IRecipe {
  return Object.assign({}, oldRecipe, partialRecipe);
}
