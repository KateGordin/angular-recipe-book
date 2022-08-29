import {EventEmitter, Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza capricciosa',
      'Tasty pizza with mushrooms',
      'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Mushrooms', 20)
      ]),
    new Recipe(
      'Pizza mozzarella',
      'Nice pizza with cheese',
      'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
      [
        new Ingredient('Tomato', 1),
        new Ingredient('Cheese', 4)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getResipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}












