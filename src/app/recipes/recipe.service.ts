import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'),
  ];

  getResipes() {
    return this.recipes.slice();
  }
}
