/**
 * QuickBite - LocalStorage State Management
 * Persistent storage for favorites, weekly meal plans, pantry items, and user settings
 */

const STORAGE_KEYS = {
  FAVORITES: "quickbite_favorites",
  MEAL_PLAN: "quickbite_meal_plan",
  PANTRY: "quickbite_pantry_items",
  THEME: "quickbite_theme"
};

export const Storage = {
  // Favorites
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Could not read favorites from localStorage", e);
      return [];
    }
  },

  isFavorite(recipeId) {
    const favs = this.getFavorites();
    return favs.includes(recipeId);
  },

  toggleFavorite(recipeId) {
    let favs = this.getFavorites();
    const isFav = favs.includes(recipeId);
    if (isFav) {
      favs = favs.filter(id => id !== recipeId);
    } else {
      favs.push(recipeId);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
    } catch (e) {
      console.warn("Could not save favorite", e);
    }
    return !isFav;
  },

  // Weekly Meal Plan
  // Structure: { Monday: { breakfast: recipeId, lunch: recipeId, dinner: recipeId }, ... }
  getMealPlan() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MEAL_PLAN);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Could not read meal plan", e);
    }
    return this.getDefaultMealPlan();
  },

  getDefaultMealPlan() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const plan = {};
    days.forEach(day => {
      plan[day] = {
        breakfast: null,
        lunch: null,
        dinner: null
      };
    });
    return plan;
  },

  saveMealPlan(plan) {
    try {
      localStorage.setItem(STORAGE_KEYS.MEAL_PLAN, JSON.stringify(plan));
    } catch (e) {
      console.warn("Could not save meal plan", e);
    }
  },

  setMealSlot(day, mealType, recipeId) {
    const plan = this.getMealPlan();
    if (!plan[day]) plan[day] = {};
    plan[day][mealType] = recipeId;
    this.saveMealPlan(plan);
    return plan;
  },

  clearMealSlot(day, mealType) {
    const plan = this.getMealPlan();
    if (plan[day]) {
      plan[day][mealType] = null;
      this.saveMealPlan(plan);
    }
    return plan;
  },

  clearEntireMealPlan() {
    const plan = this.getDefaultMealPlan();
    this.saveMealPlan(plan);
    return plan;
  },

  // Pantry Items
  getPantryItems() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PANTRY);
      return data ? JSON.parse(data) : ["onion", "potato", "tomato", "green chilli", "poha", "maggi"];
    } catch (e) {
      return ["onion", "potato", "tomato", "green chilli", "poha", "maggi"];
    }
  },

  savePantryItems(items) {
    try {
      localStorage.setItem(STORAGE_KEYS.PANTRY, JSON.stringify(items));
    } catch (e) {
      console.warn("Could not save pantry items", e);
    }
  },

  // Theme (light / dark)
  getTheme() {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    } catch (e) {
      return "light";
    }
  },

  saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.warn("Could not save theme", e);
    }
  }
};
