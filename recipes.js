/**
 * Comprehensive Recipe Dataset for US/CA Kitchens
 * Tailored with authentic North American measurements, timing, step instructions,
 * nutritional facts, chef tips, and scalable unit conversions.
 */

const RECIPES = [
  {
    id: "bread-recipe",
    queryKeywords: ["bread recipe", "artisan bread", "sourdough", "crusty bread", "homemade bread"],
    title: "Classic Crusty Artisan Homemade Bread",
    category: "Bakery & Sweets",
    tags: ["Bakery Standard", "Beginner Friendly", "4 Ingredients", "US Classic"],
    prepTime: "15 mins",
    cookTime: "45 mins",
    totalTime: "3 hrs (includes proofing)",
    servings: 8,
    calories: 180,
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 342,
    image: "images/bread.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    description: "No kneading required! Golden crust, airy open crumb, and deep flavor. Perfect for US & Canadian home bakers using standard Dutch ovens.",
    nutrition: {
      calories: "180 kcal",
      totalFat: "1g",
      satFat: "0.2g",
      sodium: "380mg",
      carbs: "36g",
      fiber: "2g",
      sugars: "0.5g",
      protein: "6g"
    },
    ingredients: [
      { name: "All-purpose flour or Bread flour (King Arthur / Robin Hood)", imperial: { amount: 3.25, unit: "cups" }, metric: { amount: 410, unit: "g" } },
      { name: "Instant yeast or Active dry yeast", imperial: { amount: 2, unit: "tsp" }, metric: { amount: 7, unit: "g" } },
      { name: "Fine sea salt or Kosher salt (Morton / Diamond Crystal)", imperial: { amount: 1.5, unit: "tsp" }, metric: { amount: 9, unit: "g" } },
      { name: "Warm water (105°F - 110°F / 40°C - 43°C)", imperial: { amount: 1.5, unit: "cups" }, metric: { amount: 355, unit: "ml" } }
    ],
    steps: [
      { step: 1, title: "Mix Dry Ingredients", text: "In a large mixing bowl, whisk together the flour, instant yeast, and kosher salt.", timer: null },
      { step: 2, title: "Combine & Form Dough", text: "Pour warm water into the flour mixture. Stir with a wooden spoon or spatula until a shaggy, wet dough forms (about 1 minute).", timer: null },
      { step: 3, title: "First Rise (Proofing)", text: "Cover the bowl tightly with plastic wrap or a damp kitchen towel. Allow dough to rest at warm room temperature until doubled in size.", timer: 120 }, // 120 mins
      { step: 4, title: "Preheat Dutch Oven", text: "Place a 5-6 quart Dutch oven with lid inside the oven. Preheat oven to 450°F (230°C) for at least 30 minutes before baking.", timer: 30 },
      { step: 5, title: "Shape & Score", text: "Turn dough onto a lightly floured piece of parchment paper. Gently shape into a round loaf. Dust top with flour and score a deep 1/2-inch slash across the center using a sharp blade.", timer: null },
      { step: 6, title: "Bake Covered", text: "Carefully transfer parchment paper with dough into the scorching hot Dutch oven. Cover with lid and bake.", timer: 30 },
      { step: 7, title: "Bake Uncovered for Crust", text: "Remove the lid carefully. Continue baking uncovered until crust is deep golden brown and crisp.", timer: 15 },
      { step: 8, title: "Cool & Slice", text: "Transfer loaf to a wire cooling rack. Allow to cool completely (at least 30-45 minutes) before slicing to preserve texture.", timer: 30 }
    ],
    tips: [
      "For US bakers, King Arthur Unbleached Bread Flour gives superior chewiness; Canadian bakers can use Robin Hood All-Purpose as Canadian wheat naturally has high protein (13%+).",
      "Always let the bread cool before slicing; cutting into hot bread traps steam and makes the interior gummy."
    ]
  },
  {
    id: "cookie-recipe",
    queryKeywords: ["cookie recipe", "butter cookies", "sugar cookies", "bakery cookies", "simple cookies"],
    title: "Bakery-Style Soft Butter Sugar Cookies",
    category: "Bakery & Sweets",
    tags: ["Kid Favorite", "Quick Prep", "Holiday Classic", "US Classic"],
    prepTime: "15 mins",
    cookTime: "10 mins",
    totalTime: "45 mins",
    servings: 24,
    calories: 140,
    difficulty: "Easy",
    rating: 4.8,
    reviewsCount: 289,
    image: "images/cookie.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
    description: "Melt-in-your-mouth butter sugar cookies with crisp edges and soft chewy centers. A staple for US & Canadian holiday baking and weekday treats.",
    nutrition: {
      calories: "140 kcal",
      totalFat: "7g",
      satFat: "4.5g",
      sodium: "110mg",
      carbs: "18g",
      fiber: "0.5g",
      sugars: "10g",
      protein: "1.5g"
    },
    ingredients: [
      { name: "Unsalted butter (softened at room temp)", imperial: { amount: 1, unit: "cup (2 sticks)" }, metric: { amount: 226, unit: "g" } },
      { name: "Granulated white sugar", imperial: { amount: 1.25, unit: "cups" }, metric: { amount: 250, unit: "g" } },
      { name: "Large eggs (room temperature)", imperial: { amount: 2, unit: "large" }, metric: { amount: 2, unit: "large" } },
      { name: "Pure vanilla extract (Nielsen-Massey or Club House)", imperial: { amount: 2, unit: "tsp" }, metric: { amount: 10, unit: "ml" } },
      { name: "All-purpose flour (sifted)", imperial: { amount: 2.75, unit: "cups" }, metric: { amount: 345, unit: "g" } },
      { name: "Baking powder", imperial: { amount: 1, unit: "tsp" }, metric: { amount: 4, unit: "g" } },
      { name: "Fine salt", imperial: { amount: 0.5, unit: "tsp" }, metric: { amount: 3, unit: "g" } },
      { name: "Coarse sparkling sugar (optional topping)", imperial: { amount: 3, unit: "tbsp" }, metric: { amount: 40, unit: "g" } }
    ],
    steps: [
      { step: 1, title: "Cream Butter & Sugar", text: "In a stand mixer fitted with paddle attachment or large bowl, cream butter and sugar on medium-high speed until light, fluffy, and pale yellow.", timer: 4 },
      { step: 2, title: "Add Wet Ingredients", text: "Beat in eggs one at a time, followed by pure vanilla extract until fully incorporated.", timer: 2 },
      { step: 3, title: "Combine Dry Ingredients", text: "Whisk flour, baking powder, and salt in a separate bowl. Gradually add to wet ingredients on low speed until dough just comes together.", timer: 2 },
      { step: 4, title: "Chill Dough", text: "Wrap dough in plastic wrap and chill in refrigerator for 30 minutes. This prevents spreading and guarantees thick cookies.", timer: 30 },
      { step: 5, title: "Roll & Preheat", text: "Preheat oven to 350°F (175°C). Line two large baking sheets with parchment paper. Scoop 1.5-inch balls and roll in coarse sugar.", timer: 5 },
      { step: 6, title: "Bake to Perfection", text: "Space dough balls 2 inches apart on prepared sheets. Bake until edges are lightly golden while centers remain soft.", timer: 10 },
      { step: 7, title: "Cooling", text: "Cool on baking sheet for 5 minutes, then transfer to wire cooling rack.", timer: 5 }
    ],
    tips: [
      "Use high-quality European-style butter (like Plugra or Kerrygold in US/Lactantia in CA) for richer flavor.",
      "Do not overbake! Cookies will look slightly underdone in the center when pulled out, but set firm as they cool."
    ]
  },
  {
    id: "banana-bread-recipe",
    queryKeywords: ["banana bread recipe", "banana bread", "moist banana bread", "chocolate chip banana bread"],
    title: "Ultimate Moist Chocolate Chip Banana Bread",
    category: "Bakery & Sweets",
    tags: ["High Rated", "Comfort Food", "Kid Favorite", "US Classic"],
    prepTime: "15 mins",
    cookTime: "55 mins",
    totalTime: "1 hr 10 mins",
    servings: 10,
    calories: 290,
    difficulty: "Easy",
    rating: 5.0,
    reviewsCount: 512,
    image: "images/banana_bread.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1000&q=80",
    description: "The #1 requested banana bread across US & Canada. Packed with overripe bananas, Greek yogurt for ultra-moisture, and semi-sweet chocolate chunks.",
    nutrition: {
      calories: "290 kcal",
      totalFat: "11g",
      satFat: "6g",
      sodium: "220mg",
      carbs: "45g",
      fiber: "3g",
      sugars: "24g",
      protein: "5g"
    },
    ingredients: [
      { name: "Very ripe bananas (heavily spotted/browned)", imperial: { amount: 3, unit: "large (approx 1.5 cups mashed)" }, metric: { amount: 360, unit: "g" } },
      { name: "Unsalted butter (melted and slightly cooled)", imperial: { amount: 0.5, unit: "cup (1 stick)" }, metric: { amount: 113, unit: "g" } },
      { name: "Light brown sugar (packed)", imperial: { amount: 0.75, unit: "cup" }, metric: { amount: 150, unit: "g" } },
      { name: "Large eggs (beaten)", imperial: { amount: 2, unit: "large" }, metric: { amount: 2, unit: "large" } },
      { name: "Plain Greek yogurt or sour cream", imperial: { amount: 0.33, unit: "cup" }, metric: { amount: 80, unit: "g" } },
      { name: "Pure vanilla extract", imperial: { amount: 1, unit: "tsp" }, metric: { amount: 5, unit: "ml" } },
      { name: "All-purpose flour", imperial: { amount: 1.5, unit: "cups" }, metric: { amount: 190, unit: "g" } },
      { name: "Baking soda", imperial: { amount: 1, unit: "tsp" }, metric: { amount: 5, unit: "g" } },
      { name: "Ground cinnamon", imperial: { amount: 0.5, unit: "tsp" }, metric: { amount: 1.5, unit: "g" } },
      { name: "Salt", imperial: { amount: 0.5, unit: "tsp" }, metric: { amount: 3, unit: "g" } },
      { name: "Semi-sweet chocolate chips or chunks (Toll House / Hershey's)", imperial: { amount: 0.75, unit: "cup" }, metric: { amount: 130, unit: "g" } },
      { name: "Chopped walnuts or pecans (optional)", imperial: { amount: 0.5, unit: "cup" }, metric: { amount: 60, unit: "g" } }
    ],
    steps: [
      { step: 1, title: "Prep Oven & Loaf Pan", text: "Preheat oven to 350°F (175°C). Grease an 8.5x4.5 inch or 9x5 inch loaf pan and line with parchment paper sling for easy lifting.", timer: null },
      { step: 2, title: "Mash Bananas", text: "In a large bowl, mash ripe bananas with a fork until smooth with small banana pieces.", timer: 3 },
      { step: 3, title: "Mix Wet Ingredients", text: "Whisk in melted butter, brown sugar, eggs, Greek yogurt, and vanilla extract until smooth.", timer: 2 },
      { step: 4, title: "Fold Dry Ingredients", text: "Gently stir in flour, baking soda, cinnamon, and salt with a rubber spatula just until combined. Do not overmix.", timer: 2 },
      { step: 5, title: "Add Mix-ins", text: "Fold in chocolate chips and chopped walnuts, reserving a tablespoon of chocolate chips to sprinkle on top.", timer: 1 },
      { step: 6, title: "Bake Loaf", text: "Pour batter into loaf pan and smooth top. Bake until toothpick inserted in center comes out clean or with few moist crumbs.", timer: 55 },
      { step: 7, title: "Cooling", text: "Cool in pan for 15 minutes, then use parchment sling to transfer to wire rack to cool completely.", timer: 15 }
    ],
    tips: [
      "Pro tip: If your bananas aren't ripe enough, bake unpeeled bananas on a baking sheet at 300°F (150°C) for 15 minutes until skins turn black and soft!",
      "Greek yogurt adds moisture without making the loaf heavy or gummy."
    ]
  },
  {
    id: "chili-recipe",
    queryKeywords: ["chili recipe", "beef chili", "texas chili", "hearty chili", "chili con carne"],
    title: "Award-Winning Hearty Texas Beef Chili",
    category: "Soups & Stews",
    tags: ["High Protein", "Game Day", "Slow Cooker Option", "Comfort Food"],
    prepTime: "20 mins",
    cookTime: "50 mins",
    totalTime: "1 hr 10 mins",
    servings: 6,
    calories: 420,
    difficulty: "Medium",
    rating: 4.9,
    reviewsCount: 468,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1000&q=80",
    description: "Rich, deep chili flavor cooked with ground beef, kidney beans, crushed tomatoes, chili powder, cumin, and dark cocoa powder. Top with cheddar and sour cream!",
    nutrition: {
      calories: "420 kcal",
      totalFat: "18g",
      satFat: "7g",
      sodium: "780mg",
      carbs: "34g",
      fiber: "9g",
      sugars: "6g",
      protein: "32g"
    },
    ingredients: [
      { name: "Lean ground beef (85/15 or 80/20 Chuck)", imperial: { amount: 2, unit: "lbs" }, metric: { amount: 900, unit: "g" } },
      { name: "Yellow onion (finely diced)", imperial: { amount: 1, unit: "large" }, metric: { amount: 1, unit: "large" } },
      { name: "Red bell pepper (diced)", imperial: { amount: 1, unit: "medium" }, metric: { amount: 1, unit: "medium" } },
      { name: "Garlic (minced)", imperial: { amount: 4, unit: "cloves" }, metric: { amount: 4, unit: "cloves" } },
      { name: "Chili powder (Gebhardt / Club House)", imperial: { amount: 3, unit: "tbsp" }, metric: { amount: 24, unit: "g" } },
      { name: "Ground cumin", imperial: { amount: 1, unit: "tbsp" }, metric: { amount: 8, unit: "g" } },
      { name: "Smoked paprika", imperial: { amount: 1, unit: "tsp" }, metric: { amount: 3, unit: "g" } },
      { name: "Unsweetened cocoa powder (secret ingredient!)", imperial: { amount: 1, unit: "tbsp" }, metric: { amount: 6, unit: "g" } },
      { name: "Crushed canned tomatoes (San Marzano style)", imperial: { amount: 28, unit: "oz (1 can)" }, metric: { amount: 800, unit: "g" } },
      { name: "Low-sodium beef broth (Swanson / Campbell's)", imperial: { amount: 1.5, unit: "cups" }, metric: { amount: 355, unit: "ml" } },
      { name: "Dark red kidney beans (drained and rinsed)", imperial: { amount: 15, unit: "oz (1 can)" }, metric: { amount: 425, unit: "g" } },
      { name: "Black beans (drained and rinsed)", imperial: { amount: 15, unit: "oz (1 can)" }, metric: { amount: 425, unit: "g" } },
      { name: "Toppings: Shredded sharp cheddar, sour cream, pickled jalapenos, green onions", imperial: { amount: 1, unit: "garnish set" }, metric: { amount: 1, unit: "garnish set" } }
    ],
    steps: [
      { step: 1, title: "Brown Beef", text: "In a large heavy-bottom pot or Dutch oven, cook ground beef over medium-high heat until browned, breaking it into small crumbles. Drain excess grease, leaving about 1 tbsp.", timer: 8 },
      { step: 2, title: "Sauté Aromatics", text: "Add diced onion, bell pepper, and garlic to pot with beef. Sauté until veggies are tender and fragrant.", timer: 5 },
      { step: 3, title: "Toast Spices", text: "Add chili powder, cumin, smoked paprika, unsweetened cocoa powder, 1 tsp salt, and 1/2 tsp black pepper. Stir constantly for 1 minute to bloom spices.", timer: 1 },
      { step: 4, title: "Simmer Base", text: "Pour in crushed tomatoes and beef broth. Stir well, scraping up any delicious browned bits from bottom of pot.", timer: 2 },
      { step: 5, title: "Add Beans & Simmer", text: "Stir in kidney beans and black beans. Bring chili to a gentle boil, then reduce heat to low, cover partially, and let simmer.", timer: 35 },
      { step: 6, title: "Season & Serve", text: "Ladle into warm bowls. Top generously with sharp cheddar cheese, sour cream, jalapenos, and green onions.", timer: null }
    ],
    tips: [
      "The tablespoon of unsweetened cocoa powder adds dark rich complexity without making the chili taste like chocolate!",
      "Chili tastes even better the next day after flavors meld in the fridge."
    ]
  },
  {
    id: "salmon-recipe",
    queryKeywords: ["salmon recipe", "pan seared salmon", "garlic butter salmon", "quick salmon dinner"],
    title: "Garlic Butter Pan-Seared Atlantic Salmon",
    category: "Dinner & Mains",
    tags: ["Quick & Easy", "Keto / Low Carb", "High Protein", "30-Min Meal"],
    prepTime: "10 mins",
    cookTime: "12 mins",
    totalTime: "22 mins",
    servings: 4,
    calories: 380,
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 395,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    description: "Crispy skin on the outside, buttery tender flakes on the inside. Drizzled with a luscious garlic, lemon, and fresh dill compound butter sauce.",
    nutrition: {
      calories: "380 kcal",
      totalFat: "24g",
      satFat: "8g",
      sodium: "410mg",
      carbs: "2g",
      fiber: "0g",
      sugars: "0.5g",
      protein: "38g"
    },
    ingredients: [
      { name: "Fresh Atlantic salmon fillets (skin-on, center-cut)", imperial: { amount: 4, unit: "fillets (6 oz each)" }, metric: { amount: 680, unit: "g total" } },
      { name: "Olive oil", imperial: { amount: 1, unit: "tbsp" }, metric: { amount: 15, unit: "ml" } },
      { name: "Unsalted butter", imperial: { amount: 3, unit: "tbsp" }, metric: { amount: 42, unit: "g" } },
      { name: "Fresh garlic (minced)", imperial: { amount: 4, unit: "cloves" }, metric: { amount: 4, unit: "cloves" } },
      { name: "Fresh lemon juice", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 30, unit: "ml" } },
      { name: "Fresh dill or parsley (chopped)", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 8, unit: "g" } },
      { name: "Kosher salt and freshly cracked black pepper", imperial: { amount: 1, unit: "to taste" }, metric: { amount: 1, unit: "to taste" } }
    ],
    steps: [
      { step: 1, title: "Dry & Season Salmon", text: "Pat salmon fillets thoroughly dry with paper towels. Season both sides generously with kosher salt and black pepper.", timer: 3 },
      { step: 2, title: "Heat Skillet", text: "Heat olive oil in a large cast-iron or stainless steel skillet over medium-high heat until shimmer hot.", timer: 2 },
      { step: 3, title: "Sear Skin Side Down", text: "Place salmon fillets skin-side down into skillet. Press down gently with a spatula for 10 seconds to prevent curling. Cook undisturbed.", timer: 5 },
      { step: 4, title: "Flip & Add Butter", text: "Flip fillets carefully. Add butter and minced garlic to skillet as butter melts and foams.", timer: 2 },
      { step: 5, title: "Baste Salmon", text: "Squeeze fresh lemon juice into skillet. Spoon garlic butter continuously over salmon fillets until internal temp reaches 135°F-145°F.", timer: 3 },
      { step: 6, title: "Garnish & Serve", text: "Garnish with fresh chopped dill and extra lemon wedges. Serve immediately.", timer: null }
    ],
    tips: [
      "Drying salmon skin completely with paper towels is the key to achieving restaurant-quality crispy skin.",
      "Wild Alaskan salmon cooks faster than farmed Atlantic salmon; check internal temp early."
    ]
  },
  {
    id: "pancake-recipe",
    queryKeywords: ["pancake recipe", "fluffy pancakes", "buttermilk pancakes", "american pancakes", "breakfast pancakes"],
    title: "Fluffy American Buttermilk Pancakes",
    category: "Breakfast & Brunch",
    tags: ["Kid Favorite", "Weekend Brunch", "30-Min Meal", "US Classic"],
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    servings: 4,
    calories: 320,
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 620,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=80",
    description: "Towering, light, airy pancakes served with melted butter and warm 100% pure Canadian maple syrup or US grade A maple syrup.",
    nutrition: {
      calories: "320 kcal",
      totalFat: "9g",
      satFat: "4g",
      sodium: "540mg",
      carbs: "50g",
      fiber: "1.5g",
      sugars: "12g",
      protein: "9g"
    },
    ingredients: [
      { name: "All-purpose flour", imperial: { amount: 2, unit: "cups" }, metric: { amount: 250, unit: "g" } },
      { name: "Granulated sugar", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 25, unit: "g" } },
      { name: "Baking powder", imperial: { amount: 2, unit: "tsp" }, metric: { amount: 8, unit: "g" } },
      { name: "Baking soda", imperial: { amount: 0.5, unit: "tsp" }, metric: { amount: 2.5, unit: "g" } },
      { name: "Salt", imperial: { amount: 0.5, unit: "tsp" }, metric: { amount: 3, unit: "g" } },
      { name: "Real buttermilk (or milk + 2 tbsp vinegar)", imperial: { amount: 1.75, unit: "cups" }, metric: { amount: 420, unit: "ml" } },
      { name: "Large eggs", imperial: { amount: 2, unit: "large" }, metric: { amount: 2, unit: "large" } },
      { name: "Unsalted butter (melted)", imperial: { amount: 4, unit: "tbsp (1/2 stick)" }, metric: { amount: 56, unit: "g" } },
      { name: "Pure Maple Syrup (Canadian Grade A Dark / Amber)", imperial: { amount: 0.5, unit: "cup for serving" }, metric: { amount: 120, unit: "ml" } }
    ],
    steps: [
      { step: 1, title: "Whisk Dry Ingredients", text: "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.", timer: 2 },
      { step: 2, title: "Combine Wet Ingredients", text: "In a separate bowl, whisk buttermilk, eggs, and melted butter until combined.", timer: 2 },
      { step: 3, title: "Gently Fold Batter", text: "Pour wet ingredients into dry. Fold gently with a spatula until just combined. Lumps are expected! Let batter sit for 5 minutes.", timer: 5 },
      { step: 4, title: "Heat Griddle", text: "Heat non-stick skillet or electric griddle to 375°F (190°C). Grease lightly with butter or cooking spray.", timer: 2 },
      { step: 5, title: "Cook Until Bubbles Pop", text: "Pour 1/4 cup batter per pancake. Cook until bubbles burst on surface and edges look set (about 2-3 mins).", timer: 3 },
      { step: 6, title: "Flip & Finish", text: "Flip carefully with spatula and cook opposite side until golden brown (about 1-2 mins).", timer: 2 },
      { step: 7, title: "Serve Hot", text: "Stack tall, top with pat of butter, and warm maple syrup.", timer: null }
    ],
    tips: [
      "Resting the batter for 5 minutes allows buttermilk acid to react with baking soda, creating maximum height and fluffiness!",
      "Do NOT over-mix the batter. Over-mixing develops gluten and results in dense, tough pancakes."
    ]
  },
  {
    id: "chocolate-chip-cookie-recipe",
    queryKeywords: ["chocolate chip cookie recipe", "chocolate chip cookies", "chewy chocolate chip cookies", "nestle tollhouse style"],
    title: "Ultimate Chewy Brown-Butter Chocolate Chip Cookies",
    category: "Bakery & Sweets",
    tags: ["Fan Favorite", "Baking Essential", "Kid Favorite", "US Classic"],
    prepTime: "20 mins",
    cookTime: "11 mins",
    totalTime: "45 mins",
    servings: 20,
    calories: 210,
    difficulty: "Easy",
    rating: 5.0,
    reviewsCount: 840,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80",
    description: "The gold standard of chocolate chip cookies! Features nuttiness from browned butter, dark brown sugar chewiness, and pools of dark and milk chocolate.",
    nutrition: {
      calories: "210 kcal",
      totalFat: "10g",
      satFat: "6g",
      sodium: "150mg",
      carbs: "28g",
      fiber: "1g",
      sugars: "18g",
      protein: "2.5g"
    },
    ingredients: [
      { name: "Unsalted butter (browned)", imperial: { amount: 1, unit: "cup (2 sticks)" }, metric: { amount: 226, unit: "g" } },
      { name: "Dark brown sugar (packed)", imperial: { amount: 1, unit: "cup" }, metric: { amount: 200, unit: "g" } },
      { name: "Granulated white sugar", imperial: { amount: 0.5, unit: "cup" }, metric: { amount: 100, unit: "g" } },
      { name: "Large eggs (room temp)", imperial: { amount: 2, unit: "large" }, metric: { amount: 2, unit: "large" } },
      { name: "Pure vanilla extract", imperial: { amount: 2, unit: "tsp" }, metric: { amount: 10, unit: "ml" } },
      { name: "All-purpose flour", imperial: { amount: 2.25, unit: "cups" }, metric: { amount: 280, unit: "g" } },
      { name: "Baking soda", imperial: { amount: 1, unit: "tsp" }, metric: { amount: 5, unit: "g" } },
      { name: "Flaky sea salt (Maldon)", imperial: { amount: 1, unit: "tsp for topping" }, metric: { amount: 5, unit: "g" } },
      { name: "Semi-sweet & dark chocolate chunks / chips", imperial: { amount: 1.5, unit: "cups" }, metric: { amount: 260, unit: "g" } }
    ],
    steps: [
      { step: 1, title: "Brown the Butter", text: "Melt butter in saucepan over medium heat. Swirl constantly for 4-5 mins as butter foams and turns nutty golden brown. Cool 10 mins.", timer: 5 },
      { step: 2, title: "Beat Butter & Sugars", text: "Whisk browned butter, dark brown sugar, and white sugar until smooth and caramel-like.", timer: 3 },
      { step: 3, title: "Add Eggs & Vanilla", text: "Whisk in eggs and vanilla extract vigorously for 1 minute until mixture thickens and shines.", timer: 2 },
      { step: 4, title: "Fold Dry Ingredients & Chocolate", text: "Add flour, baking soda, and salt. Stir gently until almost combined, then fold in chocolate chunks.", timer: 2 },
      { step: 5, title: "Scoop & Bake", text: "Preheat oven to 350°F (175°C). Scoop 3 tbsp size balls onto parchment lined sheets.", timer: 5 },
      { step: 6, title: "Bake & Salt", text: "Bake until golden brown on edges with gooey centers. Sprinkle immediately with flaky sea salt while hot.", timer: 11 },
      { step: 7, title: "Cool", text: "Cool on tray for 10 mins before devouring.", timer: 10 }
    ],
    tips: [
      "Browning the butter boils off excess water and creates caramel-like toasted milk solids.",
      "A sprinkle of Maldon flaky sea salt balances sweetness and enhances chocolate flavors."
    ]
  },
  {
    id: "chicken-soup-recipe",
    queryKeywords: ["chicken soup recipe", "chicken noodle soup", "homemade chicken soup", "comfort soup"],
    title: "Comforting Homestyle Chicken Noodle Soup",
    category: "Soups & Stews",
    tags: ["Comfort Food", "Cold & Flu Cure", "Healthy", "US Classic"],
    prepTime: "15 mins",
    cookTime: "35 mins",
    totalTime: "50 mins",
    servings: 6,
    calories: 260,
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 421,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
    description: "Nourishing, soul-warming soup loaded with shredded roast chicken, tender egg noodles, carrots, celery, and fresh herbs in a rich golden broth.",
    nutrition: {
      calories: "260 kcal",
      totalFat: "7g",
      satFat: "2g",
      sodium: "720mg",
      carbs: "24g",
      fiber: "2g",
      sugars: "3g",
      protein: "26g"
    },
    ingredients: [
      { name: "Olive oil or butter", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 30, unit: "ml" } },
      { name: "Yellow onion (diced)", imperial: { amount: 1, unit: "medium" }, metric: { amount: 1, unit: "medium" } },
      { name: "Carrots (sliced into coins)", imperial: { amount: 3, unit: "large" }, metric: { amount: 3, unit: "large" } },
      { name: "Celery stalks (sliced)", imperial: { amount: 3, unit: "stalks" }, metric: { amount: 3, unit: "stalks" } },
      { name: "Garlic (minced)", imperial: { amount: 3, unit: "cloves" }, metric: { amount: 3, unit: "cloves" } },
      { name: "Low-sodium chicken broth (Swanson / College Inn / Pacific Organic)", imperial: { amount: 8, unit: "cups" }, metric: { amount: 1.9, unit: "L" } },
      { name: "Fresh thyme sprigs & bay leaf", imperial: { amount: 3, unit: "thyme + 1 bay" }, metric: { amount: 3, unit: "thyme + 1 bay" } },
      { name: "Wide egg noodles (No Yolks / Amish Style)", imperial: { amount: 6, unit: "oz" }, metric: { amount: 170, unit: "g" } },
      { name: "Cooked shredded chicken breast or rotisserie chicken", imperial: { amount: 3, unit: "cups" }, metric: { amount: 400, unit: "g" } },
      { name: "Fresh lemon juice & chopped parsley", imperial: { amount: 1, unit: "tbsp lemon + 1/4 cup parsley" }, metric: { amount: 1, unit: "tbsp lemon + 15g parsley" } }
    ],
    steps: [
      { step: 1, title: "Sauté Mirepoix", text: "In a large soup pot, heat olive oil over medium heat. Add onion, carrots, and celery. Sauté for 6-8 mins until veggies soften.", timer: 7 },
      { step: 2, title: "Add Garlic & Herbs", text: "Stir in minced garlic, thyme sprigs, bay leaf, 1 tsp salt, and 1/2 tsp black pepper. Cook 1 min.", timer: 1 },
      { step: 3, title: "Simmer Broth Base", text: "Pour in chicken broth. Bring to a boil, then reduce heat, cover, and simmer for 15 mins until carrots are tender.", timer: 15 },
      { step: 4, title: "Cook Egg Noodles", text: "Stir in wide egg noodles and simmer uncovered for 6-8 minutes until tender.", timer: 7 },
      { step: 5, title: "Add Shredded Chicken", text: "Stir in shredded chicken and cook 2 mins until heated through. Discard thyme stems and bay leaf.", timer: 2 },
      { step: 6, title: "Brighten & Serve", text: "Stir in fresh lemon juice and chopped parsley. Taste and adjust salt. Serve steaming hot with crusty bread.", timer: null }
    ],
    tips: [
      "Using store-bought rotisserie chicken saves 30 minutes of prep time while delivering incredible roasted flavor!",
      "If making soup ahead to freeze, cook noodles separately so they don't absorb all the broth."
    ]
  },
  {
    id: "meatloaf-recipe",
    queryKeywords: ["meatloaf recipe", "classic meatloaf", "glazed meatloaf", "ground beef meatloaf"],
    title: "Classic Homestyle Glazed Meatloaf",
    category: "Dinner & Mains",
    tags: ["High Protein", "Family Dinner", "Comfort Food", "US Classic"],
    prepTime: "20 mins",
    cookTime: "1 hr",
    totalTime: "1 hr 20 mins",
    servings: 8,
    calories: 360,
    difficulty: "Easy",
    rating: 4.8,
    reviewsCount: 388,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    description: "Tender, juicy beef and pork meatloaf topped with a sticky, tangy sweet ketchup brown-sugar glaze. The ultimate North American Sunday dinner.",
    nutrition: {
      calories: "360 kcal",
      totalFat: "19g",
      satFat: "7g",
      sodium: "650mg",
      carbs: "22g",
      fiber: "1g",
      sugars: "14g",
      protein: "26g"
    },
    ingredients: [
      { name: "Ground beef (80/20 Chuck) or beef/pork mix", imperial: { amount: 2, unit: "lbs" }, metric: { amount: 900, unit: "g" } },
      { name: "Italian breadcrumbs or crushed Ritz crackers", imperial: { amount: 1, unit: "cup" }, metric: { amount: 90, unit: "g" } },
      { name: "Whole milk", imperial: { amount: 0.5, unit: "cup" }, metric: { amount: 120, unit: "ml" } },
      { name: "Yellow onion (finely grated or minced)", imperial: { amount: 1, unit: "medium" }, metric: { amount: 1, unit: "medium" } },
      { name: "Large eggs", imperial: { amount: 2, unit: "large" }, metric: { amount: 2, unit: "large" } },
      { name: "Worcestershire sauce (Lea & Perrins)", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 30, unit: "ml" } },
      { name: "Garlic powder & Onion powder", imperial: { amount: 1, unit: "tsp each" }, metric: { amount: 3, unit: "g each" } },
      { name: "Tangy Glaze: Heinz Ketchup, 3 tbsp Brown Sugar, 1 tbsp Yellow Mustard, 1 tbsp Apple Cider Vinegar", imperial: { amount: 0.75, unit: "cup glaze" }, metric: { amount: 180, unit: "ml" } }
    ],
    steps: [
      { step: 1, title: "Soak Breadcrumbs", text: "In a bowl, mix breadcrumbs with milk and let soak for 5 minutes (panade method for moist meatloaf).", timer: 5 },
      { step: 2, title: "Mix Meatloaf Base", text: "In a large bowl, combine ground beef, soaked breadcrumbs, grated onion, eggs, Worcestershire sauce, garlic powder, onion powder, 1.5 tsp salt, and pepper.", timer: null },
      { step: 3, title: "Shape Loaf", text: "Gently combine ingredients with hands just until blended. Shape into a 9x5 inch loaf on a foil-lined rimmed baking sheet.", timer: null },
      { step: 4, title: "Whisk Tangy Glaze", text: "Whisk ketchup, brown sugar, yellow mustard, and apple cider vinegar together in a small bowl.", timer: 2 },
      { step: 5, title: "Bake & Glaze", text: "Preheat oven to 375°F (190°C). Bake meatloaf for 40 mins. Remove from oven and brush glaze generously over top and sides.", timer: 40 },
      { step: 6, title: "Final Bake", text: "Return to oven and bake an additional 15-20 minutes until internal temperature reaches 160°F (71°C).", timer: 20 },
      { step: 7, title: "Rest & Slice", text: "Let rest for 10-15 minutes before slicing into thick slabs so juices redistribute.", timer: 15 }
    ],
    tips: [
      "Grating the onion instead of chopping ensures it melts into the meat and adds moisture without crunchy raw bites.",
      "Baking on a rimmed sheet instead of in a loaf pan lets fat drain off and creates caramelized edges."
    ]
  },
  {
    id: "lasagna-recipe",
    queryKeywords: ["lasagna recipe", "meat lasagna", "cheesy lasagna", "homemade lasagna", "italian american lasagna"],
    title: "World's Best Cheesy Meat & Marinara Lasagna",
    category: "Dinner & Mains",
    tags: ["Comfort Food", "Family Feast", "Cheesy Goodness", "US Classic"],
    prepTime: "30 mins",
    cookTime: "1 hr 15 mins",
    totalTime: "2 hrs (includes rest)",
    servings: 12,
    calories: 480,
    difficulty: "Medium",
    rating: 5.0,
    reviewsCount: 975,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1000&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1000&q=80",
    description: "Layers of savory Italian sausage meat sauce, creamy ricotta cheese filling, gooey whole-milk mozzarella, and pasta sheets baked to bubbly perfection.",
    nutrition: {
      calories: "480 kcal",
      totalFat: "26g",
      satFat: "12g",
      sodium: "920mg",
      carbs: "38g",
      fiber: "3g",
      sugars: "7g",
      protein: "28g"
    },
    ingredients: [
      { name: "Sweet or Mild Italian Sausage (bulk or casing removed)", imperial: { amount: 1, unit: "lb" }, metric: { amount: 450, unit: "g" } },
      { name: "Lean ground beef (85/15)", imperial: { amount: 1, unit: "lb" }, metric: { amount: 450, unit: "g" } },
      { name: "Yellow onion (diced) & 4 cloves garlic (minced)", imperial: { amount: 1, unit: "onion + 4 garlic" }, metric: { amount: 1, unit: "onion + 4 garlic" } },
      { name: "San Marzano marinara sauce or crushed tomatoes", imperial: { amount: 48, unit: "oz (2 jars)" }, metric: { amount: 1.35, unit: "kg" } },
      { name: "Tomato paste", imperial: { amount: 2, unit: "tbsp" }, metric: { amount: 30, unit: "g" } },
      { name: "Whole-milk Ricotta cheese (Galbani / Tre Stelle)", imperial: { amount: 15, unit: "oz (1 tub)" }, metric: { amount: 425, unit: "g" } },
      { name: "Large egg (beaten)", imperial: { amount: 1, unit: "large" }, metric: { amount: 1, unit: "large" } },
      { name: "Freshly grated Parmesan cheese", imperial: { amount: 1, unit: "cup" }, metric: { amount: 90, unit: "g" } },
      { name: "Fresh parsley (chopped)", imperial: { amount: 0.25, unit: "cup" }, metric: { amount: 15, unit: "g" } },
      { name: "Shredded whole-milk Mozzarella cheese", imperial: { amount: 4, unit: "cups (16 oz)" }, metric: { amount: 450, unit: "g" } },
      { name: "Lasagna noodles (oven-ready or boiled standard noodles)", imperial: { amount: 12, unit: "sheets" }, metric: { amount: 12, unit: "sheets" } }
    ],
    steps: [
      { step: 1, title: "Prepare Meat Sauce", text: "In a heavy pot, brown Italian sausage, ground beef, onion, and garlic. Drain grease. Stir in marinara sauce, tomato paste, 1 tsp dried oregano, 1 tsp basil, salt, and pepper. Simmer for 20 mins.", timer: 20 },
      { step: 2, title: "Mix Ricotta Layer", text: "In a bowl, combine ricotta cheese, egg, 1/2 cup grated parmesan, chopped parsley, 1/2 tsp salt, and pepper.", timer: 5 },
      { step: 3, title: "Prep Oven & 9x13 Pan", text: "Preheat oven to 375°F (190°C). Spread 1 cup meat sauce on bottom of a 9x13 inch baking dish.", timer: 2 },
      { step: 4, title: "Layer Pasta & Ricotta", text: "Arrange 3-4 lasagna noodles over sauce. Spread 1/3 of ricotta mixture over noodles, then top with 1 cup mozzarella and 1 cup meat sauce.", timer: null },
      { step: 5, title: "Repeat Layers", text: "Repeat layers two more times (Noodles -> Ricotta -> Mozzarella -> Meat Sauce). Top final layer with remaining noodles, remaining sauce, mozzarella, and parmesan.", timer: null },
      { step: 6, title: "Bake Covered & Uncovered", text: "Cover tightly with foil (spray foil with oil so cheese doesn't stick). Bake 35 mins. Remove foil and bake 15 mins until cheese is bubbly and golden.", timer: 50 },
      { step: 7, title: "Essential Rest Time", text: "Rest lasagna for 20 minutes before cutting into clean squares. If sliced hot, layers will slide apart!", timer: 20 }
    ],
    tips: [
      "Mixing Italian sausage with ground beef adds spices, herbs, and rich fat flavor that ground beef alone cannot achieve.",
      "Resting for 20 minutes allows cheese and sauce to set, producing beautiful clean slices."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RECIPES;
}
