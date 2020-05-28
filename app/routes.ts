import { Router } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { getRecipes, createRecipe } from "./controllers/recipe.ts";

const router = new Router();

router.get("/recipes", getRecipes);
router.post("/recipes", createRecipe);

export { router };
