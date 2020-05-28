import { Router } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import {
  createRecipe,
  deleteRecipe,
  getRecipes,
  updateRecipe,
} from "./controllers/recipe.ts";

const router = new Router();

router.delete("/recipes/:id", deleteRecipe);
router.get("/recipes", getRecipes);
router.patch("/recipes/:id", updateRecipe);
router.post("/recipes", createRecipe);

export { router };
