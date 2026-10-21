# ⚡ QuickBite - College Student Cooking Assistant

> **Fast, budget-friendly 15–30 minute Indian vegetarian meals for busy students balancing assignments, studying, and life.**

---

## 🌟 Overview & Key Features

QuickBite is an intuitive, mobile-first web application created specifically for college students and hostelers who have limited time, basic single-pan cooking setups, and tight budgets.

### Features Included:
1. **Home Dashboard**:
   - Time-of-day dynamic greeting (e.g., *Late-Night Study Fuel*, *Quick Lunch Time*).
   - High-impact student metrics (15–25 min average prep/cook, ₹20–₹40 per serving, single-pan cleaning).
   - Instant filter tags (*Under 15 Mins*, *High Protein*, *Single Pot*, *Under ₹30*, *Exam Fuel*).
2. **Recipe Search & Filter**:
   - Real-time search across titles, Hindi names, tags, and ingredients.
   - Filter by meal type (*Breakfast*, *Lunch*, *Dinner*, *Quick Snacks*).
   - Filter by max preparation time (12m, 15m, 20m, 30m) and difficulty (*Super Easy*, *Easy*).
   - Multi-option sorting (Fastest first, lowest cost first, highest protein).
3. **Pantry Recipe Matcher ("What's in your hostel kitchen?")**:
   - Interactive pantry ingredient tag selector (Onion, Potato, Tomato, Bread, Maggi, Paneer, Poha, Besan, Curd, etc.).
   - Custom ingredient adder to input whatever is in your fridge.
   - Smart match engine that scores recipes by % match and highlights missing ingredients.
4. **Rich Recipe Cards**:
   - Food photography, prep time, cook time, and total time badges.
   - Cost per serving badge (e.g. ₹25/plate) and nutritional macros (protein, calories).
   - 1-click favorite heart toggle with micro-animations.
5. **Interactive Step-by-Step Cooking Assistant**:
   - Dynamic serving portion scaler (1 to 8 portions) that auto-calculates ingredient quantities.
   - Interactive checklist for ingredients so you can prep before turning on the burner.
   - Checkable step-by-step cooking steps so you never lose your place.
   - Embedded 1-click step timers (e.g., *"⏱️ Start 3m Step Timer"* directly on the sautéing step).
   - **Hostel Pro Tip** on every recipe with real student culinary hacks.
6. **Smart Cooking Timer**:
   - Audio feedback using Web Audio API (offline, synthetic friendly chimes).
   - Circular countdown progress gauge and large digits display.
   - Quick presets (2m for Maggi/tempering, 5m for sautéing, 10m for boiling dal, 15m for rice/khichdi).
   - Floating navbar timer pill that stays active and visible while you browse other pages.
7. **Favorites Section**:
   - Persisted locally via `localStorage`.
   - 1-click cook or add to planner.
8. **Weekly Meal Planner & Grocery Exporter**:
   - 7-day schedule (Monday to Sunday) across Breakfast, Lunch, and Dinner.
   - **"Auto-Plan My Week"** smart button that fills a balanced week in 1 click.
   - **"Weekly Grocery List"**: Automatically aggregates all ingredients across all planned meals and separates them into *Fresh Produce* and *Pantry Staples*. Includes a **"Copy to Clipboard"** button for easy ordering on Blinkit/Zepto!

---

## 🚀 How to Run Locally

You can run QuickBite immediately using the included Python server:

```bash
python server.py
```

Then open your browser at:
```
http://localhost:3000
```

*(You can also open `index.html` directly or serve it using any web server like VS Code Live Server, GitHub Pages, or Vercel).*

---

## 🏗️ Architecture for Beginners

```
QuickBite/
├── index.html            # Main semantic HTML structure & modals
├── server.py             # One-click local Python development server
├── css/
│   ├── variables.css     # Design tokens: saffron/mint palette, fonts, shadows
│   ├── base.css          # Reset, sticky glassmorphism header, mobile bottom nav
│   ├── components.css    # Cards, pills, circular timer, modals, planner grid
│   └── responsive.css    # Breakpoints for mobile, tablet, and desktop
├── js/
│   ├── data/
│   │   └── recipes.js    # 16 authentic 15–30 min Indian vegetarian student recipes
│   ├── modules/
│   │   ├── storage.js    # LocalStorage manager (favorites, meal plans, pantry)
│   │   ├── audio.js      # Web Audio API sound synthesizer for timer alerts
│   │   ├── timer.js      # State machine for kitchen timer & background ticking
│   │   ├── pantry.js     # Ingredient matching & percentage calculator
│   │   ├── planner.js    # 7-day meal planner & grocery list aggregator
│   │   └── modal.js      # Step-by-step cooking assistant & portions scaler
│   └── app.js            # Main application controller & event router
└── assets/               # High quality dish photography & banners
```

### Why this design is great for beginners:
- **No Complex Build Steps**: No Webpack/Vite build failures, no npm dependency issues.
- **Native ES Modules**: Uses standard `<script type="module">` supported natively by all modern browsers.
- **Clean Separation of Concerns**: Logic is isolated into focused modules (Timer, Storage, Pantry, Planner, Modal) instead of one tangled script.
- **Zero API Keys / External Secrets**: 100% self-contained and privacy-friendly.
