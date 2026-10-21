/**
 * QuickBite - Curated Indian Vegetarian Recipes for College Students
 * Fast (15-30 mins), Budget-Friendly (₹15-₹65 per serving), High Flavor
 */

export const RECIPES = [
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

export const PANTRY_COMMON_INGREDIENTS = [
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
