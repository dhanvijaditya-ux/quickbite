/**
 * QuickBite - Weekly Meal Planner & Smart Grocery Exporter
 * Manages 7-day Indian student meal plan and aggregates shopping list
 */

import { RECIPES } from "../data/recipes.js";
import { Storage } from "./storage.js";

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export const MEAL_TYPES = [
  { id: "breakfast", label: "Breakfast", icon: "☀️", time: "Morning" },
  { id: "lunch", label: "Lunch", icon: "🍛", time: "Afternoon" },
  { id: "dinner", label: "Dinner", icon: "🌙", time: "Night" }
];

export class MealPlanner {
  constructor() {
    this.plan = Storage.getMealPlan();
  }

  getPlan() {
    this.plan = Storage.getMealPlan();
    return this.plan;
  }

  assignRecipe(day, mealType, recipeId) {
    this.plan = Storage.setMealSlot(day, mealType, recipeId);
    return this.plan;
  }

  removeRecipe(day, mealType) {
    this.plan = Storage.clearMealSlot(day, mealType);
    return this.plan;
  }

  clearAll() {
    this.plan = Storage.clearEntireMealPlan();
    return this.plan;
  }

  /**
   * Automatically designs a balanced, budget-friendly 7-day student meal plan
   * Uses distinct 15-20 min quick recipes across the week
   */
  autoPlanWeekly() {
    const breakfasts = RECIPES.filter(r => r.category === "breakfast" || r.tags.includes("Under 15 Mins"));
    const lunches = RECIPES.filter(r => r.category === "lunch" || r.tags.includes("High Protein"));
    const dinners = RECIPES.filter(r => r.category === "dinner" || r.tags.includes("Comfort Food") || r.tags.includes("Single Pot"));

    const newPlan = {};

    DAYS_OF_WEEK.forEach((day, index) => {
      newPlan[day] = {
        breakfast: breakfasts[index % breakfasts.length]?.id || "kanda-poha",
        lunch: lunches[index % lunches.length]?.id || "paneer-bhurji",
        dinner: dinners[index % dinners.length]?.id || "moong-dal-khichdi"
      };
    });

    this.plan = newPlan;
    Storage.saveMealPlan(newPlan);
    return this.plan;
  }

  /**
   * Aggregates all ingredients across all planned meals for the week
   * Groups items by category for easy shopping
   */
  generateGroceryList() {
    const currentPlan = this.getPlan();
    const recipeIdCountMap = {};

    // Count how many times each recipe appears in the week
    DAYS_OF_WEEK.forEach(day => {
      const dayMeals = currentPlan[day] || {};
      Object.values(dayMeals).forEach(recipeId => {
        if (recipeId) {
          recipeIdCountMap[recipeId] = (recipeIdCountMap[recipeId] || 0) + 1;
        }
      });
    });

    const aggregatedIngredients = {};

    Object.entries(recipeIdCountMap).forEach(([recipeId, multiplier]) => {
      const recipe = RECIPES.find(r => r.id === recipeId);
      if (!recipe) return;

      recipe.ingredients.forEach(ing => {
        const key = ing.name.toLowerCase().trim();
        if (!aggregatedIngredients[key]) {
          aggregatedIngredients[key] = {
            name: ing.name,
            amount: 0,
            unit: ing.unit,
            isStaple: ing.isStaple,
            recipes: []
          };
        }
        aggregatedIngredients[key].amount += (ing.amount * multiplier);
        if (!aggregatedIngredients[key].recipes.includes(recipe.title)) {
          aggregatedIngredients[key].recipes.push(recipe.title);
        }
      });
    });

    return Object.values(aggregatedIngredients).sort((a, b) => {
      // Non-staples first, staples last
      if (a.isStaple !== b.isStaple) {
        return a.isStaple ? 1 : -1;
      }
      return a.name.localeCompare(b.name);
    });
  }
}

export const Planner = new MealPlanner();
