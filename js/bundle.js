// QuickBite Unified Production Bundle - Supports file:// and http://

(function() {
  "use strict";


// ==========================================
// Module: js/data/recipes.js
// ==========================================
/**
 * QuickBite - Curated Indian Vegetarian Recipes for College Students
 * Fast (15-30 mins), Budget-Friendly (₹15-₹65 per serving), High Flavor
 */

const RECIPES = [
  {
    id: "kanda-poha",
    title: "Classic Kanda Poha",
    hindiTitle: "कांदा पोहा",
    tagline: "The undisputed king of 15-minute college breakfasts.",
    category: "breakfast",
    image: "assets/poha.jpg",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Super Easy",
    costPerServing: "₹25",
    calories: 270,
    protein: "6g",
    carbs: "45g",
    fat: "7g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Hostel Friendly", "Budget Pick", "Single Pot"],
    equipment: "1 Pan / Kadhai & Colander",
    ingredients: [
      { name: "Thick Poha (Flattened rice)", amount: 1, unit: "cup", key: "poha", isStaple: false },
      { name: "Onion, finely chopped", amount: 1, unit: "medium", key: "onion", isStaple: false },
      { name: "Raw Peanuts", amount: 2, unit: "tbsp", key: "peanuts", isStaple: false },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Mustard Seeds (Rai)", amount: 0.5, unit: "tsp", key: "mustard seeds", isStaple: true },
      { name: "Turmeric Powder (Haldi)", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Curry Leaves (Kadi Patta)", amount: 6, unit: "leaves", key: "curry leaves", isStaple: false },
      { name: "Cooking Oil", amount: 1, unit: "tbsp", key: "oil", isStaple: true },
      { name: "Fresh Lemon Juice", amount: 1, unit: "tsp", key: "lemon", isStaple: false },
      { name: "Fresh Coriander, chopped", amount: 1, unit: "tbsp", key: "coriander", isStaple: false },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Rinse Poha",
        text: "Place poha in a strainer and rinse gently under running water for 30 seconds. Drain completely and let it sit so it softens up without turning mushy.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Roast Peanuts",
        text: "Heat oil in a pan on medium flame. Add peanuts and fry for 2 minutes until crunchy and golden. Transfer peanuts to a small bowl.",
        timerSeconds: 120
      },
      {
        stepNumber: 3,
        title: "Temper Spices & Onions",
        text: "In the same hot oil, add mustard seeds. When they splutter, toss in curry leaves, green chillies, and chopped onions. Sauté for 3-4 minutes until onions turn translucent.",
        timerSeconds: 180
      },
      {
        stepNumber: 4,
        title: "Combine & Steam",
        text: "Lower flame. Add turmeric and salt to the pan. Gently fold in the softened poha and fried peanuts. Sprinkle 1 tbsp water, cover with lid, and steam on low for 2 minutes.",
        timerSeconds: 120
      },
      {
        stepNumber: 5,
        title: "Garnish & Serve",
        text: "Turn off heat. Squeeze fresh lemon juice over the poha, sprinkle fresh coriander, and enjoy hot with a cup of chai!",
        timerSeconds: null
      }
    ],
    studentTip: "Hostel Hack: If you don't have curry leaves or mustard seeds, simple jeera (cumin) and green chillies work just as well!"
  },
  {
    id: "paneer-bhurji",
    title: "Quick Spiced Paneer Bhurji",
    hindiTitle: "पनीर भुर्जी",
    tagline: "High-protein, restaurant-style scrambled paneer ready in 15 mins.",
    category: "lunch",
    image: "assets/bhurji.jpg",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Easy",
    costPerServing: "₹65",
    calories: 340,
    protein: "18g",
    carbs: "8g",
    fat: "22g",
    servingsBase: 1,
    tags: ["High Protein", "Under 15 Mins", "Gym Diet", "Single Pot"],
    equipment: "1 Frying Pan / Tawa",
    ingredients: [
      { name: "Paneer, crumbled with hands", amount: 150, unit: "g", key: "paneer", isStaple: false },
      { name: "Onion, finely chopped", amount: 1, unit: "medium", key: "onion", isStaple: false },
      { name: "Tomato, finely chopped", amount: 1, unit: "medium", key: "tomato", isStaple: false },
      { name: "Green Chilli, slit", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ginger-Garlic Paste", amount: 1, unit: "tsp", key: "ginger garlic", isStaple: false },
      { name: "Butter or Oil", amount: 1, unit: "tbsp", key: "butter", isStaple: true },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Red Chilli Powder", amount: 0.5, unit: "tsp", key: "red chilli powder", isStaple: true },
      { name: "Pav Bhaji Masala (or Garam Masala)", amount: 0.75, unit: "tsp", key: "garam masala", isStaple: true },
      { name: "Fresh Coriander, chopped", amount: 1, unit: "tbsp", key: "coriander", isStaple: false },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sauté Aromatics",
        text: "Melt butter or heat oil in a pan. Add chopped onions, green chillies, and ginger-garlic paste. Sauté on medium flame for 3 minutes until onions turn soft and golden.",
        timerSeconds: 180
      },
      {
        stepNumber: 2,
        title: "Cook Tomatoes & Spices",
        text: "Add chopped tomatoes, turmeric, red chilli powder, pav bhaji masala, and salt. Cook for 3 minutes, gently mashing tomatoes with the spatula until butter starts separating.",
        timerSeconds: 180
      },
      {
        stepNumber: 3,
        title: "Toss Paneer",
        text: "Add the crumbled paneer and 1-2 tbsp warm water (or milk) to keep it juicy. Mix gently and cook on medium flame for just 2 minutes so paneer stays soft.",
        timerSeconds: 120
      },
      {
        stepNumber: 4,
        title: "Finish & Pair",
        text: "Top with chopped fresh coriander. Serve immediately with toasted buttered bread slices, rotis, or pav.",
        timerSeconds: null
      }
    ],
    studentTip: "Secret flavor trick: A pinch of Pav Bhaji masala instead of regular garam masala gives street-style Mumbai taste!"
  },
  {
    id: "moong-dal-khichdi",
    title: "One-Pot Comfort Moong Khichdi",
    hindiTitle: "मूंग दाल खिचड़ी",
    tagline: "The ultimate soothing one-pot comfort meal for sick days or exam cramming.",
    category: "dinner",
    image: "assets/khichdi.jpg",
    prepTime: 5,
    cookTime: 18,
    totalTime: 23,
    difficulty: "Super Easy",
    costPerServing: "₹30",
    calories: 310,
    protein: "12g",
    carbs: "54g",
    fat: "5g",
    servingsBase: 1,
    tags: ["Comfort Food", "Single Pot", "Budget Pick", "Exam Week Brain Food"],
    equipment: "Pressure Cooker or Deep Pot",
    ingredients: [
      { name: "Split Yellow Moong Dal", amount: 0.33, unit: "cup", key: "moong dal", isStaple: false },
      { name: "Rice (any regular variety)", amount: 0.33, unit: "cup", key: "rice", isStaple: false },
      { name: "Water", amount: 2.25, unit: "cups", key: "water", isStaple: true },
      { name: "Desi Ghee or Oil", amount: 1, unit: "tbsp", key: "ghee", isStaple: true },
      { name: "Cumin Seeds (Jeera)", amount: 1, unit: "tsp", key: "cumin", isStaple: true },
      { name: "Ginger, grated", amount: 0.5, unit: "tsp", key: "ginger", isStaple: false },
      { name: "Green Chilli, slit", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Asafoetida (Hing)", amount: 1, unit: "pinch", key: "hing", isStaple: true },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Salt", amount: 0.75, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Wash Dal & Rice",
        text: "Combine moong dal and rice in a bowl. Rinse twice with water and drain well.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Tadka in Cooker / Pot",
        text: "Heat ghee in pressure cooker or deep pot. Add cumin seeds and let them sizzle. Add a pinch of hing, grated ginger, and green chilli. Sauté for 30 seconds.",
        timerSeconds: 30
      },
      {
        stepNumber: 3,
        title: "Add Rice, Dal & Turmeric",
        text: "Add rinsed dal and rice into the pot. Sauté for 1 minute so the grains coat with ghee. Add turmeric and salt.",
        timerSeconds: 60
      },
      {
        stepNumber: 4,
        title: "Pressure Cook / Simmer",
        text: "Pour in 2.25 cups of water. If using a pressure cooker: close lid and cook on medium flame for 3 whistles (approx 8-10 mins). If open pot: cover and simmer for 15-18 mins until soft.",
        timerSeconds: 600
      },
      {
        stepNumber: 5,
        title: "Serve Warm",
        text: "Let pressure release naturally. Open, stir with a spoon for a porridge consistency, and top with an extra spoon of ghee and pickle.",
        timerSeconds: null
      }
    ],
    studentTip: "Need more veggies? Toss in any frozen peas or diced potatoes right before closing the cooker lid."
  },
  {
    id: "besan-chilla",
    title: "Crispy Besan Chilla (Veg Omelette)",
    hindiTitle: "बेसन चीला",
    tagline: "Crisp, savory gram flour pancakes loaded with protein and zero fuss.",
    category: "breakfast",
    image: "assets/chilla.jpg",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Super Easy",
    costPerServing: "₹20",
    calories: 230,
    protein: "10g",
    carbs: "28g",
    fat: "6g",
    servingsBase: 1,
    tags: ["High Protein", "Under 15 Mins", "Budget Pick", "Single Pot"],
    equipment: "1 Non-Stick Tawa or Pan",
    ingredients: [
      { name: "Besan (Gram Flour)", amount: 0.5, unit: "cup", key: "besan", isStaple: false },
      { name: "Onion, finely chopped", amount: 0.5, unit: "medium", key: "onion", isStaple: false },
      { name: "Tomato, finely chopped", amount: 0.5, unit: "medium", key: "tomato", isStaple: false },
      { name: "Green Chilli, finely chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ajwain (Carom Seeds)", amount: 0.25, unit: "tsp", key: "ajwain", isStaple: true },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Red Chilli Powder", amount: 0.25, unit: "tsp", key: "red chilli powder", isStaple: true },
      { name: "Water", amount: 0.35, unit: "cup", key: "water", isStaple: true },
      { name: "Oil for roasting", amount: 1, unit: "tsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Whisk Batter",
        text: "In a bowl, add besan, turmeric, red chilli powder, ajwain (crushed between palms), and salt. Slowly add water and whisk into a smooth pouring batter (like pancake batter).",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Add Veggies",
        text: "Fold in chopped onions, tomatoes, and green chillies into the batter.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Spread on Tawa",
        text: "Heat a tawa on medium flame. Drizzle a few drops of oil. Pour a ladle of batter and spread gently in circular motion from center outwards.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Cook Both Sides",
        text: "Drizzle half tsp oil along the edges. Cook on medium flame for 2.5 minutes until underside is golden brown. Flip and cook other side for 2 minutes.",
        timerSeconds: 150
      },
      {
        stepNumber: 5,
        title: "Serve Crisp",
        text: "Fold in half and serve hot with tomato ketchup or green mint chutney.",
        timerSeconds: null
      }
    ],
    studentTip: "Add a slice of cheese or grated paneer in the middle before folding for an insanely satisfying breakfast wrap!"
  },
  {
    id: "spicy-masala-maggi",
    title: "Hostel Special Masala Maggi",
    hindiTitle: "मसाला मैगी",
    tagline: "Elevated student comfort food with butter, aromatics, and rich street-style masala.",
    category: "snack",
    image: "assets/maggi.jpg",
    prepTime: 3,
    cookTime: 7,
    totalTime: 10,
    difficulty: "Super Easy",
    costPerServing: "₹25",
    calories: 320,
    protein: "7g",
    carbs: "46g",
    fat: "12g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Hostel Friendly", "Budget Pick", "Late Night Fuel"],
    equipment: "1 Small Pan / Kettle / Saucepan",
    ingredients: [
      { name: "Maggi 2-Minute Noodles", amount: 1, unit: "pack", key: "maggi", isStaple: false },
      { name: "Butter or Oil", amount: 1, unit: "tbsp", key: "butter", isStaple: true },
      { name: "Onion, finely diced", amount: 0.5, unit: "medium", key: "onion", isStaple: false },
      { name: "Tomato, finely diced", amount: 0.5, unit: "medium", key: "tomato", isStaple: false },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Red Chilli Powder", amount: 0.25, unit: "tsp", key: "red chilli powder", isStaple: true },
      { name: "Garam Masala or Chaat Masala", amount: 0.25, unit: "tsp", key: "garam masala", isStaple: true },
      { name: "Water", amount: 1.25, unit: "cups", key: "water", isStaple: true },
      { name: "Coriander for garnish", amount: 1, unit: "tsp", key: "coriander", isStaple: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sauté Veggies in Butter",
        text: "Melt half the butter in a pan on medium heat. Sauté diced onions and green chillies for 2 minutes until translucent.",
        timerSeconds: 120
      },
      {
        stepNumber: 2,
        title: "Spice & Tomato Mash",
        text: "Add diced tomatoes, red chilli powder, and extra pinch of garam masala. Cook for 1.5 minutes until tomatoes soften.",
        timerSeconds: 90
      },
      {
        stepNumber: 3,
        title: "Boil Noodles",
        text: "Pour 1.25 cups of water and bring to a rolling boil. Break noodle cake into halves, drop into water along with the Maggi Tastemaker packet.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Simmer to Perfection",
        text: "Cook on medium-high for 2-3 minutes, stirring occasionally until gravy thickens to your favorite saucy or dry consistency.",
        timerSeconds: 180
      },
      {
        stepNumber: 5,
        title: "Top with Butter",
        text: "Transfer to a bowl and top with the remaining pat of cold butter and fresh coriander. Pure late-night bliss!",
        timerSeconds: null
      }
    ],
    studentTip: "Have leftover veggies like peas, corn, or shredded cabbage? Toss them in step 1 to sneak in vitamins effortlessly."
  },
  {
    id: "protein-chana-chaat",
    title: "10-Min Protein Kala Chana Chaat",
    hindiTitle: "चना चाट",
    tagline: "Tangy, crunchy, high-protein snack requiring zero actual cooking if using boiled chana.",
    category: "snack",
    image: "assets/chaat.jpg",
    prepTime: 8,
    cookTime: 2,
    totalTime: 10,
    difficulty: "Super Easy",
    costPerServing: "₹30",
    calories: 220,
    protein: "11g",
    carbs: "34g",
    fat: "4g",
    servingsBase: 1,
    tags: ["High Protein", "Under 15 Mins", "No Cook Option", "Gym Diet"],
    equipment: "1 Mixing Bowl",
    ingredients: [
      { name: "Boiled Black Chana (or Chickpeas)", amount: 1, unit: "cup", key: "chana", isStaple: false },
      { name: "Onion, finely diced", amount: 1, unit: "small", key: "onion", isStaple: false },
      { name: "Tomato, deseeded and diced", amount: 1, unit: "small", key: "tomato", isStaple: false },
      { name: "Cucumber, finely diced", amount: 0.5, unit: "medium", key: "cucumber", isStaple: false },
      { name: "Green Chilli, finely chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Chaat Masala", amount: 0.75, unit: "tsp", key: "chaat masala", isStaple: true },
      { name: "Roasted Cumin Powder (Bhuna Jeera)", amount: 0.5, unit: "tsp", key: "cumin", isStaple: true },
      { name: "Fresh Lemon Juice", amount: 1, unit: "tbsp", key: "lemon", isStaple: false },
      { name: "Fresh Coriander or Mint", amount: 2, unit: "tbsp", key: "coriander", isStaple: false },
      { name: "Salt / Black Salt (Kala Namak)", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Prep Legumes",
        text: "Take boiled black chana or canned chickpeas (room temp or slightly warm). Drain all liquid thoroughly.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Chop Fresh Veggies",
        text: "Finely dice onion, tomato, cucumber, green chilli, and fresh herbs into tiny uniform cubes.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Toss Spices",
        text: "In a mixing bowl, combine chana, diced vegetables, chaat masala, roasted cumin powder, and black salt.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Dress with Lemon",
        text: "Squeeze generous fresh lemon juice over everything. Toss vigorously with two spoons to coat evenly.",
        timerSeconds: null
      },
      {
        stepNumber: 5,
        title: "Enjoy Instantly",
        text: "Serve immediately for maximum crunch. Top with a spoonful of sev or roasted peanuts if handy!",
        timerSeconds: null
      }
    ],
    studentTip: "Meal Prep Win: Boil a big batch of chana on Sunday and store in your hostel fridge for 4 days of instant post-gym chaat."
  },
  {
    id: "aloo-jeera",
    title: "Crispy Dhaba-Style Aloo Jeera",
    hindiTitle: "आलू जीरा",
    tagline: "Golden spiced cumin potatoes that pair flawlessly with rotis, parathas, or bread.",
    category: "lunch",
    image: "assets/hero.jpg",
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    difficulty: "Super Easy",
    costPerServing: "₹20",
    calories: 250,
    protein: "4g",
    carbs: "38g",
    fat: "8g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Budget Pick", "Single Pot", "Hostel Friendly"],
    equipment: "1 Pan or Kadhai",
    ingredients: [
      { name: "Potatoes, boiled and cubed", amount: 2, unit: "medium", key: "potato", isStaple: false },
      { name: "Cumin Seeds (Jeera)", amount: 1.5, unit: "tsp", key: "cumin", isStaple: true },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ginger, julienned or minced", amount: 0.5, unit: "tsp", key: "ginger", isStaple: false },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Red Chilli Powder", amount: 0.5, unit: "tsp", key: "red chilli powder", isStaple: true },
      { name: "Amchur (Dry Mango Powder) or Chaat Masala", amount: 0.5, unit: "tsp", key: "chaat masala", isStaple: true },
      { name: "Oil", amount: 1.5, unit: "tbsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true },
      { name: "Fresh Coriander, chopped", amount: 1, unit: "tbsp", key: "coriander", isStaple: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Pop Cumin Seeds",
        text: "Heat oil in a pan on medium flame. Add cumin seeds and let them splutter and release their deep nutty aroma for 30 seconds.",
        timerSeconds: 30
      },
      {
        stepNumber: 2,
        title: "Aromatics",
        text: "Add minced ginger and slit green chillies. Sauté for 30 seconds until fragrant.",
        timerSeconds: 30
      },
      {
        stepNumber: 3,
        title: "Pan-Fry Potato Cubes",
        text: "Add boiled cubed potatoes. Sauté on medium-high heat for 4-5 minutes, shaking the pan so the edges develop a crisp golden crust.",
        timerSeconds: 240
      },
      {
        stepNumber: 4,
        title: "Coat with Spices",
        text: "Lower flame. Add turmeric, red chilli powder, amchur/chaat masala, and salt. Gently toss to coat all potato cubes without mashing them.",
        timerSeconds: 60
      },
      {
        stepNumber: 5,
        title: "Finish with Fresh Herbs",
        text: "Garnish with fresh coriander. Serve hot with warm rotis, toast, or alongside curd rice.",
        timerSeconds: null
      }
    ],
    studentTip: "Need to boil potatoes fast? Poke them with a fork, cover with a damp paper towel, and microwave for 4-5 minutes!"
  },
  {
    id: "curd-rice",
    title: "Soothing South Indian Curd Rice",
    hindiTitle: "दही चावल (Thayir Sadam)",
    tagline: "Creamy, cooling, probiotic bliss with crunchy mustard-curry leaf tempering.",
    category: "lunch",
    image: "assets/hero.jpg",
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    difficulty: "Super Easy",
    costPerServing: "₹25",
    calories: 280,
    protein: "8g",
    carbs: "42g",
    fat: "7g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Gut Friendly", "Budget Pick", "Exam Week Brain Food"],
    equipment: "1 Small Tadka Pan & Bowl",
    ingredients: [
      { name: "Cooked Soft Rice", amount: 1, unit: "cup", key: "rice", isStaple: false },
      { name: "Fresh Curd (Yogurt)", amount: 0.75, unit: "cup", key: "curd", isStaple: false },
      { name: "Milk", amount: 2, unit: "tbsp", key: "milk", isStaple: false },
      { name: "Mustard Seeds", amount: 0.5, unit: "tsp", key: "mustard seeds", isStaple: true },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ginger, finely minced", amount: 0.5, unit: "tsp", key: "ginger", isStaple: false },
      { name: "Curry Leaves", amount: 6, unit: "leaves", key: "curry leaves", isStaple: false },
      { name: "Oil or Ghee", amount: 1, unit: "tsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mash Rice",
        text: "Take warm or room-temperature cooked rice in a bowl. Lightly mash with the back of a fork so it becomes soft.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Fold Curd & Milk",
        text: "Add fresh curd, 2 tbsp milk (keeps it from turning sour), minced ginger, and salt. Mix into a creamy texture.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Make Crunchy Tadka",
        text: "Heat 1 tsp oil in a small tadka pan. Add mustard seeds. When they crackle, add curry leaves and chopped green chilli. Fry for 20 seconds.",
        timerSeconds: 20
      },
      {
        stepNumber: 4,
        title: "Pour & Enjoy",
        text: "Pour the sizzling tadka over the curd rice. Stir well and eat chilled or at room temperature with pickle.",
        timerSeconds: null
      }
    ],
    studentTip: "Leftover mess/hostel rice? This is the #1 tastiest and fastest way to repurpose it in under 5 minutes."
  },
  {
    id: "quick-masala-upma",
    title: "15-Min Savory Rava Upma",
    hindiTitle: "रवा उपमा",
    tagline: "Fluffy, savory semolina with crunchy peanuts, ginger, and curry leaves.",
    category: "breakfast",
    image: "assets/poha.jpg",
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    difficulty: "Easy",
    costPerServing: "₹25",
    calories: 290,
    protein: "7g",
    carbs: "48g",
    fat: "8g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Budget Pick", "Single Pot"],
    equipment: "1 Pan / Kadhai",
    ingredients: [
      { name: "Semolina (Rava / Sooji)", amount: 0.5, unit: "cup", key: "rava", isStaple: false },
      { name: "Onion, finely chopped", amount: 0.5, unit: "medium", key: "onion", isStaple: false },
      { name: "Peanuts or Cashews", amount: 1.5, unit: "tbsp", key: "peanuts", isStaple: false },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ginger, finely minced", amount: 0.5, unit: "tsp", key: "ginger", isStaple: false },
      { name: "Mustard Seeds", amount: 0.5, unit: "tsp", key: "mustard seeds", isStaple: true },
      { name: "Curry Leaves", amount: 6, unit: "leaves", key: "curry leaves", isStaple: false },
      { name: "Water", amount: 1.25, unit: "cups", key: "water", isStaple: true },
      { name: "Ghee or Oil", amount: 1, unit: "tbsp", key: "ghee", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Dry Roast Rava",
        text: "Dry roast rava in a pan on medium-low flame for 3-4 minutes until warm and fragrant (do not let it turn dark). Transfer to a plate.",
        timerSeconds: 180
      },
      {
        stepNumber: 2,
        title: "Tempering & Onions",
        text: "Heat oil or ghee in the pan. Fry peanuts until crunchy (1-2 mins). Add mustard seeds, curry leaves, ginger, green chillies, and onions. Sauté for 2 mins.",
        timerSeconds: 120
      },
      {
        stepNumber: 3,
        title: "Boil Water",
        text: "Add 1.25 cups water and salt. Bring to a rolling boil.",
        timerSeconds: 90
      },
      {
        stepNumber: 4,
        title: "Pour & Fluff",
        text: "Lower flame to low. Slowly stream in roasted rava with one hand while constantly stirring with the other to avoid lumps. Cover with lid and cook for 2 minutes.",
        timerSeconds: 120
      },
      {
        stepNumber: 5,
        title: "Rest & Serve",
        text: "Turn off heat. Drizzle half tsp ghee on top. Let it rest covered for 2 minutes, then fluff with fork and serve.",
        timerSeconds: 120
      }
    ],
    studentTip: "Always roast your rava first! Buying pre-roasted sooji saves you 4 minutes of morning prep time."
  },
  {
    id: "quick-dal-tadka",
    title: "Express Garlic Dal Tadka",
    hindiTitle: "दाल तड़का",
    tagline: "Golden protein-packed yellow lentils with sizzling garlic, cumin, and red chilli tempering.",
    category: "dinner",
    image: "assets/khichdi.jpg",
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    difficulty: "Easy",
    costPerServing: "₹28",
    calories: 270,
    protein: "14g",
    carbs: "38g",
    fat: "6g",
    servingsBase: 1,
    tags: ["High Protein", "Budget Pick", "Comfort Food"],
    equipment: "Small Cooker or Pot & Tadka Pan",
    ingredients: [
      { name: "Toor Dal or Yellow Moong Dal", amount: 0.5, unit: "cup", key: "toor dal", isStaple: false },
      { name: "Tomato, chopped", amount: 1, unit: "medium", key: "tomato", isStaple: false },
      { name: "Garlic, finely chopped", amount: 4, unit: "cloves", key: "garlic", isStaple: false },
      { name: "Cumin Seeds (Jeera)", amount: 1, unit: "tsp", key: "cumin", isStaple: true },
      { name: "Dry Red Chilli (or Green Chilli)", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Red Chilli Powder", amount: 0.5, unit: "tsp", key: "red chilli powder", isStaple: true },
      { name: "Ghee or Oil", amount: 1.5, unit: "tbsp", key: "ghee", isStaple: true },
      { name: "Salt", amount: 0.75, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Boil Lentils",
        text: "Pressure cook rinsed dal with 1.5 cups water, turmeric, and half tsp salt for 3 whistles (approx 8 mins) until completely mushy.",
        timerSeconds: 480
      },
      {
        stepNumber: 2,
        title: "Whisk Dal",
        text: "Open cooker and whisk dal with a ladle until smooth. Add half cup water if too thick and bring to a simmer.",
        timerSeconds: 60
      },
      {
        stepNumber: 3,
        title: "Aromatic Garlic Tadka",
        text: "In a small pan, heat ghee. Add cumin seeds, sliced garlic, and dry red chilli. Fry on medium flame until garlic turns golden brown and fragrant (2 mins).",
        timerSeconds: 120
      },
      {
        stepNumber: 4,
        title: "Spicy Sizzle",
        text: "Add chopped tomatoes and red chilli powder into the tadka. Sauté for 1 minute until tomatoes soften.",
        timerSeconds: 60
      },
      {
        stepNumber: 5,
        title: "Combine & Cover",
        text: "Pour the sizzling tadka directly into the simmering dal. Cover immediately with lid to lock in the heavenly smoky aroma!",
        timerSeconds: null
      }
    ],
    studentTip: "Using split yellow Moong Dal instead of Toor Dal cooks in almost half the time and requires no soaking."
  },
  {
    id: "besan-bread-toast",
    title: "Indian Savory Bread Besan Toast",
    hindiTitle: "बेसन ब्रेड टोस्ट",
    tagline: "The 10-minute eggless French toast spiced with onions, chillies, and coriander.",
    category: "breakfast",
    image: "assets/chilla.jpg",
    prepTime: 4,
    cookTime: 8,
    totalTime: 12,
    difficulty: "Super Easy",
    costPerServing: "₹20",
    calories: 260,
    protein: "9g",
    carbs: "36g",
    fat: "8g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Budget Pick", "Single Pot"],
    equipment: "1 Non-Stick Tawa or Pan",
    ingredients: [
      { name: "Bread Slices (White or Brown)", amount: 2, unit: "slices", key: "bread", isStaple: false },
      { name: "Besan (Gram Flour)", amount: 0.33, unit: "cup", key: "besan", isStaple: false },
      { name: "Onion, finely chopped", amount: 2, unit: "tbsp", key: "onion", isStaple: false },
      { name: "Tomato, finely chopped", amount: 2, unit: "tbsp", key: "tomato", isStaple: false },
      { name: "Green Chilli, finely chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Ajwain (Carom Seeds)", amount: 0.25, unit: "tsp", key: "ajwain", isStaple: true },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Water", amount: 0.25, unit: "cup", key: "water", isStaple: true },
      { name: "Oil or Butter", amount: 1, unit: "tbsp", key: "butter", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mix Batter",
        text: "In a shallow wide bowl, mix besan, water, turmeric, ajwain, and salt into a smooth dipping batter.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Stir in Finely Diced Veggies",
        text: "Add chopped onions, tomatoes, and green chillies into the batter.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Dip & Pan-Fry",
        text: "Heat butter or oil on a tawa. Quickly dip a bread slice into the batter on both sides, scoop up some veggies onto the bread, and place onto the hot pan.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Toast to Golden Crisp",
        text: "Cook on medium heat for 2 minutes on each side until crisp and golden brown.",
        timerSeconds: 120
      },
      {
        stepNumber: 5,
        title: "Serve Diagonal Cut",
        text: "Slice diagonally and serve piping hot with ketchup and hot chai.",
        timerSeconds: null
      }
    ],
    studentTip: "Don't soak bread too long in the batter or it becomes soggy. Just a quick 2-second dip per side does the trick!"
  },
  {
    id: "quick-masala-oats",
    title: "10-Min Desi Masala Oats",
    hindiTitle: "मसाला ओट्स",
    tagline: "Healthy, fiber-loaded warm oats infused with cumin, onions, tomatoes, and spices.",
    category: "dinner",
    image: "assets/maggi.jpg",
    prepTime: 3,
    cookTime: 7,
    totalTime: 10,
    difficulty: "Super Easy",
    costPerServing: "₹22",
    calories: 210,
    protein: "7g",
    carbs: "35g",
    fat: "4g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Budget Pick", "High Fiber", "Single Pot"],
    equipment: "1 Small Pot / Pan",
    ingredients: [
      { name: "Rolled or Quick Oats", amount: 0.5, unit: "cup", key: "oats", isStaple: false },
      { name: "Onion, finely chopped", amount: 0.5, unit: "medium", key: "onion", isStaple: false },
      { name: "Tomato, chopped", amount: 0.5, unit: "medium", key: "tomato", isStaple: false },
      { name: "Green Chilli, chopped", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Cumin Seeds (Jeera)", amount: 0.5, unit: "tsp", key: "cumin", isStaple: true },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Garam Masala", amount: 0.25, unit: "tsp", key: "garam masala", isStaple: true },
      { name: "Water", amount: 1.25, unit: "cups", key: "water", isStaple: true },
      { name: "Oil", amount: 1, unit: "tsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sauté Spices & Veggies",
        text: "Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onions and green chilli; sauté for 1.5 minutes until onions soften.",
        timerSeconds: 90
      },
      {
        stepNumber: 2,
        title: "Toss Tomatoes & Spices",
        text: "Add chopped tomatoes, turmeric, garam masala, and salt. Cook for 1 minute until tomatoes soften.",
        timerSeconds: 60
      },
      {
        stepNumber: 3,
        title: "Simmer Oats",
        text: "Add oats and pour in 1.25 cups of water. Stir well and bring to a boil.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Cook to Porridge",
        text: "Simmer on low-medium flame for 3-4 minutes, stirring occasionally until thick and creamy.",
        timerSeconds: 200
      },
      {
        stepNumber: 5,
        title: "Garnish",
        text: "Top with a squeeze of fresh lemon and chopped coriander. Serve steaming hot.",
        timerSeconds: null
      }
    ],
    studentTip: "Much cheaper and healthier than pre-packaged store masala oats packets, and takes almost the exact same time."
  },
  {
    id: "tangy-lemon-rice",
    title: "Zesty South Indian Lemon Rice",
    hindiTitle: "नींबू चावल (Chitranna)",
    tagline: "Bright, fragrant turmeric-infused rice with crunchy peanuts and tangy lemon.",
    category: "lunch",
    image: "assets/poha.jpg",
    prepTime: 4,
    cookTime: 8,
    totalTime: 12,
    difficulty: "Super Easy",
    costPerServing: "₹22",
    calories: 290,
    protein: "6g",
    carbs: "46g",
    fat: "8g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Budget Pick", "Single Pot"],
    equipment: "1 Pan / Kadhai",
    ingredients: [
      { name: "Cooked Rice (leftover is best!)", amount: 1.5, unit: "cups", key: "rice", isStaple: false },
      { name: "Raw Peanuts", amount: 2, unit: "tbsp", key: "peanuts", isStaple: false },
      { name: "Mustard Seeds", amount: 0.5, unit: "tsp", key: "mustard seeds", isStaple: true },
      { name: "Curry Leaves", amount: 6, unit: "leaves", key: "curry leaves", isStaple: false },
      { name: "Green Chilli, slit", amount: 1, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Fresh Lemon Juice", amount: 1.5, unit: "tbsp", key: "lemon", isStaple: false },
      { name: "Oil", amount: 1, unit: "tbsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Roast Peanuts",
        text: "Heat oil in a pan on medium flame. Fry peanuts for 2 minutes until golden brown and super crunchy.",
        timerSeconds: 120
      },
      {
        stepNumber: 2,
        title: "Temper Tadka",
        text: "Add mustard seeds to the hot oil. When they crackle, toss in curry leaves, slit green chillies, and turmeric powder. Stir for 20 seconds.",
        timerSeconds: 20
      },
      {
        stepNumber: 3,
        title: "Fold Rice",
        text: "Add the cooked rice and salt to the pan. Turn flame to low and gently fold until the rice turns evenly radiant yellow.",
        timerSeconds: 90
      },
      {
        stepNumber: 4,
        title: "Add Lemon Juice Off Heat",
        text: "Turn off heat. Squeeze fresh lemon juice over the rice and give one final gentle toss.",
        timerSeconds: null
      }
    ],
    studentTip: "Never cook lemon juice on direct high heat or it can turn slightly bitter. Always stir in after turning off the stove."
  },
  {
    id: "sweet-corn-cheese-toast",
    title: "Café-Style Corn & Cheese Toast",
    hindiTitle: "कॉर्न चीज़ टोस्ट",
    tagline: "Crispy pan-toasted bread crowned with sweet corn, spices, and gooey cheese.",
    category: "snack",
    image: "assets/bhurji.jpg",
    prepTime: 4,
    cookTime: 6,
    totalTime: 10,
    difficulty: "Super Easy",
    costPerServing: "₹35",
    calories: 270,
    protein: "8g",
    carbs: "32g",
    fat: "11g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "Late Night Fuel", "Single Pot"],
    equipment: "1 Pan / Tawa with Lid",
    ingredients: [
      { name: "Bread Slices", amount: 2, unit: "slices", key: "bread", isStaple: false },
      { name: "Sweet Corn (Boiled or canned)", amount: 0.33, unit: "cup", key: "corn", isStaple: false },
      { name: "Cheese Slice or Grated Cheese", amount: 1, unit: "slice", key: "cheese", isStaple: false },
      { name: "Onion, finely chopped", amount: 1, unit: "tbsp", key: "onion", isStaple: false },
      { name: "Green Chilli, finely chopped", amount: 0.5, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Butter", amount: 1, unit: "tbsp", key: "butter", isStaple: true },
      { name: "Chaat Masala or Oregano", amount: 0.25, unit: "tsp", key: "chaat masala", isStaple: true },
      { name: "Black Pepper", amount: 1, unit: "pinch", key: "pepper", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mix Topping",
        text: "In a cup, toss sweet corn, chopped onions, green chilli, black pepper, and chaat masala together.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Assemble Bread",
        text: "Butter one side of each bread slice. On the unbuttered side, spread the corn mixture and top with cheese.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Tawa Melt",
        text: "Place bread on a warm tawa on low heat. Cover with a lid for 3-4 minutes so the bottom crisps up while steam melts the cheese perfectly without an oven!",
        timerSeconds: 180
      },
      {
        stepNumber: 4,
        title: "Cut & Serve",
        text: "Slice and serve crunchy with tomato ketchup.",
        timerSeconds: null
      }
    ],
    studentTip: "Putting a lid on the pan is the magic secret that melts cheese on a stovetop just like an oven!"
  },
  {
    id: "quick-tomato-rice",
    title: "Spicy One-Pot Tomato Rice",
    hindiTitle: "टमाटर भात (Thakkali Sadam)",
    tagline: "Tangy, flavorful spiced rice loaded with tomatoes, onions, and warming whole spices.",
    category: "dinner",
    image: "assets/hero.jpg",
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    difficulty: "Easy",
    costPerServing: "₹25",
    calories: 290,
    protein: "6g",
    carbs: "50g",
    fat: "7g",
    servingsBase: 1,
    tags: ["Budget Pick", "Single Pot", "Comfort Food"],
    equipment: "1 Pan or Cooker",
    ingredients: [
      { name: "Cooked Rice", amount: 1.5, unit: "cups", key: "rice", isStaple: false },
      { name: "Ripe Tomatoes, chopped", amount: 2, unit: "medium", key: "tomato", isStaple: false },
      { name: "Onion, sliced", amount: 1, unit: "medium", key: "onion", isStaple: false },
      { name: "Ginger-Garlic Paste", amount: 0.5, unit: "tsp", key: "ginger garlic", isStaple: false },
      { name: "Mustard Seeds", amount: 0.5, unit: "tsp", key: "mustard seeds", isStaple: true },
      { name: "Turmeric Powder", amount: 0.25, unit: "tsp", key: "turmeric", isStaple: true },
      { name: "Sambar Powder or Garam Masala", amount: 1, unit: "tsp", key: "garam masala", isStaple: true },
      { name: "Oil", amount: 1, unit: "tbsp", key: "oil", isStaple: true },
      { name: "Salt", amount: 0.5, unit: "tsp", key: "salt", isStaple: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sizzle Mustard & Onions",
        text: "Heat oil in a pan. Add mustard seeds. When they pop, add sliced onions and sauté for 3 minutes until soft.",
        timerSeconds: 180
      },
      {
        stepNumber: 2,
        title: "Tomato Masala Gravy",
        text: "Add ginger-garlic paste and chopped tomatoes. Add turmeric, sambar/garam masala, and salt. Cook for 4 minutes until tomatoes break down into a luscious gravy.",
        timerSeconds: 240
      },
      {
        stepNumber: 3,
        title: "Toss with Rice",
        text: "Add cooked rice into the tomato paste. Mix gently until every grain is infused with the rich red spice blend.",
        timerSeconds: 120
      },
      {
        stepNumber: 4,
        title: "Steam & Serve",
        text: "Cover and let steam on low heat for 2 minutes. Serve hot with potato chips or raita.",
        timerSeconds: 120
      }
    ],
    studentTip: "Sambar powder gives authentic South Indian wedding hall aroma to tomato rice with zero extra effort."
  },
  {
    id: "sukha-bhel",
    title: "5-Min Hostel Sukha Bhel Puri",
    hindiTitle: "सूखा भेल",
    tagline: "The legendary street snack with zero cooking, zero fuel, and 100% crunchy delight.",
    category: "snack",
    image: "assets/chaat.jpg",
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    difficulty: "Super Easy",
    costPerServing: "₹15",
    calories: 180,
    protein: "4g",
    carbs: "32g",
    fat: "4g",
    servingsBase: 1,
    tags: ["Under 15 Mins", "No Cook Option", "Budget Pick", "Hostel Friendly"],
    equipment: "1 Large Bowl",
    ingredients: [
      { name: "Puffed Rice (Murmura / Kurmura)", amount: 1.5, unit: "cups", key: "murmura", isStaple: false },
      { name: "Sev (Crispy gram flour vermicelli)", amount: 3, unit: "tbsp", key: "sev", isStaple: false },
      { name: "Roasted Peanuts", amount: 2, unit: "tbsp", key: "peanuts", isStaple: false },
      { name: "Onion, finely chopped", amount: 0.5, unit: "medium", key: "onion", isStaple: false },
      { name: "Tomato, finely chopped", amount: 0.5, unit: "medium", key: "tomato", isStaple: false },
      { name: "Green Chilli, minced", amount: 0.5, unit: "piece", key: "green chilli", isStaple: false },
      { name: "Chaat Masala", amount: 0.5, unit: "tsp", key: "chaat masala", isStaple: true },
      { name: "Fresh Lemon Juice", amount: 1, unit: "tsp", key: "lemon", isStaple: false },
      { name: "Fresh Coriander, chopped", amount: 1, unit: "tbsp", key: "coriander", isStaple: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Toss Dry Crunchies",
        text: "In a large bowl, add puffed rice, sev, and roasted peanuts.",
        timerSeconds: null
      },
      {
        stepNumber: 2,
        title: "Add Fresh Veggies",
        text: "Toss in chopped onions, tomatoes, and minced green chillies.",
        timerSeconds: null
      },
      {
        stepNumber: 3,
        title: "Season & Toss",
        text: "Sprinkle chaat masala, squeeze lemon juice, and toss vigorously with a spoon for 20 seconds.",
        timerSeconds: null
      },
      {
        stepNumber: 4,
        title: "Eat Immediately",
        text: "Garnish with coriander and eat right away while the puffed rice is crispy!",
        timerSeconds: null
      }
    ],
    studentTip: "Keep murmura in an airtight container so it stays crunchy. If it ever goes soft, dry-roast in a warm pan for 60 seconds."
  }
];

const PANTRY_COMMON_INGREDIENTS = [
  { key: "onion", label: "Onion", icon: "🧅", category: "produce" },
  { key: "potato", label: "Potato", icon: "🥔", category: "produce" },
  { key: "tomato", label: "Tomato", icon: "🍅", category: "produce" },
  { key: "green chilli", label: "Green Chilli", icon: "🌶️", category: "produce" },
  { key: "ginger", label: "Ginger", icon: "🫚", category: "produce" },
  { key: "garlic", label: "Garlic", icon: "🧄", category: "produce" },
  { key: "coriander", label: "Coriander", icon: "🌿", category: "produce" },
  { key: "lemon", label: "Lemon", icon: "🍋", category: "produce" },
  { key: "cucumber", label: "Cucumber", icon: "🥒", category: "produce" },
  { key: "poha", label: "Poha (Flattened rice)", icon: "🥣", category: "pantry" },
  { key: "rice", label: "Rice", icon: "🍚", category: "pantry" },
  { key: "maggi", label: "Maggi Noodles", icon: "🍜", category: "pantry" },
  { key: "bread", label: "Bread", icon: "🍞", category: "pantry" },
  { key: "besan", label: "Besan (Gram flour)", icon: "🌾", category: "pantry" },
  { key: "rava", label: "Rava / Sooji", icon: "🥣", category: "pantry" },
  { key: "oats", label: "Oats", icon: "🥣", category: "pantry" },
  { key: "moong dal", label: "Moong Dal", icon: "🍲", category: "pantry" },
  { key: "chana", label: "Boiled Chana / Chickpeas", icon: "🧆", category: "pantry" },
  { key: "paneer", label: "Paneer", icon: "🧀", category: "dairy" },
  { key: "curd", label: "Curd / Dahi", icon: "🥛", category: "dairy" },
  { key: "butter", label: "Butter", icon: "🧈", category: "dairy" },
  { key: "cheese", label: "Cheese", icon: "🧀", category: "dairy" },
  { key: "peanuts", label: "Peanuts", icon: "🥜", category: "pantry" },
  { key: "corn", label: "Sweet Corn", icon: "🌽", category: "produce" },
  { key: "sev", label: "Sev / Bhujia", icon: "🥢", category: "pantry" },
  { key: "murmura", label: "Murmura (Puffed rice)", icon: "🍿", category: "pantry" }
];


// ==========================================
// Module: js/modules/storage.js
// ==========================================
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

const Storage = {
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


// ==========================================
// Module: js/modules/audio.js
// ==========================================
/**
 * QuickBite - Audio Notification Engine
 * Uses Web Audio API to create gentle kitchen timer beeps and completion chimes
 * Zero external mp3 dependencies, works completely offline
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Soft button click feedback
  playTick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio might be blocked until user gesture, ignore silently
    }
  }

  // Timer complete chime (3-tone melodic arpeggio)
  playTimerDone() {
    try {
      this.init();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const noteDuration = 0.18;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const startTime = this.ctx.currentTime + idx * noteDuration;
        const endTime = startTime + noteDuration * 1.5;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, endTime);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(endTime);
      });
    } catch (e) {
      console.warn("Audio playback failed", e);
    }
  }
}

const Sound = new AudioEngine();


// ==========================================
// Module: js/modules/timer.js
// ==========================================
/**
 * QuickBite - Cooking Timer Module
 * Handles background countdown, visual progress, audio alarms, presets, and floating widget
 */

class CookingTimer {
  constructor() {
    this.totalSeconds = 300; // default 5 mins
    this.remainingSeconds = 300;
    this.isRunning = false;
    this.timerId = null;
    this.label = "Cooking Timer";
    this.subscribers = new Set();
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this.getState());
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = this.getState();
    this.subscribers.forEach(cb => cb(state));
  }

  getState() {
    return {
      totalSeconds: this.totalSeconds,
      remainingSeconds: this.remainingSeconds,
      isRunning: this.isRunning,
      label: this.label,
      formattedTime: this.formatTime(this.remainingSeconds),
      progressRatio: this.totalSeconds > 0 ? (this.remainingSeconds / this.totalSeconds) : 0
    };
  }

  formatTime(totalSecs) {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  setDuration(seconds, label = "Cooking Timer") {
    this.pause();
    this.totalSeconds = Math.max(1, seconds);
    this.remainingSeconds = this.totalSeconds;
    this.label = label;
    this.notify();
  }

  start() {
    if (this.isRunning) return;
    if (this.remainingSeconds <= 0) {
      this.remainingSeconds = this.totalSeconds;
    }
    this.isRunning = true;
    Sound.playTick();

    this.timerId = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds -= 1;
        this.notify();

        if (this.remainingSeconds === 0) {
          this.handleComplete();
        }
      }
    }, 1000);

    this.notify();
  }

  pause() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
    this.notify();
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.notify();
  }

  addMinute() {
    this.totalSeconds += 60;
    this.remainingSeconds += 60;
    this.notify();
  }

  handleComplete() {
    this.pause();
    Sound.playTimerDone();

    // Trigger visual notification banner
    window.dispatchEvent(new CustomEvent("quickbite:timer-done", {
      detail: { label: this.label }
    }));
  }
}

const Timer = new CookingTimer();


// ==========================================
// Module: js/modules/pantry.js
// ==========================================
/**
 * QuickBite - Ingredient-Based Recipe Matcher (Pantry Engine)
 * Matches hostel/student ingredients with Indian recipes, prioritizing what can be cooked immediately.
 */


class PantryMatcher {
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

const Pantry = new PantryMatcher();


// ==========================================
// Module: js/modules/planner.js
// ==========================================
/**
 * QuickBite - Weekly Meal Planner & Smart Grocery Exporter
 * Manages 7-day Indian student meal plan and aggregates shopping list
 */


const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const MEAL_TYPES = [
  { id: "breakfast", label: "Breakfast", icon: "☀️", time: "Morning" },
  { id: "lunch", label: "Lunch", icon: "🍛", time: "Afternoon" },
  { id: "dinner", label: "Dinner", icon: "🌙", time: "Night" }
];

class MealPlanner {
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

const Planner = new MealPlanner();


// ==========================================
// Module: js/modules/modal.js
// ==========================================
/**
 * QuickBite - Recipe Detail Modal & Step-by-Step Cooking Assistant
 */




class ModalController {
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

const Modal = new ModalController();


// ==========================================
// Module: js/app.js
// ==========================================
/**
 * QuickBite - Main Application Controller
 * Orchestrates views, search & filtering, pantry engine, meal planner, timer, and theme
 */






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



  // Safe Boot Trigger
  function boot() {
    if (window.__quickBiteInitialized) return;
    window.__quickBiteInitialized = true;
    const app = new QuickBiteApp();
    app.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
