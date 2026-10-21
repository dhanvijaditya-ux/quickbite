/**
 * QuickBite - Recipe Detail Modal & Step-by-Step Cooking Assistant
 */

import { RECIPES } from "../data/recipes.js";
import { Storage } from "./storage.js";
import { Timer } from "./timer.js";
import { Planner, DAYS_OF_WEEK, MEAL_TYPES } from "./planner.js";

export class ModalController {
  constructor() {
    this.activeRecipe = null;
    this.servings = 1;
    this.checkedIngredients = new Set();
    this.completedSteps = new Set();
  }

  openRecipe(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    this.activeRecipe = recipe;
    this.servings = recipe.servingsBase || 1;
    this.checkedIngredients.clear();
    this.completedSteps.clear();

    this.renderModal();
    const modalEl = document.getElementById("recipe-modal");
    if (modalEl) {
      modalEl.classList.remove("hidden");
      document.body.classList.add("modal-open");
    }
  }

  closeModal() {
    const modalEl = document.getElementById("recipe-modal");
    if (modalEl) {
      modalEl.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  }

  setServings(newServings) {
    if (newServings < 1 || newServings > 8) return;
    this.servings = newServings;
    this.renderIngredientsList();
  }

  renderModal() {
    const r = this.activeRecipe;
    if (!r) return;

    const modalBody = document.getElementById("recipe-modal-content");
    if (!modalBody) return;

    const isFav = Storage.isFavorite(r.id);

    modalBody.innerHTML = `
      <div class="modal-header-hero">
        <img src="${r.image}" alt="${r.title}" class="modal-hero-img" onerror="this.src='assets/hero.jpg'">
        <button class="modal-close-btn" id="modal-close-x" aria-label="Close">&times;</button>
        <div class="modal-hero-overlay">
          <div class="recipe-tags-row">
            ${r.tags.map(t => `<span class="badge badge-accent">${t}</span>`).join("")}
          </div>
          <h2 class="modal-recipe-title">${r.title}</h2>
          <span class="modal-recipe-hindi">${r.hindiTitle || ""}</span>
          <p class="modal-recipe-tagline">${r.tagline}</p>
        </div>
      </div>

      <div class="modal-inner-padding">
        <!-- Quick Meta Stats Bar -->
        <div class="recipe-meta-grid">
          <div class="meta-item">
            <span class="meta-icon">⏱️</span>
            <div>
              <div class="meta-val">${r.totalTime} mins</div>
              <div class="meta-lbl">Total (${r.prepTime}m prep + ${r.cookTime}m cook)</div>
            </div>
          </div>
          <div class="meta-item">
            <span class="meta-icon">💰</span>
            <div>
              <div class="meta-val">${r.costPerServing}</div>
              <div class="meta-lbl">Approx per plate</div>
            </div>
          </div>
          <div class="meta-item">
            <span class="meta-icon">💪</span>
            <div>
              <div class="meta-val">${r.protein}</div>
              <div class="meta-lbl">Protein (${r.calories} kcal)</div>
            </div>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🍳</span>
            <div>
              <div class="meta-val">${r.difficulty}</div>
              <div class="meta-lbl">${r.equipment}</div>
            </div>
          </div>
        </div>

        <!-- Student Pro Tip Alert -->
        <div class="student-tip-box">
          <div class="tip-badge">💡 HOSTEL / STUDENT HACK</div>
          <p>${r.studentTip}</p>
        </div>

        <!-- Ingredients Section with Serving Scaler -->
        <div class="modal-section">
          <div class="section-header-row">
            <div>
              <h3 class="section-title">Ingredients Checklist</h3>
              <p class="section-subtitle">Tap items as you assemble them in your kitchen</p>
            </div>
            <div class="servings-scaler" id="servings-scaler-control">
              <span class="scaler-lbl">Servings:</span>
              <button class="scaler-btn" id="btn-serv-minus" aria-label="Decrease Servings">-</button>
              <span class="servings-count" id="servings-display">${this.servings}</span>
              <button class="scaler-btn" id="btn-serv-plus" aria-label="Increase Servings">+</button>
            </div>
          </div>

          <ul class="ingredients-list" id="modal-ingredients-list">
            <!-- Rendered by renderIngredientsList -->
          </ul>
        </div>

        <!-- Step-by-Step Cooking Steps -->
        <div class="modal-section">
          <h3 class="section-title">Step-by-Step Cooking</h3>
          <p class="section-subtitle">Follow along effortlessly; click any step when finished</p>

          <div class="steps-flow" id="modal-steps-container">
            ${r.steps.map(step => `
              <div class="step-card ${this.completedSteps.has(step.stepNumber) ? 'completed' : ''}" data-step="${step.stepNumber}">
                <div class="step-header">
                  <div class="step-badge">Step ${step.stepNumber}</div>
                  <h4 class="step-title">${step.title}</h4>
                  <button class="step-checkbox" data-step-toggle="${step.stepNumber}">
                    ${this.completedSteps.has(step.stepNumber) ? '✓ Done' : 'Mark Done'}
                  </button>
                </div>
                <p class="step-text">${step.text}</p>
                ${step.timerSeconds ? `
                  <div class="step-timer-row">
                    <button class="btn btn-secondary btn-sm step-timer-trigger" data-timer-seconds="${step.timerSeconds}" data-timer-label="${r.title}: ${step.title}">
                      ⏱️ Start ${Math.ceil(step.timerSeconds / 60)}m Step Timer
                    </button>
                    <span class="step-timer-hint">Auto-sets countdown</span>
                  </div>
                ` : ''}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Footer Actions Bar -->
        <div class="modal-actions-footer">
          <button class="btn ${isFav ? 'btn-fav-active' : 'btn-secondary'}" id="modal-fav-btn">
            ${isFav ? '❤️ Saved to Favorites' : '🤍 Add to Favorites'}
          </button>
          <button class="btn btn-primary" id="modal-plan-btn">
            📅 Add to Weekly Plan
          </button>
        </div>
      </div>
    `;

    this.renderIngredientsList();
    this.attachEventListeners();
  }

  renderIngredientsList() {
    const listEl = document.getElementById("modal-ingredients-list");
    const countDisplay = document.getElementById("servings-display");
    if (countDisplay) countDisplay.textContent = this.servings;
    if (!listEl || !this.activeRecipe) return;

    const baseServings = this.activeRecipe.servingsBase || 1;
    const factor = this.servings / baseServings;

    listEl.innerHTML = this.activeRecipe.ingredients.map((ing, idx) => {
      const scaledAmount = Number((ing.amount * factor).toFixed(2));
      const isChecked = this.checkedIngredients.has(idx);

      return `
        <li class="ingredient-item ${isChecked ? 'checked' : ''}" data-ing-idx="${idx}">
          <input type="checkbox" id="ing-${idx}" ${isChecked ? 'checked' : ''} class="ing-checkbox">
          <label for="ing-${idx}" class="ing-label">
            <span class="ing-qty">${scaledAmount} ${ing.unit}</span>
            <span class="ing-name">${ing.name}</span>
            ${ing.isStaple ? '<span class="staple-pill">Staple</span>' : ''}
          </label>
        </li>
      `;
    }).join("");

    // Wire up checkboxes
    listEl.querySelectorAll(".ingredient-item").forEach(item => {
      item.addEventListener("click", (e) => {
        const idx = parseInt(item.dataset.ingIdx, 10);
        if (this.checkedIngredients.has(idx)) {
          this.checkedIngredients.delete(idx);
          item.classList.remove("checked");
          item.querySelector(".ing-checkbox").checked = false;
        } else {
          this.checkedIngredients.add(idx);
          item.classList.add("checked");
          item.querySelector(".ing-checkbox").checked = true;
        }
      });
    });
  }

  attachEventListeners() {
    // Close button
    document.getElementById("modal-close-x")?.addEventListener("click", () => this.closeModal());

    // Servings + / -
    document.getElementById("btn-serv-minus")?.addEventListener("click", () => {
      this.setServings(this.servings - 1);
    });
    document.getElementById("btn-serv-plus")?.addEventListener("click", () => {
      this.setServings(this.servings + 1);
    });

    // Step completion toggles
    document.querySelectorAll("[data-step-toggle]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const stepNum = parseInt(btn.dataset.stepToggle, 10);
        const card = btn.closest(".step-card");
        if (this.completedSteps.has(stepNum)) {
          this.completedSteps.delete(stepNum);
          card.classList.remove("completed");
          btn.textContent = "Mark Done";
        } else {
          this.completedSteps.add(stepNum);
          card.classList.add("completed");
          btn.textContent = "✓ Done";
        }
      });
    });

    // Step timer triggers
    document.querySelectorAll(".step-timer-trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const secs = parseInt(btn.dataset.timerSeconds, 10);
        const label = btn.dataset.timerLabel;
        Timer.setDuration(secs, label);
        Timer.start();

        // Switch to timer view or show toast
        window.dispatchEvent(new CustomEvent("quickbite:show-timer", {
          detail: { label, seconds: secs }
        }));
      });
    });

    // Favorite toggle
    const favBtn = document.getElementById("modal-fav-btn");
    if (favBtn && this.activeRecipe) {
      favBtn.addEventListener("click", () => {
        const nowFav = Storage.toggleFavorite(this.activeRecipe.id);
        if (nowFav) {
          favBtn.classList.add("btn-fav-active");
          favBtn.classList.remove("btn-secondary");
          favBtn.innerHTML = "❤️ Saved to Favorites";
        } else {
          favBtn.classList.remove("btn-fav-active");
          favBtn.classList.add("btn-secondary");
          favBtn.innerHTML = "🤍 Add to Favorites";
        }
        window.dispatchEvent(new CustomEvent("quickbite:favorites-updated"));
      });
    }

    // Add to Meal Plan
    const planBtn = document.getElementById("modal-plan-btn");
    if (planBtn && this.activeRecipe) {
      planBtn.addEventListener("click", () => {
        this.openPlanPicker(this.activeRecipe.id);
      });
    }
  }

  // Quick picker to assign recipe to day + meal slot
  openPlanPicker(recipeId) {
    const pickerModal = document.getElementById("plan-picker-modal");
    if (!pickerModal) return;

    const r = RECIPES.find(item => item.id === recipeId);
    if (!r) return;

    const pickerContent = document.getElementById("plan-picker-content");
    pickerContent.innerHTML = `
      <div class="picker-header">
        <h3>Add to Meal Planner</h3>
        <p>Choose when to cook <strong>${r.title}</strong></p>
        <button class="modal-close-btn" id="close-picker-btn">&times;</button>
      </div>
      <div class="picker-grid">
        <div class="form-group">
          <label for="picker-day-select">Select Day:</label>
          <select id="picker-day-select" class="form-select">
            ${DAYS_OF_WEEK.map(d => `<option value="${d}">${d}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label for="picker-meal-select">Select Meal:</label>
          <select id="picker-meal-select" class="form-select">
            ${MEAL_TYPES.map(m => `
              <option value="${m.id}" ${m.id === r.category ? 'selected' : ''}>${m.icon} ${m.label}</option>
            `).join("")}
          </select>
        </div>
        <button class="btn btn-primary btn-block" id="confirm-add-plan">Save to Plan</button>
      </div>
    `;

    pickerModal.classList.remove("hidden");

    document.getElementById("close-picker-btn")?.addEventListener("click", () => {
      pickerModal.classList.add("hidden");
    });

    document.getElementById("confirm-add-plan")?.addEventListener("click", () => {
      const day = document.getElementById("picker-day-select").value;
      const meal = document.getElementById("picker-meal-select").value;
      Planner.assignRecipe(day, meal, recipeId);
      pickerModal.classList.add("hidden");

      window.dispatchEvent(new CustomEvent("quickbite:plan-updated", {
        detail: { day, meal, recipeTitle: r.title }
      }));
    });
  }
}

export const Modal = new ModalController();
