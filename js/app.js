/**
 * QuickBite - Main Application Controller
 * Orchestrates views, search & filtering, pantry engine, meal planner, timer, and theme
 */

import { RECIPES, PANTRY_COMMON_INGREDIENTS } from "./data/recipes.js";
import { Storage } from "./modules/storage.js";
import { Timer } from "./modules/timer.js";
import { Pantry } from "./modules/pantry.js";
import { Planner, DAYS_OF_WEEK, MEAL_TYPES } from "./modules/planner.js";
import { Modal } from "./modules/modal.js";

class QuickBiteApp {
  constructor() {
    this.currentView = "home";
    this.searchQuery = "";
    this.selectedMealFilter = "all";
    this.selectedTimeFilter = "all";
    this.selectedDiffFilter = "all";
    this.selectedSort = "time-asc";
    this.homeCategoryTag = "all";
  }

  init() {
    this.applyTheme(Storage.getTheme());
    this.updateGreeting();
    this.setupNavigation();
    this.renderHomeRecipes();
    this.renderExploreRecipes();
    this.renderPantrySection();
    this.renderPlanner();
    this.renderFavorites();
    this.setupSearchAndFilters();
    this.setupTimerControls();
    this.setupThemeToggle();
    this.setupSecondaryModals();
    this.setupGlobalEvents();
    this.updateFavBadges();
  }

  // =========================================================================
  // Theme Management
  // =========================================================================
  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  setupThemeToggle() {
    const btn = document.getElementById("theme-toggle-btn");
    btn?.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "dark" ? "light" : "dark";
      this.applyTheme(nextTheme);
      Storage.saveTheme(nextTheme);
    });
  }

  // =========================================================================
  // Time Greeting
  // =========================================================================
  updateGreeting() {
    const greetingEl = document.getElementById("hero-greeting");
    if (!greetingEl) return;
    const hour = new Date().getHours();
    let prefix = "Ready to Cook?";
    if (hour >= 5 && hour < 12) {
      prefix = "Good Morning! Hungry?";
    } else if (hour >= 12 && hour < 17) {
      prefix = "Quick Lunch Time!";
    } else if (hour >= 17 && hour < 22) {
      prefix = "Evening Bites & Dinner";
    } else {
      prefix = "Late-Night Study Fuel?";
    }
    greetingEl.innerHTML = `${prefix} Cook Fresh in <span>15–30 Mins</span>.`;
  }

  // =========================================================================
  // Navigation & View Routing
  // =========================================================================
  setupNavigation() {
    const navButtons = document.querySelectorAll("[data-nav]");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.dataset.nav;
        this.switchView(targetView);
      });
    });

    document.getElementById("brand-logo")?.addEventListener("click", () => {
      this.switchView("home");
    });

    document.getElementById("btn-see-all-recipes")?.addEventListener("click", () => {
      this.switchView("explore");
    });

    document.getElementById("btn-explore-from-favs")?.addEventListener("click", () => {
      this.switchView("explore");
    });

    // Nav timer pill takes user directly to Timer view
    document.getElementById("nav-timer-pill")?.addEventListener("click", () => {
      this.switchView("timer");
    });
  }

  switchView(viewName) {
    this.currentView = viewName;

    // Toggle active view sections
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Update active nav button state on desktop and mobile
    document.querySelectorAll("[data-nav]").forEach(btn => {
      if (btn.dataset.nav === viewName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // View-specific refreshes
    if (viewName === "favorites") {
      this.renderFavorites();
    } else if (viewName === "pantry") {
      this.renderPantryMatches();
    } else if (viewName === "planner") {
      this.renderPlanner();
    }
  }

  // =========================================================================
  // Reusable Recipe Card HTML Generator
  // =========================================================================
  createRecipeCardHTML(recipe, extraBadge = null) {
    const isFav = Storage.isFavorite(recipe.id);

    return `
      <article class="recipe-card" data-recipe-id="${recipe.id}">
        <div class="card-media-wrapper">
          <img src="${recipe.image}" alt="${recipe.title}" class="card-img" loading="lazy" onerror="this.src='assets/hero.jpg'">
          <div class="card-time-badge">
            <span>⏱️</span> ${recipe.totalTime}m
          </div>
          <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-fav-id="${recipe.id}" aria-label="Toggle Favorite" title="Save Recipe">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="card-body">
          <div class="card-tag-row">
            ${recipe.tags.slice(0, 2).map(t => `<span class="badge badge-accent">${t}</span>`).join("")}
          </div>

          <h3 class="card-title">${recipe.title}</h3>
          <span class="card-hindi">${recipe.hindiTitle || ""}</span>
          <p class="card-tagline">${recipe.tagline}</p>

          ${extraBadge || ""}

          <div class="card-spec-bar">
            <span class="spec-item">💰 <strong>${recipe.costPerServing}</strong></span>
            <span class="spec-item">💪 <strong>${recipe.protein}</strong></span>
            <span class="spec-item">🔥 <strong>${recipe.calories} kcal</strong></span>
            <span class="spec-item">🟢 <strong>${recipe.difficulty}</strong></span>
          </div>

          <div class="card-footer-actions">
            <button class="btn btn-primary btn-sm btn-block" data-action="cook" data-id="${recipe.id}">
              🍳 Cook in ${recipe.totalTime}m
            </button>
            <button class="btn btn-secondary btn-sm" data-action="plan" data-id="${recipe.id}" title="Add to Meal Planner">
              📅
            </button>
          </div>
        </div>
      </article>
    `;
  }

  attachCardActionListeners(container) {
    if (!container) return;

    // Open cooking assistant modal
    container.querySelectorAll("[data-action='cook']").forEach(btn => {
      btn.addEventListener("click", () => {
        Modal.openRecipe(btn.dataset.id);
      });
    });

    // Add to meal plan
    container.querySelectorAll("[data-action='plan']").forEach(btn => {
      btn.addEventListener("click", () => {
        Modal.openPlanPicker(btn.dataset.id);
      });
    });

    // Favorite heart toggle
    container.querySelectorAll("[data-fav-id]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.favId;
        const nowFav = Storage.toggleFavorite(id);
        if (nowFav) {
          btn.classList.add("is-fav");
          btn.textContent = "❤️";
          this.showToast("Saved to Favorites! ❤️", "success");
        } else {
          btn.classList.remove("is-fav");
          btn.textContent = "🤍";
          this.showToast("Removed from Favorites", "info");
        }
        this.updateFavBadges();
        if (this.currentView === "favorites") {
          this.renderFavorites();
        }
      });
    });
  }

  updateFavBadges() {
    const favs = Storage.getFavorites();
    const count = favs.length;
    const desktopBadge = document.getElementById("fav-count-badge");
    const mobileBadge = document.getElementById("m-fav-badge");
    if (desktopBadge) desktopBadge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
  }

  // =========================================================================
  // VIEW 1: Home Dashboard Rendering
  // =========================================================================
  renderHomeRecipes() {
    const grid = document.getElementById("home-recipes-grid");
    if (!grid) return;

    let filtered = RECIPES;
    if (this.homeCategoryTag !== "all") {
      filtered = RECIPES.filter(r => r.tags.includes(this.homeCategoryTag));
    }

    grid.innerHTML = filtered.map(r => this.createRecipeCardHTML(r)).join("");
    this.attachCardActionListeners(grid);

    // Filter pill click handlers
    const pillContainer = document.getElementById("home-category-pills");
    pillContainer?.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        pillContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.homeCategoryTag = pill.dataset.filter;
        this.renderHomeRecipes();
      });
    });
  }

  // =========================================================================
  // VIEW 2: Explore & Search
  // =========================================================================
  setupSearchAndFilters() {
    const searchInput = document.getElementById("recipe-search-input");
    const clearBtn = document.getElementById("search-clear-btn");
    const mealPills = document.getElementById("explore-meal-pills");
    const timeSelect = document.getElementById("time-filter-select");
    const diffSelect = document.getElementById("difficulty-filter-select");
    const sortSelect = document.getElementById("sort-select");

    searchInput?.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle("hidden", !this.searchQuery);
      }
      this.renderExploreRecipes();
    });

    clearBtn?.addEventListener("click", () => {
      searchInput.value = "";
      this.searchQuery = "";
      clearBtn.classList.add("hidden");
      this.renderExploreRecipes();
      searchInput.focus();
    });

    mealPills?.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        mealPills.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.selectedMealFilter = pill.dataset.meal;
        this.renderExploreRecipes();
      });
    });

    timeSelect?.addEventListener("change", (e) => {
      this.selectedTimeFilter = e.target.value;
      this.renderExploreRecipes();
    });

    diffSelect?.addEventListener("change", (e) => {
      this.selectedDiffFilter = e.target.value;
      this.renderExploreRecipes();
    });

    sortSelect?.addEventListener("change", (e) => {
      this.selectedSort = e.target.value;
      this.renderExploreRecipes();
    });
  }

  renderExploreRecipes() {
    const grid = document.getElementById("explore-recipes-grid");
    const countEl = document.getElementById("search-results-count");
    if (!grid) return;

    let list = RECIPES.filter(recipe => {
      // Search query check
      if (this.searchQuery) {
        const titleMatch = recipe.title.toLowerCase().includes(this.searchQuery);
        const hindiMatch = (recipe.hindiTitle || "").toLowerCase().includes(this.searchQuery);
        const tagMatch = recipe.tags.some(t => t.toLowerCase().includes(this.searchQuery));
        const ingMatch = recipe.ingredients.some(i => i.name.toLowerCase().includes(this.searchQuery));
        if (!titleMatch && !hindiMatch && !tagMatch && !ingMatch) {
          return false;
        }
      }

      // Meal category check
      if (this.selectedMealFilter !== "all" && recipe.category !== this.selectedMealFilter) {
        return false;
      }

      // Time filter check
      if (this.selectedTimeFilter !== "all") {
        const maxTime = parseInt(this.selectedTimeFilter, 10);
        if (recipe.totalTime > maxTime) return false;
      }

      // Difficulty filter check
      if (this.selectedDiffFilter !== "all" && recipe.difficulty !== this.selectedDiffFilter) {
        return false;
      }

      return true;
    });

    // Sorting
    list.sort((a, b) => {
      if (this.selectedSort === "time-asc") return a.totalTime - b.totalTime;
      if (this.selectedSort === "cost-asc") {
        const costA = parseInt(a.costPerServing.replace(/\D/g, ""), 10);
        const costB = parseInt(b.costPerServing.replace(/\D/g, ""), 10);
        return costA - costB;
      }
      if (this.selectedSort === "protein-desc") {
        const protA = parseInt(a.protein, 10);
        const protB = parseInt(b.protein, 10);
        return protB - protA;
      }
      if (this.selectedSort === "title-asc") return a.title.localeCompare(b.title);
      return 0;
    });

    if (countEl) {
      countEl.textContent = `Showing ${list.length} recipe${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px var(--space-md); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">🔍</span>
          <h3 class="section-title">No matching quick meals found</h3>
          <p class="section-subtitle">Try adjusting your filters or search keywords.</p>
        </div>
      `;
    } else {
      grid.innerHTML = list.map(r => this.createRecipeCardHTML(r)).join("");
      this.attachCardActionListeners(grid);
    }
  }

  // =========================================================================
  // VIEW 3: Pantry Matcher Engine UI
  // =========================================================================
  renderPantrySection() {
    const produceEl = document.getElementById("pantry-produce-chips");
    const grainsEl = document.getElementById("pantry-grains-chips");
    const dairyEl = document.getElementById("pantry-dairy-chips");
    const selected = new Set(Pantry.getSelected());

    const renderCategory = (category, container) => {
      if (!container) return;
      const items = PANTRY_COMMON_INGREDIENTS.filter(item => item.category === category);
      container.innerHTML = items.map(item => {
        const isSelected = selected.has(item.key.toLowerCase());
        return `
          <button type="button" class="pantry-chip ${isSelected ? 'selected' : ''}" data-pantry-key="${item.key}">
            <span>${item.icon}</span> ${item.label}
          </button>
        `;
      }).join("");

      container.querySelectorAll(".pantry-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          const key = chip.dataset.pantryKey;
          const isNowActive = Pantry.toggleIngredient(key);
          chip.classList.toggle("selected", isNowActive);
          this.renderPantryMatches();
        });
      });
    };

    renderCategory("produce", produceEl);
    renderCategory("pantry", grainsEl);
    renderCategory("dairy", dairyEl);

    // Custom ingredient form
    const form = document.getElementById("pantry-add-form");
    const input = document.getElementById("pantry-custom-input");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        Pantry.addIngredient(val);
        input.value = "";
        this.renderPantrySection();
        this.renderPantryMatches();
        this.showToast(`Added "${val}" to pantry!`, "success");
      }
    });

    // Clear pantry button
    document.getElementById("btn-clear-pantry")?.addEventListener("click", () => {
      Pantry.clear();
      this.renderPantrySection();
      this.renderPantryMatches();
      this.showToast("Pantry reset", "info");
    });

    this.renderPantryMatches();
  }

  renderPantryMatches() {
    const grid = document.getElementById("pantry-matched-grid");
    if (!grid) return;

    const matches = Pantry.findMatchingRecipes();

    if (matches.length === 0) {
      grid.innerHTML = `<p class="section-subtitle">Select some ingredients above to see matching meals.</p>`;
      return;
    }

    grid.innerHTML = matches.map(m => {
      const { recipe, matchPercentage, missingIngredients, hasAllIngredients } = m;

      let badgeClass = "match-low";
      let matchLabel = `${matchPercentage}% Match`;
      if (matchPercentage >= 80) {
        badgeClass = "match-high";
        matchLabel = hasAllIngredients ? "🎉 Ready to Cook (100% Match)!" : `✨ ${matchPercentage}% Match`;
      } else if (matchPercentage >= 50) {
        badgeClass = "match-medium";
      }

      const missingText = missingIngredients.length > 0
        ? `<div class="missing-tags-text">Missing: <strong>${missingIngredients.slice(0, 3).map(i => i.name).join(", ")}</strong></div>`
        : `<div class="missing-tags-text" style="color:var(--secondary); font-weight:700;">You have everything needed!</div>`;

      const extraBadgeHTML = `
        <div class="pantry-match-badge ${badgeClass}">
          <span>${matchLabel}</span>
        </div>
        ${missingText}
      `;

      return this.createRecipeCardHTML(recipe, extraBadgeHTML);
    }).join("");

    this.attachCardActionListeners(grid);
  }

  // =========================================================================
  // VIEW 4: Weekly Meal Planner
  // =========================================================================
  renderPlanner() {
    const grid = document.getElementById("planner-days-grid");
    if (!grid) return;

    const plan = Planner.getPlan();

    grid.innerHTML = DAYS_OF_WEEK.map(day => {
      const dayMeals = plan[day] || { breakfast: null, lunch: null, dinner: null };

      return `
        <div class="day-card" data-day="${day}">
          <div class="day-card-header">
            <span>${day}</span>
            <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">
              ${Object.values(dayMeals).filter(Boolean).length}/3 Planned
            </span>
          </div>
          <div class="day-meals-container">
            ${MEAL_TYPES.map(m => {
              const assignedRecipeId = dayMeals[m.id];
              const recipe = assignedRecipeId ? RECIPES.find(r => r.id === assignedRecipeId) : null;

              return `
                <div class="meal-slot-row">
                  <div class="meal-slot-label">
                    <span>${m.icon}</span> ${m.label}
                  </div>
                  <div class="meal-slot-content">
                    ${recipe ? `
                      <span class="meal-assigned-title" data-recipe-click="${recipe.id}">
                        ${recipe.title}
                      </span>
                      <button class="meal-remove-btn" data-remove-day="${day}" data-remove-meal="${m.id}" title="Remove">
                        &times;
                      </button>
                    ` : `
                      <span class="meal-empty-slot" data-add-day="${day}" data-add-meal="${m.id}">
                        + Pick recipe
                      </span>
                    `}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }).join("");

    // Wire up slot interactions
    grid.querySelectorAll("[data-recipe-click]").forEach(el => {
      el.addEventListener("click", () => {
        Modal.openRecipe(el.dataset.recipeClick);
      });
    });

    grid.querySelectorAll("[data-remove-day]").forEach(btn => {
      btn.addEventListener("click", () => {
        const day = btn.dataset.removeDay;
        const meal = btn.dataset.removeMeal;
        Planner.removeRecipe(day, meal);
        this.renderPlanner();
        this.showToast(`Removed from ${day} ${meal}`, "info");
      });
    });

    grid.querySelectorAll("[data-add-day]").forEach(btn => {
      btn.addEventListener("click", () => {
        // Open explore view with filtered category to pick
        const meal = btn.dataset.addMeal;
        this.selectedMealFilter = meal;
        this.switchView("explore");
        this.showToast(`Select a recipe for ${btn.dataset.addDay} ${meal}!`, "info");
      });
    });

    // Auto-Plan My Week button
    document.getElementById("btn-auto-plan")?.addEventListener("click", () => {
      Planner.autoPlanWeekly();
      this.renderPlanner();
      this.showToast("✨ Auto-planned your entire week with quick 15m meals!", "success");
    });

    // Reset Plan button
    document.getElementById("btn-clear-plan")?.addEventListener("click", () => {
      if (confirm("Reset weekly meal plan?")) {
        Planner.clearAll();
        this.renderPlanner();
        this.showToast("Weekly plan cleared", "info");
      }
    });

    // Open Grocery List
    document.getElementById("btn-open-grocery")?.addEventListener("click", () => {
      this.openGroceryModal();
    });
  }

  // =========================================================================
  // VIEW 5: Favorites
  // =========================================================================
  renderFavorites() {
    const grid = document.getElementById("favorites-recipes-grid");
    const emptyState = document.getElementById("favorites-empty-state");
    if (!grid || !emptyState) return;

    const favIds = Storage.getFavorites();
    const favRecipes = RECIPES.filter(r => favIds.includes(r.id));

    if (favRecipes.length === 0) {
      grid.innerHTML = "";
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
      grid.innerHTML = favRecipes.map(r => this.createRecipeCardHTML(r)).join("");
      this.attachCardActionListeners(grid);
    }
  }

  // =========================================================================
  // VIEW 6: Dedicated Cooking Timer
  // =========================================================================
  setupTimerControls() {
    const digitsEl = document.getElementById("timer-large-digits");
    const navTextEl = document.getElementById("nav-timer-text");
    const navPillEl = document.getElementById("nav-timer-pill");
    const labelEl = document.getElementById("timer-active-label");
    const circleEl = document.getElementById("timer-svg-circle");
    const toggleBtn = document.getElementById("btn-timer-toggle");
    const toggleIcon = document.getElementById("btn-timer-icon");
    const toggleLabel = document.getElementById("btn-timer-label");
    const resetBtn = document.getElementById("btn-timer-reset");
    const plus1Btn = document.getElementById("btn-timer-plus1");

    const circumference = 2 * Math.PI * 88; // r = 88 => 552.92

    // Subscribe to Timer state changes
    Timer.subscribe((state) => {
      if (digitsEl) digitsEl.textContent = state.formattedTime;
      if (navTextEl) navTextEl.textContent = state.formattedTime;
      if (labelEl) labelEl.textContent = state.label;

      if (navPillEl) {
        navPillEl.classList.toggle("running", state.isRunning);
      }

      if (circleEl) {
        const offset = circumference * (1 - state.progressRatio);
        circleEl.style.strokeDashoffset = offset;
      }

      if (toggleIcon && toggleLabel) {
        if (state.isRunning) {
          toggleIcon.textContent = "⏸";
          toggleLabel.textContent = "Pause";
        } else {
          toggleIcon.textContent = "▶";
          toggleLabel.textContent = "Start";
        }
      }
    });

    toggleBtn?.addEventListener("click", () => {
      if (Timer.isRunning) {
        Timer.pause();
      } else {
        Timer.start();
      }
    });

    resetBtn?.addEventListener("click", () => {
      Timer.reset();
    });

    plus1Btn?.addEventListener("click", () => {
      Timer.addMinute();
    });

    // Preset buttons
    document.querySelectorAll("[data-preset]").forEach(btn => {
      btn.addEventListener("click", () => {
        const secs = parseInt(btn.dataset.preset, 10);
        Timer.setDuration(secs, btn.textContent);
        Timer.start();
        this.showToast(`Timer set for ${Math.floor(secs / 60)} minutes`, "info");
      });
    });

    // Custom minutes/seconds input
    document.getElementById("btn-set-custom-timer")?.addEventListener("click", () => {
      const mins = parseInt(document.getElementById("custom-timer-mins").value, 10) || 0;
      const secs = parseInt(document.getElementById("custom-timer-secs").value, 10) || 0;
      const total = mins * 60 + secs;
      if (total > 0) {
        Timer.setDuration(total, `Custom: ${mins}m ${secs}s`);
        Timer.start();
        this.showToast(`Timer started: ${mins}m ${secs}s`, "info");
      }
    });
  }

  // =========================================================================
  // Secondary Modals & Dialogs (Grocery List)
  // =========================================================================
  setupSecondaryModals() {
    // Close recipe modal on backdrop click
    document.getElementById("recipe-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "recipe-modal") {
        Modal.closeModal();
      }
    });

    // Close plan picker on backdrop click
    document.getElementById("plan-picker-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "plan-picker-modal") {
        document.getElementById("plan-picker-modal").classList.add("hidden");
      }
    });

    // Close grocery modal on backdrop click or close button
    const groceryModal = document.getElementById("grocery-modal");
    document.getElementById("close-grocery-btn")?.addEventListener("click", () => {
      groceryModal?.classList.add("hidden");
    });
    groceryModal?.addEventListener("click", (e) => {
      if (e.target.id === "grocery-modal") {
        groceryModal.classList.add("hidden");
      }
    });
  }

  openGroceryModal() {
    const modal = document.getElementById("grocery-modal");
    const container = document.getElementById("grocery-list-container");
    if (!modal || !container) return;

    const items = Planner.generateGroceryList();

    if (items.length === 0) {
      container.innerHTML = `
        <p style="text-align: center; color: var(--text-muted); padding: 32px 0;">
          No meals planned yet! Click "Auto-Plan My Week" or assign recipes to your planner first.
        </p>
      `;
    } else {
      // Split into fresh ingredients vs pantry staples
      const freshItems = items.filter(i => !i.isStaple);
      const stapleItems = items.filter(i => i.isStaple);

      container.innerHTML = `
        <div class="grocery-category-block">
          <div class="grocery-cat-name">🥬 Fresh Produce & Perishables</div>
          <ul class="grocery-checklist">
            ${freshItems.map((item, idx) => `
              <li class="grocery-item" data-grocery-item="${idx}">
                <input type="checkbox" id="g-item-${idx}" style="accent-color: var(--primary);">
                <label for="g-item-${idx}" style="flex:1; cursor:pointer;">
                  <strong>${item.name}</strong>: ~${Number(item.amount.toFixed(1))} ${item.unit}
                </label>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="grocery-category-block">
          <div class="grocery-cat-name">🧂 Pantry Staples & Spices (Check if in stock)</div>
          <ul class="grocery-checklist">
            ${stapleItems.map((item, idx) => `
              <li class="grocery-item" data-grocery-item="s-${idx}">
                <input type="checkbox" id="g-staple-${idx}" style="accent-color: var(--primary);">
                <label for="g-staple-${idx}" style="flex:1; cursor:pointer;">
                  ${item.name} (~${Number(item.amount.toFixed(1))} ${item.unit})
                </label>
              </li>
            `).join("")}
          </ul>
        </div>
      `;

      container.querySelectorAll(".grocery-item").forEach(item => {
        item.addEventListener("click", (e) => {
          if (e.target.tagName !== "INPUT") {
            const cb = item.querySelector("input[type='checkbox']");
            cb.checked = !cb.checked;
          }
          item.classList.toggle("checked", item.querySelector("input[type='checkbox']").checked);
        });
      });
    }

    modal.classList.remove("hidden");

    // Copy to clipboard
    document.getElementById("btn-copy-grocery")?.addEventListener("click", () => {
      const text = items.map(i => `- [ ] ${i.name} (~${Number(i.amount.toFixed(1))} ${i.unit})`).join("\n");
      navigator.clipboard.writeText(`QuickBite Weekly Student Grocery List:\n\n${text}`)
        .then(() => this.showToast("Grocery list copied to clipboard! 📋", "success"))
        .catch(() => this.showToast("Could not copy to clipboard", "error"));
    });

    // Print
    document.getElementById("btn-print-grocery")?.addEventListener("click", () => {
      window.print();
    });
  }

  // =========================================================================
  // Global Event Bus Listeners
  // =========================================================================
  setupGlobalEvents() {
    // When timer finishes
    window.addEventListener("quickbite:timer-done", (e) => {
      const label = e.detail?.label || "Cooking Timer";
      this.showToast(`⏰ Timer Complete! "${label}" is ready.`, "timer");
    });

    // Show timer from recipe step
    window.addEventListener("quickbite:show-timer", (e) => {
      this.showToast(`⏱️ Started step timer: ${e.detail?.label}`, "info");
    });

    // When favorite list updates
    window.addEventListener("quickbite:favorites-updated", () => {
      this.updateFavBadges();
      this.renderHomeRecipes();
      this.renderExploreRecipes();
    });

    // When meal plan updates
    window.addEventListener("quickbite:plan-updated", (e) => {
      const { day, meal, recipeTitle } = e.detail;
      this.showToast(`Added "${recipeTitle}" to ${day} ${meal}!`, "success");
      this.renderPlanner();
    });
  }

  // Toast Notification System
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "timer") icon = "⏰";

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(12px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Safe boot check (handles both deferred modules and already-loaded DOM)
function boot() {
  if (window.__quickBiteApp) return;
  window.__quickBiteApp = new QuickBiteApp();
  window.__quickBiteApp.init();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

