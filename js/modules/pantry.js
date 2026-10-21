/**
 * QuickBite - Ingredient-Based Recipe Matcher (Pantry Engine)
 * Matches hostel/student ingredients with Indian recipes, prioritizing what can be cooked immediately.
 */

import { RECIPES, PANTRY_COMMON_INGREDIENTS } from "../data/recipes.js";
import { Storage } from "./storage.js";

export class PantryMatcher {
  constructor() {
    this.selectedIngredients = new Set(Storage.getPantryItems());
  }

  getSelected() {
    return Array.from(this.selectedIngredients);
  }

  addIngredient(item) {
    const clean = item.trim().toLowerCase();
    if (clean) {
      this.selectedIngredients.add(clean);
      this.persist();
    }
  }

  removeIngredient(item) {
    const clean = item.trim().toLowerCase();
    this.selectedIngredients.delete(clean);
    this.persist();
  }

  toggleIngredient(item) {
    const clean = item.trim().toLowerCase();
    if (this.selectedIngredients.has(clean)) {
      this.selectedIngredients.delete(clean);
    } else {
      this.selectedIngredients.add(clean);
    }
    this.persist();
    return this.selectedIngredients.has(clean);
  }

  clear() {
    this.selectedIngredients.clear();
    this.persist();
  }

  persist() {
    Storage.savePantryItems(Array.from(this.selectedIngredients));
  }

  /**
   * Evaluates all recipes against currently selected pantry ingredients
   * Returns recipes sorted by match percentage
   */
  findMatchingRecipes() {
    const selected = Array.from(this.selectedIngredients);

    const matches = RECIPES.map(recipe => {
      // Filter for key non-staple ingredients for calculating match rate
      const keyIngredients = recipe.ingredients.filter(ing => !ing.isStaple);
      const allIngredients = recipe.ingredients;

      const userHasList = [];
      const userMissingList = [];

      allIngredients.forEach(ing => {
        const ingKey = ing.key.toLowerCase();
        // Check if any selected ingredient matches this key
        const hasIt = selected.some(sel => ingKey.includes(sel) || sel.includes(ingKey));
        if (hasIt) {
          userHasList.push(ing);
        } else if (!ing.isStaple) {
          userMissingList.push(ing);
        }
      });

      const matchedKeyCount = keyIngredients.filter(ing => {
        const ingKey = ing.key.toLowerCase();
        return selected.some(sel => ingKey.includes(sel) || sel.includes(ingKey));
      }).length;

      const totalKeyCount = keyIngredients.length || 1;
      const matchPercentage = Math.round((matchedKeyCount / totalKeyCount) * 100);

      return {
        recipe,
        matchPercentage,
        matchedCount: matchedKeyCount,
        totalKeyCount,
        hasAllIngredients: userMissingList.length === 0,
        missingIngredients: userMissingList,
        matchingIngredients: userHasList
      };
    });

    // Sort: highest match first, then by shortest total cooking time
    return matches.sort((a, b) => {
      if (b.matchPercentage !== a.matchPercentage) {
        return b.matchPercentage - a.matchPercentage;
      }
      return a.recipe.totalTime - b.recipe.totalTime;
    });
  }
}

export const Pantry = new PantryMatcher();
