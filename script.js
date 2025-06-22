// --- Recipe Data ---
const recipes = [
    {
        id: 'r001',
        name: 'Classic Spaghetti Bolognese',
        description: 'A rich and hearty Italian classic.',
        servings: 4,
        image: 'https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
        category: 'non-veg',
        ingredients: [
            { name: 'Ground Beef', quantity: 500, unit: 'g', costPerUnit: 0.35, caloriesPerUnit: 2.5 }, // 350 INR/kg = 0.35 INR/g
            { name: 'Canned Tomatoes', quantity: 400, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 0.2 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 }, // Cost per medium onion
            { name: 'Garlic', quantity: 3, unit: 'cloves', costPerUnit: 0.4, caloriesPerUnit: 4 }, // Cost per clove
            { name: 'Spaghetti Pasta', quantity: 400, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.5 },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }, // Cost per tbsp
        ]
    },
    {
        id: 'r002',
        name: 'Vegetable Stir-fry',
        description: 'Quick, healthy, and customizable.',
        servings: 2,
        image: 'https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png',
        category: 'veg',
        ingredients: [
            { name: 'Broccoli', quantity: 300, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 0.35 },
            { name: 'Carrots', quantity: 2, unit: 'medium', costPerUnit: 6.0, caloriesPerUnit: 25 },
            { name: 'Bell Pepper', quantity: 1, unit: 'large', costPerUnit: 18.0, caloriesPerUnit: 30 },
            { name: 'Soy Sauce', quantity: 4, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Rice', quantity: 200, unit: 'g', costPerUnit: 0.07, caloriesPerUnit: 1.3 },
            { name: 'Chicken Breast (optional)', quantity: 200, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 }
        ]
    },
    {
        id: 'r003',
        name: 'Creamy Tomato Soup',
        description: 'Comforting and easy to make.',
        servings: 4,
        image: 'https://www.rawblend.com.au/wp-content/uploads/2021/06/Creamy-Tomato-Soup-1920x1080-1.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Canned Crushed Tomatoes', quantity: 800, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 0.25 },
            { name: 'Vegetable Broth', quantity: 500, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 0.05 },
            { name: 'Heavy Cream', quantity: 100, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Basil', quantity: 10, unit: 'leaves', costPerUnit: 1.5, caloriesPerUnit: 1 },
            { name: 'Garlic', quantity: 2, unit: 'cloves', costPerUnit: 0.4, caloriesPerUnit: 4 },
        ]
    },
    {
        id: 'r004',
        name: 'Chicken Caesar Salad',
        description: 'A fresh and protein-packed lunch or light dinner.',
        servings: 1,
        image: 'https://www.maggi.co.uk/sites/default/files/styles/image_744_x_419/public/srh_recipes/3ee1954a36009dd59be2d362a2a44cf6.jpg?h=5461916f&itok=LCYNJH0_',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast', quantity: 150, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Romaine Lettuce', quantity: 100, unit: 'g', costPerUnit: 1.0, caloriesPerUnit: 0.15 },
            { name: 'Parmesan Cheese', quantity: 20, unit: 'g', costPerUnit: 1.5, caloriesPerUnit: 4.0 },
            { name: 'Croutons', quantity: 30, unit: 'g', costPerUnit: 0.9, caloriesPerUnit: 4.5 },
            { name: 'Caesar Dressing', quantity: 30, unit: 'ml', costPerUnit: 1.2, caloriesPerUnit: 3.0 },
        ]
    },
    {
        id: 'r005',
        name: 'Lentil Soup',
        description: 'A hearty and nutritious vegetarian soup.',
        servings: 6,
        image: 'https://www.allrecipes.com/thmb/UeFtapHyGFBo4Lx-72GxgjrOGnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Brown Lentils', quantity: 200, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 3.5 },
            { name: 'Carrots', quantity: 2, unit: 'medium', costPerUnit: 6.0, caloriesPerUnit: 25 },
            { name: 'Celery Stalks', quantity: 2, unit: 'medium', costPerUnit: 30.0, caloriesPerUnit: 10 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Vegetable Broth', quantity: 1000, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 0.05 },
            { name: 'Diced Tomatoes', quantity: 400, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 0.2 },
            { name: 'Bay Leaf', quantity: 1, unit: 'leaf', costPerUnit: 1.0, caloriesPerUnit: 0 },
        ]
    },
    {
        id: 'r006',
        name: 'Pancakes with Berries',
        description: 'Classic fluffy pancakes, perfect for breakfast.',
        servings: 2,
        image: 'https://img.taste.com.au/241jhKbt/taste/2016/11/mixed-berry-pancakes-77057-1.jpeg',
        category: 'veg',
        ingredients: [
            { name: 'All-Purpose Flour', quantity: 150, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Milk', quantity: 200, unit: 'ml', costPerUnit: 0.05, caloriesPerUnit: 0.47 },
            { name: 'Egg', quantity: 1, unit: 'large', costPerUnit: 6.0, caloriesPerUnit: 70 },
            { name: 'Baking Powder', quantity: 5, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 0 },
            { name: 'Sugar', quantity: 20, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 4.0 },
            { name: 'Mixed Berries', quantity: 100, unit: 'g', costPerUnit: 1.6, caloriesPerUnit: 0.5 }
        ]
    },
    // --- New Vegetarian Recipes (20) ---
    {
        id: 'r007',
        name: 'Palak Paneer',
        description: 'Creamy spinach curry with paneer (Indian cottage cheese).',
        servings: 4,
        image: 'https://vaya.in/recipes/wp-content/uploads/2018/03/Palak-Paneer.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Paneer', quantity: 250, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 3.0 },
            { name: 'Spinach', quantity: 500, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 0.23 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r008',
        name: 'Dal Makhani',
        description: 'Rich and creamy black lentil curry, a Punjabi specialty.',
        servings: 4,
        image: 'https://theflavorbells.com/wp-content/uploads/2020/07/dal-makhani2.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Whole Black Lentils (Urad Dal)', quantity: 150, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 3.4 },
            { name: 'Kidney Beans', quantity: 30, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.3 },
            { name: 'Tomato Puree', quantity: 200, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.3 },
            { name: 'Butter', quantity: 50, unit: 'g', costPerUnit: 0.7, caloriesPerUnit: 7.0 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Spices', quantity: 1, unit: 'pack', costPerUnit: 5.0, caloriesPerUnit: 15 } // Placeholder for mixed spices
        ]
    },
    {
        id: 'r009',
        name: 'Aloo Gobi',
        description: 'Classic Indian dry curry with potatoes and cauliflower.',
        servings: 3,
        image: 'https://www.seriouseats.com/thmb/gTVjyFHq-N3iyv08113cBQWCTv8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220303-aloo-gobi-vicky-wasik-35-c9afccd574534761886e5964f34586e1.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Potatoes', quantity: 300, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 0.77 },
            { name: 'Cauliflower', quantity: 400, unit: 'g', costPerUnit: 0.06, caloriesPerUnit: 0.25 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger', quantity: 1, unit: 'inch', costPerUnit: 4.0, caloriesPerUnit: 5 },
            { name: 'Turmeric Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 3 },
            { name: 'Cumin Seeds', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 2 }
        ]
    },
    {
        id: 'r010',
        name: 'Chole Bhature',
        description: 'Spicy chickpea curry served with fluffy fried bread.',
        servings: 2,
        image: 'https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png',
        category: 'veg',
        ingredients: [
            { name: 'Chickpeas', quantity: 200, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.64 },
            { name: 'All-Purpose Flour', quantity: 300, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Yogurt', quantity: 50, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Tomato', quantity: 1, unit: 'large', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Cooking Oil', quantity: 100, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 },
            { name: 'Chole Masala', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 20 }
        ]
    },
    {
        id: 'r011',
        name: 'Masoor Dal (Red Lentil Dal)',
        description: 'Simple and nutritious red lentil curry, quick to prepare.',
        servings: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9ifJSuRT7dQMwA8uXLrAMPwDC_c_RyQdl-hV_ZotMhpXY0YSc_wkHhNwgrRdue6vQO0&usqp=CAU',
        category: 'veg',
        ingredients: [
            { name: 'Red Lentils', quantity: 150, unit: 'g', costPerUnit: 0.07, caloriesPerUnit: 3.4 },
            { name: 'Onion', quantity: 0.5, unit: 'medium', costPerUnit: 4.0, caloriesPerUnit: 20 },
            { name: 'Tomato', quantity: 0.5, unit: 'medium', costPerUnit: 3.5, caloriesPerUnit: 10 },
            { name: 'Garlic', quantity: 2, unit: 'cloves', costPerUnit: 0.4, caloriesPerUnit: 4 },
            { name: 'Ghee', quantity: 1, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 },
            { name: 'Cumin Seeds', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 2 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 }
        ]
    },
    {
        id: 'r012',
        name: 'Vegetable Biryani',
        description: 'Fragrant basmati rice cooked with mixed vegetables and spices.',
        servings: 4,
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Vegetable-Biryani-With-Green-Raita-159c15d.jpg?quality=90&resize=556,505',
        category: 'veg',
        ingredients: [
            { name: 'Basmati Rice', quantity: 400, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Mixed Vegetables', quantity: 300, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.5 }, // Beans, carrots, peas, potatoes
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ghee', quantity: 2, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 },
            { name: 'Biryani Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 30 }
        ]
    },
    {
        id: 'r013',
        name: 'Paneer Butter Masala',
        description: 'Rich, creamy, and mildly spicy paneer dish in a tomato-based gravy.',
        servings: 4,
        image: 'https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Paneer', quantity: 250, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 3.0 },
            { name: 'Tomatoes', quantity: 400, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.18 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Cashews', quantity: 20, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Butter', quantity: 50, unit: 'g', costPerUnit: 0.7, caloriesPerUnit: 7.0 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Kasoori Methi', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r014',
        name: 'Mix Veg Curry',
        description: 'A medley of vegetables cooked in a flavorful Indian gravy.',
        servings: 4,
        image: 'https://vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Mixed Vegetables', quantity: 500, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.5 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coconut Milk', quantity: 100, unit: 'ml', costPerUnit: 0.25, caloriesPerUnit: 2.3 },
            { name: 'Coriander Powder', quantity: 2, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Red Chili Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 }
        ]
    },
    {
        id: 'r015',
        name: 'Mushroom Do Pyaza',
        description: 'Mushrooms cooked with a double amount of onions (fried and added at two stages).',
        servings: 3,
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/11/mushroom-do-pyaza-recipe-4-500x375.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Mushrooms', quantity: 200, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 0.22 },
            { name: 'Onions', quantity: 2, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Capsicum', quantity: 1, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Tomato Puree', quantity: 50, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.3 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Cooking Oil', quantity: 3, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 },
            { name: 'Dry Fenugreek Leaves', quantity: 1, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r016',
        name: 'Gobi Manchurian (Dry)',
        description: 'Crispy fried cauliflower florets tossed in a spicy, tangy Indo-Chinese sauce.',
        servings: 3,
        image: 'https://cdn1.foodviva.com/static-content/food-images/chinese-recipes/gobi-manchurian-recipe/gobi-manchurian-recipe.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Cauliflower', quantity: 400, unit: 'g', costPerUnit: 0.06, caloriesPerUnit: 0.25 },
            { name: 'All-Purpose Flour', quantity: 100, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Corn Flour', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.5 },
            { name: 'Soy Sauce', quantity: 3, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Chili Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 15 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Spring Onion', quantity: 0.5, unit: 'bunch', costPerUnit: 7.0, caloriesPerUnit: 10 }
        ]
    },
    {
        id: 'r017',
        name: 'Pav Bhaji',
        description: 'A spicy mashed vegetable curry served with soft buttered bread rolls.',
        servings: 4,
        image: 'https://madhurasrecipe.com/wp-content/uploads/2023/06/10-Lokanchi-Bhaji-4.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Potatoes', quantity: 200, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 0.77 },
            { name: 'Peas', quantity: 100, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.8 },
            { name: 'Capsicum', quantity: 1, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Tomatoes', quantity: 2, unit: 'large', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Onions', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Pav Bhaji Masala', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 20 },
            { name: 'Pav (Bread Rolls)', quantity: 8, unit: 'pieces', costPerUnit: 4.0, caloriesPerUnit: 80 }
        ]
    },
    {
        id: 'r018',
        name: 'Vegetable Pulao',
        description: 'Aromatic rice dish cooked with mixed vegetables and mild spices.',
        servings: 3,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG',
        category: 'veg',
        ingredients: [
            { name: 'Basmati Rice', quantity: 300, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Mixed Vegetables', quantity: 200, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.5 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Garam Masala', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Ghee', quantity: 1.5, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 }
        ]
    },
    {
        id: 'r019',
        name: 'Rajma Chawal',
        description: 'Kidney beans cooked in a thick gravy, best served with rice.',
        servings: 4,
        image: 'https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Kidney Beans', quantity: 200, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.3 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Rajma Masala', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 20 },
            { name: 'Rice', quantity: 400, unit: 'g', costPerUnit: 0.07, caloriesPerUnit: 1.3 },
            { name: 'Coriander Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r020',
        name: 'Vegetable Korma',
        description: 'Rich and creamy vegetable curry with nuts and spices.',
        servings: 4,
        image: 'https://spicecravings.com/wp-content/uploads/2022/01/Vegetable-Korma-New-Featured.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Mixed Vegetables', quantity: 400, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.5 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Cashews', quantity: 30, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Coriander Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r021',
        name: 'Mushroom Masala',
        description: 'Spicy and flavorful mushroom curry.',
        servings: 3,
        image: 'https://www.cookwithkushi.com/wp-content/uploads/2020/03/IMG_3557_11-1024x650-1.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Mushrooms', quantity: 250, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 0.22 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 },
            { name: 'Cumin Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Chili Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 }
        ]
    },
    {
        id: 'r022',
        name: 'Capsicum Masala',
        description: 'Bell peppers cooked in a rich, onion-tomato gravy.',
        servings: 3,
        image: 'https://cdn2.foodviva.com/static-content/food-images/curry-recipes/capsicum-masala-curry/capsicum-masala-curry.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Capsicum (Bell Pepper)', quantity: 3, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Amchur Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r023',
        name: 'Veg Hakka Noodles',
        description: 'Popular Indo-Chinese stir-fried noodles with vegetables.',
        servings: 2,
        image: 'https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Hakka Noodles', quantity: 200, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 3.5 },
            { name: 'Cabbage', quantity: 100, unit: 'g', costPerUnit: 0.02, caloriesPerUnit: 0.25 },
            { name: 'Carrots', quantity: 1, unit: 'medium', costPerUnit: 6.0, caloriesPerUnit: 25 },
            { name: 'Bell Pepper', quantity: 0.5, unit: 'large', costPerUnit: 9.0, caloriesPerUnit: 15 },
            { name: 'Onion', quantity: 0.5, unit: 'medium', costPerUnit: 4.0, caloriesPerUnit: 20 },
            { name: 'Soy Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Vinegar', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 0 }
        ]
    },
    {
        id: 'r024',
        name: 'Masala Dosa',
        description: 'Crispy fermented rice and lentil crepe filled with spiced potatoes.',
        servings: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzTB_L2KzVqOfdt1nhPj7JqvC9USOiH_bcA&s',
        category: 'veg',
        ingredients: [
            { name: 'Dosa Batter', quantity: 400, unit: 'ml', costPerUnit: 0.1, caloriesPerUnit: 1.2 },
            { name: 'Potatoes', quantity: 200, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 0.77 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Ghee', quantity: 2, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 },
            { name: 'Curry Leaves', quantity: 10, unit: 'leaves', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'Mustard Seeds', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 2 },
            { name: 'Coconut Chutney (ready-made)', quantity: 50, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 1.5 }
        ]
    },
    {
        id: 'r025',
        name: 'Vegetable Cutlets',
        description: 'Crispy fried patties made with mashed vegetables and spices.',
        servings: 3,
        image: 'https://madhurasrecipe.com/wp-content/uploads/2020/10/Veg-Cutlets-Marathi-Recipe-585x434.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Potatoes (boiled)', quantity: 250, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 0.77 },
            { name: 'Mixed Vegetables (boiled)', quantity: 150, unit: 'g', costPerUnit: 0.2, caloriesPerUnit: 0.5 },
            { name: 'Breadcrumbs', quantity: 50, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.8 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Ginger', quantity: 1, unit: 'inch', costPerUnit: 4.0, caloriesPerUnit: 5 },
            { name: 'Coriander Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil (for frying)', quantity: 100, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r026',
        name: 'Poha',
        description: 'Flattened rice cooked with spices, peanuts, and vegetables.',
        servings: 2,
        image: 'https://nfcihospitality.com/wp-content/uploads/2024/11/kanda-poha.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Flattened Rice (Poha)', quantity: 150, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.4 },
            { name: 'Onion', quantity: 0.5, unit: 'medium', costPerUnit: 4.0, caloriesPerUnit: 20 },
            { name: 'Potatoes', quantity: 1, unit: 'small', costPerUnit: 2.0, caloriesPerUnit: 30 },
            { name: 'Peanuts', quantity: 30, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 5.6 },
            { name: 'Curry Leaves', quantity: 5, unit: 'leaves', costPerUnit: 0.5, caloriesPerUnit: 1 },
            { name: 'Mustard Seeds', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 2 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 }
        ]
    },
    {
        id: 'r027',
        name: 'Vegetable Sandwiches',
        description: 'Quick and easy sandwiches with fresh vegetables.',
        servings: 2,
        image: 'https://www.jeyashriskitchen.com/wp-content/uploads/2013/12/vegetable-sandwich-500x375.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Bread Slices', quantity: 4, unit: 'slices', costPerUnit: 2.0, caloriesPerUnit: 70 },
            { name: 'Cucumber', quantity: 0.5, unit: 'medium', costPerUnit: 5.0, caloriesPerUnit: 8 },
            { name: 'Tomato', quantity: 0.5, unit: 'medium', costPerUnit: 3.5, caloriesPerUnit: 10 },
            { name: 'Onion', quantity: 0.25, unit: 'medium', costPerUnit: 2.0, caloriesPerUnit: 10 },
            { name: 'Green Chutney (ready-made)', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Butter', quantity: 1, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 },
            { name: 'Cheese Slice (optional)', quantity: 1, unit: 'slice', costPerUnit: 10.0, caloriesPerUnit: 80 }
        ]
    },
    {
        id: 'r028',
        name: 'Spinach and Corn Curry',
        description: 'A mild and healthy curry with spinach and sweet corn.',
        servings: 3,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvx8rdjI4H66OIZrbsJ7TOu6jY-ICdB0XD6ULM0NdM3JbBHf2-Ah9oeMxBZrns8mfIK6JWiLOyD89Xp6zZly5RUV9vj-frnmku3vv0uFzREu84Sf1YsPn9WBmJFnowobq5oftKRYBhWoo0/s1600/IMG_20171005_144223.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Spinach', quantity: 400, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 0.23 },
            { name: 'Sweet Corn', quantity: 150, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 0.86 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Cream', quantity: 30, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Cooking Oil', quantity: 1, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r029',
        name: 'Vegetable Spring Rolls',
        description: 'Crispy fried rolls filled with stir-fried vegetables.',
        servings: 2,
        image: 'https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg',
        category: 'veg',
        ingredients: [
            { name: 'Spring Roll Wrappers', quantity: 8, unit: 'sheets', costPerUnit: 5.0, caloriesPerUnit: 80 },
            { name: 'Cabbage', quantity: 150, unit: 'g', costPerUnit: 0.02, caloriesPerUnit: 0.25 },
            { name: 'Carrots', quantity: 1, unit: 'large', costPerUnit: 6.0, caloriesPerUnit: 25 },
            { name: 'Bell Pepper', quantity: 0.5, unit: 'large', costPerUnit: 9.0, caloriesPerUnit: 15 },
            { name: 'Soy Sauce', quantity: 1, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil (for frying)', quantity: 150, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 },
            { name: 'Sweet Chili Sauce', quantity: 50, unit: 'ml', costPerUnit: 0.2, caloriesPerUnit: 1.5 }
        ]
    },
    {
        id: 'r030',
        name: 'Paneer Tikka',
        description: 'Marinated paneer cubes grilled to perfection.',
        servings: 2,
        image: 'https://orders.popskitchen.in/storage/2024/09/image-358.png',
        category: 'veg',
        ingredients: [
            { name: 'Paneer', quantity: 200, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 3.0 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Capsicum', quantity: 1, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Tandoori Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Lemon', quantity: 0.5, unit: 'piece', costPerUnit: 3.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r031',
        name: 'Vegetable Pakoras',
        description: 'Crispy deep-fried fritters made with mixed vegetables and gram flour.',
        servings: 3,
        image: 'https://www.harighotra.co.uk/images/recipes/hero/vegetable-pakora-hero.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Gram Flour (Besan)', quantity: 150, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.8 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Potatoes', quantity: 1, unit: 'small', costPerUnit: 2.0, caloriesPerUnit: 30 },
            { name: 'Spinach', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 0.23 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Ginger', quantity: 0.5, unit: 'inch', costPerUnit: 2.0, caloriesPerUnit: 2 },
            { name: 'Cooking Oil (for frying)', quantity: 200, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r032',
        name: 'Baingan Bharta',
        description: 'Smoky roasted eggplant mash cooked with spices.',
        servings: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Baigan_Bharta_from_Nagpur.JPG',
        category: 'veg',
        ingredients: [
            { name: 'Eggplant (Large)', quantity: 1, unit: 'piece', costPerUnit: 25.0, caloriesPerUnit: 100 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil', quantity: 1.5, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 },
            { name: 'Coriander Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r033',
        name: 'Vegetable Fried Rice',
        description: 'Quick and easy stir-fried rice with assorted vegetables.',
        servings: 2,
        image: 'https://images.getrecipekit.com/20220904015448-veg-20fried-20rice.png?aspect_ratio=16:9&quality=90&',
        category: 'veg',
        ingredients: [
            { name: 'Cooked Rice', quantity: 300, unit: 'g', costPerUnit: 0.07, caloriesPerUnit: 1.3 },
            { name: 'Carrots', quantity: 0.5, unit: 'medium', costPerUnit: 3.0, caloriesPerUnit: 12 },
            { name: 'Peas', quantity: 50, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.8 },
            { name: 'Spring Onion', quantity: 0.5, unit: 'bunch', costPerUnit: 7.0, caloriesPerUnit: 10 },
            { name: 'Soy Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Sesame Oil', quantity: 0.5, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 45 },
            { name: 'Garlic', quantity: 2, unit: 'cloves', costPerUnit: 0.4, caloriesPerUnit: 4 }
        ]
    },
    {
        id: 'r034',
        name: 'Besan Cheela (Savory Pancakes)',
        description: 'Nutritious and quick savory pancakes made from gram flour.',
        servings: 2,
        image: 'https://www.kuchpakrahahai.in/wp-content/uploads/2023/04/Chickpea-flour-pancakes-vegan.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Gram Flour (Besan)', quantity: 100, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.8 },
            { name: 'Onion', quantity: 0.25, unit: 'medium', costPerUnit: 2.0, caloriesPerUnit: 10 },
            { name: 'Tomato', quantity: 0.25, unit: 'medium', costPerUnit: 1.75, caloriesPerUnit: 5 },
            { name: 'Green Chilies', quantity: 1, unit: 'piece', costPerUnit: 0.5, caloriesPerUnit: 2 },
            { name: 'Coriander Leaves', quantity: 0.25, unit: 'bunch', costPerUnit: 2.5, caloriesPerUnit: 2 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 },
            { name: 'Turmeric Powder', quantity: 0.25, unit: 'tsp', costPerUnit: 0.25, caloriesPerUnit: 0.5 }
        ]
    },
    {
        id: 'r035',
        name: 'Mushroom Peas Curry',
        description: 'A delightful combination of mushrooms and green peas in a rich gravy.',
        servings: 3,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/matar-mushroom.jpg',
        category: 'veg',
        ingredients: [
            { name: 'Mushrooms', quantity: 200, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 0.22 },
            { name: 'Green Peas', quantity: 150, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.8 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Cream', quantity: 30, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 }
        ]
    },

    // --- New Non-Vegetarian Recipes (20) ---
    {
        id: 'r036',
        name: 'Butter Chicken',
        description: 'Rich and creamy tomato-based chicken curry.',
        servings: 4,
        image: 'https://www.shemins.com/wp-content/uploads/2017/05/Shemins-Butter-Chicken-LR.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast', quantity: 600, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Tomatoes', quantity: 400, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.18 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Cashews', quantity: 30, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Butter', quantity: 70, unit: 'g', costPerUnit: 0.7, caloriesPerUnit: 7.0 },
            { name: 'Cream', quantity: 100, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 2, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r037',
        name: 'Chicken Tikka Masala',
        description: 'Marinated chicken pieces in a spiced curry sauce.',
        servings: 4,
        image: 'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast', quantity: 500, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Yogurt', quantity: 150, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Tomatoes', quantity: 300, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.18 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Tandoori Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 }
        ]
    },
    {
        id: 'r038',
        name: 'Mutton Rogan Josh',
        description: 'A classic Kashmiri lamb curry, rich in flavor and color.',
        servings: 4,
        image: 'https://static.toiimg.com/thumb/53192600.cms?width=1200&height=900',
        category: 'non-veg',
        ingredients: [
            { name: 'Mutton (Lamb)', quantity: 500, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Yogurt', quantity: 150, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Kashmiri Chili Powder', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 20 },
            { name: 'Fennel Powder', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Mustard Oil', quantity: 3, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r039',
        name: 'Fish Curry (Goan Style)',
        description: 'Tangy and spicy fish curry with coconut milk.',
        servings: 3,
        image: 'https://www.celebrationinmykitchen.com/uploads/4/8/6/2/48622077/fish-curry1_orig.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Fish Fillets (Kingfish/Pomfret)', quantity: 400, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 1.2 },
            { name: 'Coconut Milk', quantity: 200, unit: 'ml', costPerUnit: 0.25, caloriesPerUnit: 2.3 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Tamarind Paste', quantity: 1, unit: 'tbsp', costPerUnit: 6.0, caloriesPerUnit: 15 },
            { name: 'Red Chili Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 }
        ]
    },
    {
        id: 'r040',
        name: 'Egg Curry',
        description: 'Boiled eggs cooked in a flavorful onion-tomato gravy.',
        servings: 3,
        image: 'https://images.services.kitchenstories.io/qxU0BGK_o190HTKyrVkTEFf-cc0=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Eggs (boiled)', quantity: 4, unit: 'pieces', costPerUnit: 6.0, caloriesPerUnit: 70 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r041',
        name: 'Chicken Biryani',
        description: 'A classic Indian dish of aromatic basmati rice and chicken cooked with spices.',
        servings: 4,
        image: 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 500, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Basmati Rice', quantity: 400, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Onion', quantity: 2, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Biryani Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 30 },
            { name: 'Ghee', quantity: 2, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 }
        ]
    },
    {
        id: 'r042',
        name: 'Chicken Korma',
        description: 'Mild and creamy chicken curry with a rich, nutty gravy.',
        servings: 4,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chicken-korma-recipe.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast', quantity: 500, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cashews', quantity: 20, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 1.5, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Almonds (blanched)', quantity: 20, unit: 'g', costPerUnit: 2.5, caloriesPerUnit: 5.8 }
        ]
    },
    {
        id: 'r043',
        name: 'Chicken Do Pyaza',
        description: 'Chicken cooked with a generous amount of onions, added at different stages.',
        servings: 4,
        image: 'https://sinfullyspicy.com/wp-content/uploads/2023/05/1200-by-1200-images-1.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 500, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion', quantity: 3, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomatoes', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Powder', quantity: 2, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Red Chili Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Cooking Oil', quantity: 3, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r044',
        name: 'Chicken 65',
        description: 'Spicy, deep-fried chicken appetizer from South India.',
        servings: 3,
        image: 'https://paattiskitchen.com/wp-content/uploads/2023/05/kmc_20230501_131310.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 400, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 1.65 },
            { name: 'Corn Flour', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.5 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Curry Leaves', quantity: 15, unit: 'leaves', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'Red Chili Powder', quantity: 2, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Yogurt', quantity: 50, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cooking Oil (for frying)', quantity: 200, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r045',
        name: 'Mutton Biryani',
        description: 'Rich and aromatic rice dish layered with tender mutton and spices.',
        servings: 4,
        image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Mutton (bone-in)', quantity: 500, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Basmati Rice', quantity: 400, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Onion', quantity: 2, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Biryani Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 30 },
            { name: 'Mint Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r046',
        name: 'Chicken Seekh Kebab',
        description: 'Spicy minced chicken skewers grilled or pan-fried.',
        servings: 3,
        image: 'https://vaya.in/recipes/wp-content/uploads/2019/01/Chicken-Seekh-Kabab.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Minced Chicken', quantity: 400, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Green Chilies', quantity: 3, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Coriander Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 },
            { name: 'Garam Masala', quantity: 1.5, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Breadcrumbs', quantity: 30, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.8 }
        ]
    },
    {
        id: 'r047',
        name: 'Prawn Curry',
        description: 'Delicious prawn curry with a rich, spiced gravy.',
        servings: 3,
        image: 'https://i.ytimg.com/vi/aAy3nW9SiPA/maxresdefault.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Prawns (Shrimp)', quantity: 400, unit: 'g', costPerUnit: 0.7, caloriesPerUnit: 1.0 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Coconut Milk', quantity: 150, unit: 'ml', costPerUnit: 0.25, caloriesPerUnit: 2.3 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Red Chili Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Tamarind Paste', quantity: 0.5, unit: 'tbsp', costPerUnit: 6.0, caloriesPerUnit: 15 }
        ]
    },
    {
        id: 'r048',
        name: 'Chicken Kadhai',
        description: 'Chicken cooked with bell peppers and onions in a wok-like pan.',
        servings: 4,
        image: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Kadai-Chicken-2-3.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 600, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Capsicum (Bell Pepper)', quantity: 2, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Tomatoes', quantity: 3, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Seeds (whole)', quantity: 1, unit: 'tbsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Cooking Oil', quantity: 3, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r049',
        name: 'Chicken Lollipop',
        description: 'Frenched chicken drumettes deep-fried and tossed in a spicy sauce.',
        servings: 3,
        image: 'https://www.cafegoldenfeast.com/wp-content/uploads/2025/01/Chicken-Lollipop.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Lollipops', quantity: 6, unit: 'pieces', costPerUnit: 30.0, caloriesPerUnit: 150 },
            { name: 'All-Purpose Flour', quantity: 50, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Corn Flour', quantity: 30, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.5 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Soy Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Red Chili Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 15 },
            { name: 'Cooking Oil (for frying)', quantity: 250, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r050',
        name: 'Hyderabadi Chicken Dum Biryani',
        description: 'Authentic slow-cooked chicken biryani from Hyderabad.',
        servings: 5,
        image: 'https://vismaifood.com/storage/app/uploads/public/6a7/ddf/c53/thumb__1200_0_0_0_auto.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 750, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Basmati Rice', quantity: 500, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Onions (fried)', quantity: 3, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Yogurt', quantity: 150, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Biryani Masala', quantity: 3, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 30 },
            { name: 'Saffron Milk', quantity: 50, unit: 'ml', costPerUnit: 20.0, caloriesPerUnit: 50 }
        ]
    },
    {
        id: 'r051',
        name: 'Goan Prawn Fry',
        description: 'Spicy pan-fried prawns, a simple Goan delicacy.',
        servings: 2,
        image: 'https://i.ytimg.com/vi/dAxsANRIIhc/maxresdefault.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Prawns (Shrimp)', quantity: 300, unit: 'g', costPerUnit: 0.7, caloriesPerUnit: 1.0 },
            { name: 'Red Chili Powder', quantity: 1, unit: 'tbsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 },
            { name: 'Lemon', quantity: 0.5, unit: 'piece', costPerUnit: 3.0, caloriesPerUnit: 5 },
            { name: 'Semolina (Rava)', quantity: 30, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Cooking Oil (for frying)', quantity: 50, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r052',
        name: 'Tandoori Chicken',
        description: 'Yogurt and spice marinated chicken, traditionally cooked in a tandoor.',
        servings: 4,
        image: 'https://static01.nyt.com/images/2024/05/16/multimedia/fs-tandoori-chicken-hmjq/fs-tandoori-chicken-hmjq-threeByTwoMediumAt2X.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Drumsticks/Thighs', quantity: 4, unit: 'pieces', costPerUnit: 40.0, caloriesPerUnit: 200 },
            { name: 'Yogurt', quantity: 150, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Tandoori Masala', quantity: 3, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Lemon', quantity: 1, unit: 'piece', costPerUnit: 5.0, caloriesPerUnit: 10 },
            { name: 'Red Food Color (optional)', quantity: 1, unit: 'pinch', costPerUnit: 0.5, caloriesPerUnit: 0 },
            { name: 'Cooking Oil', quantity: 1, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r053',
        name: 'Kerala Fish Moilee',
        description: 'Mild and creamy coconut-based fish stew from Kerala.',
        servings: 3,
        image: 'https://rupal-bhatikar.com/wp-content/uploads/2022/06/DSC04830_1.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Fish Fillets (Kingfish/Pomfret)', quantity: 400, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 1.2 },
            { name: 'Coconut Milk', quantity: 250, unit: 'ml', costPerUnit: 0.25, caloriesPerUnit: 2.3 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Green Chilies', quantity: 3, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Ginger', quantity: 1, unit: 'inch', costPerUnit: 4.0, caloriesPerUnit: 5 },
            { name: 'Curry Leaves', quantity: 10, unit: 'leaves', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r054',
        name: 'Andhra Chicken Curry',
        description: 'Fiery and flavorful chicken curry from Andhra Pradesh.',
        servings: 4,
        image: 'https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 500, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Red Chili Powder', quantity: 2.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Coriander Powder', quantity: 2, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Curry Leaves', quantity: 15, unit: 'leaves', costPerUnit: 1.0, caloriesPerUnit: 2 }
        ]
    },
    {
        id: 'r055',
        name: 'Chettinad Chicken Curry',
        description: 'Spicy and aromatic chicken curry from Tamil Nadu with unique spices.',
        servings: 4,
        image: 'https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Chettinad-500x375.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 500, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomatoes', quantity: 2, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Coconut (grated)', quantity: 50, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 3.5 },
            { name: 'Dry Red Chilies', quantity: 10, unit: 'pieces', costPerUnit: 2.0, caloriesPerUnit: 10 },
            { name: 'Fennel Seeds', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Black Pepper Corns', quantity: 1, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r056',
        name: 'Chicken Majestic',
        description: 'Crispy fried chicken strips tossed in a spicy, tangy yogurt-based sauce.',
        servings: 3,
        image: 'https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Majestic.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast', quantity: 400, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Curry Leaves', quantity: 15, unit: 'leaves', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'Green Chilies', quantity: 4, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Soy Sauce', quantity: 1, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil (for frying)', quantity: 150, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r057',
        name: 'Mutton Keema Masala',
        description: 'Minced mutton cooked with aromatic spices and green peas.',
        servings: 4,
        image: 'https://jalojog.com/wp-content/uploads/2024/04/Mutton_Keema_Masala.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Minced Mutton (Lamb)', quantity: 400, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'large', costPerUnit: 10.0, caloriesPerUnit: 25 },
            { name: 'Green Peas', quantity: 100, unit: 'g', costPerUnit: 0.08, caloriesPerUnit: 0.8 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Garam Masala', quantity: 1.5, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r058',
        name: 'Chicken Malai Tikka',
        description: 'Creamy, succulent grilled chicken marinated in yogurt and cream.',
        servings: 3,
        image: 'https://i.ytimg.com/vi/9WM7NdyXEYE/maxresdefault.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 400, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 1.65 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Cashew Paste', quantity: 20, unit: 'g', costPerUnit: 2.5, caloriesPerUnit: 5.5 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Green Cardamom Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 2 },
            { name: 'White Pepper Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 2 }
        ]
    },
    {
        id: 'r059',
        name: 'Fish Fry (Tawa/Pan)',
        description: 'Marinated fish pieces pan-fried until crispy.',
        servings: 2,
        image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/02/fish-fry-1.jpeg',
        category: 'non-veg',
        ingredients: [
            { name: 'Fish Fillets (Pomfret/Surmai)', quantity: 300, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 1.2 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Red Chili Powder', quantity: 1, unit: 'tbsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 },
            { name: 'Lemon Juice', quantity: 1, unit: 'tbsp', costPerUnit: 3.0, caloriesPerUnit: 5 },
            { name: 'Rice Flour', quantity: 20, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Cooking Oil (for frying)', quantity: 50, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r060',
        name: 'Chicken Kathi Roll',
        description: 'Spiced chicken tikka wrapped in a flaky paratha.',
        servings: 2,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 200, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Paratha (ready-made)', quantity: 2, unit: 'pieces', costPerUnit: 15.0, caloriesPerUnit: 250 },
            { name: 'Onion (sliced)', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Capsicum (sliced)', quantity: 0.5, unit: 'medium', costPerUnit: 5.0, caloriesPerUnit: 10 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tsp', costPerUnit: 3.0, caloriesPerUnit: 10 },
            { name: 'Chaat Masala', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Mint Chutney', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 }
        ]
    },
    {
        id: 'r061',
        name: 'Mughlai Chicken',
        description: 'Rich, aromatic, and creamy chicken curry, fit for royalty.',
        servings: 4,
        image: 'https://www.whiskaffair.com/wp-content/uploads/2024/01/Mughlai-Chicken-Stew-2-3.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 600, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion (fried)', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Cashews', quantity: 30, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cream', quantity: 70, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Green Cardamom', quantity: 5, unit: 'pieces', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Ghee', quantity: 3, unit: 'tbsp', costPerUnit: 15.0, caloriesPerUnit: 90 }
        ]
    },
    {
        id: 'r062',
        name: 'Bhoona Gosht (Mutton)',
        description: 'Slow-cooked mutton with intense, dry-roasted spices.',
        servings: 4,
        image: 'https://spiceeats.com/wp-content/uploads/2020/07/Bhuna-Mutton.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Mutton (Lamb)', quantity: 500, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Onion', quantity: 3, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Tomatoes', quantity: 3, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Powder', quantity: 2.5, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Cumin Powder', quantity: 1.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Cooking Oil', quantity: 4, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r063',
        name: 'Chili Chicken (Dry)',
        description: 'Popular Indo-Chinese stir-fried chicken with bell peppers and onions.',
        servings: 3,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 400, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 1.65 },
            { name: 'Capsicum', quantity: 1, unit: 'large', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Onion', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Soy Sauce', quantity: 3, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Chili Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 15 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Spring Onion', quantity: 0.5, unit: 'bunch', costPerUnit: 7.0, caloriesPerUnit: 10 }
        ]
    },
    {
        id: 'r064',
        name: 'Chicken Schnitzel',
        description: 'Crispy pan-fried chicken cutlets, a European classic.',
        servings: 2,
        image: 'https://simplehomeedit.com/wp-content/uploads/2020/02/Freezer-Friendly-Chicken-Schnitzel-1.webp',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken Breast (thinly pounded)', quantity: 2, unit: 'pieces', costPerUnit: 80.0, caloriesPerUnit: 250 },
            { name: 'Breadcrumbs', quantity: 100, unit: 'g', costPerUnit: 0.1, caloriesPerUnit: 3.8 },
            { name: 'Egg', quantity: 1, unit: 'large', costPerUnit: 6.0, caloriesPerUnit: 70 },
            { name: 'All-Purpose Flour', quantity: 50, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Lemon', quantity: 0.5, unit: 'piece', costPerUnit: 3.0, caloriesPerUnit: 5 },
            { name: 'Salt', quantity: 0.5, unit: 'tsp', costPerUnit: 0.1, caloriesPerUnit: 0 },
            { name: 'Cooking Oil (for shallow frying)', quantity: 100, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r065',
        name: 'Lamb Chops (Grilled)',
        description: 'Tender lamb chops marinated and grilled to perfection.',
        servings: 2,
        image: 'https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG',
        category: 'non-veg',
        ingredients: [
            { name: 'Lamb Chops', quantity: 400, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 3.0 },
            { name: 'Yogurt', quantity: 50, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Red Chili Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Cumin Powder', quantity: 1, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Lemon Juice', quantity: 1, unit: 'tbsp', costPerUnit: 3.0, caloriesPerUnit: 5 },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r066',
        name: 'Crispy Honey Chili Potatoes',
        description: 'Fried potato strips tossed in a sweet and spicy honey chili sauce.',
        servings: 2,
        image: 'https://static.toiimg.com/photo/52532656.cms',
        category: 'non-veg', // Can be veg too, but often served at non-veg restaurants
        ingredients: [
            { name: 'Potatoes', quantity: 300, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 0.77 },
            { name: 'Corn Flour', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.5 },
            { name: 'Honey', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 60 },
            { name: 'Chili Garlic Sauce', quantity: 2, unit: 'tbsp', costPerUnit: 8.0, caloriesPerUnit: 15 },
            { name: 'Soy Sauce', quantity: 1, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Sesame Seeds', quantity: 1, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 10 },
            { name: 'Cooking Oil (for frying)', quantity: 200, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r067',
        name: 'Chicken Spring Rolls',
        description: 'Crispy fried rolls filled with stir-fried chicken and vegetables.',
        servings: 2,
        image: 'https://www.manusmenu.com/wp-content/uploads/2015/01/1-Chicken-Spring-Rolls-9-1-of-1.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Spring Roll Wrappers', quantity: 8, unit: 'sheets', costPerUnit: 5.0, caloriesPerUnit: 80 },
            { name: 'Minced Chicken', quantity: 150, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Cabbage', quantity: 50, unit: 'g', costPerUnit: 0.02, caloriesPerUnit: 0.25 },
            { name: 'Carrots', quantity: 0.5, unit: 'medium', costPerUnit: 3.0, caloriesPerUnit: 12 },
            { name: 'Soy Sauce', quantity: 1, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil (for frying)', quantity: 150, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 },
            { name: 'Sweet Chili Sauce', quantity: 50, unit: 'ml', costPerUnit: 0.2, caloriesPerUnit: 1.5 }
        ]
    },
    {
        id: 'r068',
        name: 'Chicken Schezwan Fried Rice',
        description: 'Spicy and flavorful fried rice with chicken and Schezwan sauce.',
        servings: 2,
        image: 'https://theyummydelights.com/wp-content/uploads/2024/03/schezwan-chicken-fried-rice.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Cooked Rice', quantity: 300, unit: 'g', costPerUnit: 0.07, caloriesPerUnit: 1.3 },
            { name: 'Boneless Chicken', quantity: 100, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Schezwan Sauce (ready-made)', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 40 },
            { name: 'Carrots', quantity: 0.5, unit: 'medium', costPerUnit: 3.0, caloriesPerUnit: 12 },
            { name: 'Spring Onion', quantity: 0.5, unit: 'bunch', costPerUnit: 7.0, caloriesPerUnit: 10 },
            { name: 'Soy Sauce', quantity: 1, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r069',
        name: 'Fish Koliwada',
        description: 'Crispy fried fish appetizer with a spicy red coating, popular in Mumbai.',
        servings: 3,
        image: 'https://c.ndtvimg.com/4nbi2dk8_fish-fry_625x300_13_July_18.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Fish Fillets (Boneless)', quantity: 400, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 1.2 },
            { name: 'Ginger-Garlic Paste', quantity: 1.5, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Red Chili Powder', quantity: 2, unit: 'tbsp', costPerUnit: 1.0, caloriesPerUnit: 4 },
            { name: 'Gram Flour (Besan)', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.8 },
            { name: 'Rice Flour', quantity: 30, unit: 'g', costPerUnit: 0.04, caloriesPerUnit: 3.6 },
            { name: 'Lemon', quantity: 1, unit: 'piece', costPerUnit: 5.0, caloriesPerUnit: 10 },
            { name: 'Cooking Oil (for deep frying)', quantity: 250, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r070',
        name: 'Egg Bhurji (Scrambled Eggs)',
        description: 'Spicy Indian-style scrambled eggs, great for breakfast or a quick meal.',
        servings: 2,
        image: 'https://www.seriouseats.com/thmb/_UpZJf-wE0Vr5jNOpBPPC_FyzcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anda-bhurji-spicy-indian-scrambled-eggs-recipe-step-06-b861178e6c5546559667743aa64a187f.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Eggs', quantity: 4, unit: 'pieces', costPerUnit: 6.0, caloriesPerUnit: 70 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Coriander Leaves', quantity: 0.5, unit: 'bunch', costPerUnit: 5.0, caloriesPerUnit: 5 },
            { name: 'Turmeric Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 0.5, caloriesPerUnit: 1 },
            { name: 'Cooking Oil', quantity: 1, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r071',
        name: 'Chicken Reshmi Kebab',
        description: 'Melt-in-your-mouth chicken kebabs with a creamy, subtle flavor.',
        servings: 3,
        image: 'https://www.scratchingcanvas.com/wp-content/uploads/2021/05/Chicken-Reshmi-Kabab.3i.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 400, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Yogurt', quantity: 50, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Cashew Paste', quantity: 20, unit: 'g', costPerUnit: 2.5, caloriesPerUnit: 5.5 },
            { name: 'White Pepper Powder', quantity: 0.5, unit: 'tsp', costPerUnit: 1.0, caloriesPerUnit: 2 }
        ]
    },
    {
        id: 'r072',
        name: 'Mutton Korma',
        description: 'A rich, flavorful, and creamy mutton curry with a blend of spices.',
        servings: 4,
        image: 'https://theartisticcook.com/wp-content/uploads/2023/06/muttonkorma-latest1-1.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Mutton (Lamb)', quantity: 500, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Onion', quantity: 2, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Yogurt', quantity: 150, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Cashews', quantity: 25, unit: 'g', costPerUnit: 2.0, caloriesPerUnit: 5.5 },
            { name: 'Cream', quantity: 70, unit: 'ml', costPerUnit: 0.4, caloriesPerUnit: 3.5 },
            { name: 'Garam Masala', quantity: 1.5, unit: 'tsp', costPerUnit: 2.0, caloriesPerUnit: 5 },
            { name: 'Saffron Strands', quantity: 5, unit: 'strands', costPerUnit: 10.0, caloriesPerUnit: 0 }
        ]
    },
    {
        id: 'r073',
        name: 'Chicken Handi',
        description: 'Chicken slow-cooked in an earthen pot (handi) with a rich gravy.',
        servings: 4,
        image: 'https://i.ytimg.com/vi/_kkosy25Yuc/maxresdefault.jpg',
        category: 'non-veg',
        ingredients: [
            { name: 'Chicken (bone-in)', quantity: 600, unit: 'g', costPerUnit: 0.25, caloriesPerUnit: 1.8 },
            { name: 'Onion', quantity: 2, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Tomatoes', quantity: 3, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Yogurt', quantity: 100, unit: 'g', costPerUnit: 0.15, caloriesPerUnit: 0.6 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Coriander Powder', quantity: 2, unit: 'tsp', costPerUnit: 1.5, caloriesPerUnit: 5 },
            { name: 'Kasuri Methi', quantity: 1, unit: 'tbsp', costPerUnit: 2.0, caloriesPerUnit: 5 }
        ]
    },
    {
        id: 'r074',
        name: 'Fish Pulao',
        description: 'A flavorful rice dish cooked with fish pieces and spices.',
        servings: 3,
        image: 'https://i.ytimg.com/vi/8VPAXlqVVo4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlW8nUKBXKbPFDFHxnYeNrPKnHXA',
        category: 'non-veg',
        ingredients: [
            { name: 'Fish Fillets', quantity: 300, unit: 'g', costPerUnit: 0.4, caloriesPerUnit: 1.2 },
            { name: 'Basmati Rice', quantity: 300, unit: 'g', costPerUnit: 0.12, caloriesPerUnit: 1.3 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Tomato', quantity: 1, unit: 'medium', costPerUnit: 7.0, caloriesPerUnit: 20 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Green Chilies', quantity: 2, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 },
            { name: 'Cooking Oil', quantity: 2, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 }
        ]
    },
    {
        id: 'r075',
        name: 'Chicken Manchurian Gravy',
        description: 'Fried chicken balls in a thick, savory, and spicy Indo-Chinese gravy.',
        servings: 3,
        image: 'https://static.toiimg.com/thumb/53241077.cms?width=1200&height=900',
        category: 'non-veg',
        ingredients: [
            { name: 'Boneless Chicken', quantity: 300, unit: 'g', costPerUnit: 0.28, caloriesPerUnit: 1.65 },
            { name: 'Corn Flour', quantity: 50, unit: 'g', costPerUnit: 0.05, caloriesPerUnit: 3.5 },
            { name: 'Soy Sauce', quantity: 3, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 5 },
            { name: 'Ginger-Garlic Paste', quantity: 1, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Onion', quantity: 1, unit: 'medium', costPerUnit: 8.0, caloriesPerUnit: 40 },
            { name: 'Capsicum', quantity: 1, unit: 'medium', costPerUnit: 10.0, caloriesPerUnit: 20 },
            { name: 'Cooking Oil (for frying)', quantity: 150, unit: 'ml', costPerUnit: 0.15, caloriesPerUnit: 9.0 }
        ]
    },
    {
        id: 'r076',
        name: 'Mutton Nihari',
        description: 'Slow-cooked flavorful stew with tender mutton, a popular North Indian dish.',
        servings: 4,
        image: 'https://cdn.shopify.com/s/files/1/2446/6407/files/Mutton_Nihari_08.png?v=1654666951',
        category: 'non-veg',
        ingredients: [
            { name: 'Mutton (bone-in)', quantity: 600, unit: 'g', costPerUnit: 0.6, caloriesPerUnit: 2.5 },
            { name: 'Onion (fried)', quantity: 1, unit: 'large', costPerUnit: 15.0, caloriesPerUnit: 50 },
            { name: 'Nihari Masala', quantity: 2, unit: 'tbsp', costPerUnit: 10.0, caloriesPerUnit: 30 },
            { name: 'Ginger-Garlic Paste', quantity: 2, unit: 'tbsp', costPerUnit: 5.0, caloriesPerUnit: 20 },
            { name: 'Wheat Flour (Aata)', quantity: 20, unit: 'g', costPerUnit: 0.03, caloriesPerUnit: 3.4 },
            { name: 'Cooking Oil', quantity: 4, unit: 'tbsp', costPerUnit: 12.0, caloriesPerUnit: 120 },
            { name: 'Green Chilies', quantity: 3, unit: 'pieces', costPerUnit: 1.0, caloriesPerUnit: 5 }
        ]
    }
];



// ----------------------- new --------------------------------

// --- Global State Variables ---
let plannedRecipes = [];
let totalCost = 0;
let totalCalories = 0;
let currentRecipeFilter = 'all'; // 'all', 'veg', 'non-veg'
let currentSearchTerm = ''; // State for search term

// --- DOM Elements ---
const elements = {
    recipeListGrid: document.getElementById('recipe-list'),
    plannedRecipesGrid: document.getElementById('planned-recipes'),
    totalCostSpan: document.getElementById('totalCost'),
    totalCaloriesSpan: document.getElementById('totalCalories'),
    shoppingListDetails: document.getElementById('shopping-list-details'),
    resetPlannerBtn: document.getElementById('resetPlannerBtn'),
    viewPlanBtn: document.getElementById('viewPlanBtn'),
    downloadPlanBtn: document.getElementById('downloadPlanBtn'), // Reference to the download button
    filterButtons: document.querySelectorAll('.filter-button'),
    recipeSearchInput: document.getElementById('recipeSearchInput'),
    mealPlanSection: document.getElementById('meal-plan-section-id')
};


// --- Functions ---

function calculateRecipeCost(recipe) {
    return recipe.ingredients.reduce((sum, ing) => sum + (ing.quantity * ing.costPerUnit), 0);
}

function calculateRecipeCalories(recipe) {
    return recipe.ingredients.reduce((sum, ing) => sum + (ing.quantity * ing.caloriesPerUnit), 0);
}

function renderRecipeCatalog() {
    elements.recipeListGrid.innerHTML = ''; // Clear current recipes

    // Filter by category first
    let filteredByCategory = recipes.filter(recipe => {
        return currentRecipeFilter === 'all' || recipe.category === currentRecipeFilter;
    });

    // Further filter by search term
    let finalFilteredRecipes = filteredByCategory.filter(recipe => {
        const searchTermLower = currentSearchTerm.toLowerCase();
        const nameMatch = recipe.name.toLowerCase().includes(searchTermLower);
        const descriptionMatch = recipe.description.toLowerCase().includes(searchTermLower);
        const ingredientsMatch = recipe.ingredients.some(ing =>
            ing.name.toLowerCase().includes(searchTermLower)
        );
        return nameMatch || descriptionMatch || ingredientsMatch;
    });

    if (finalFilteredRecipes.length === 0) {
        elements.recipeListGrid.innerHTML = '<p class="placeholder-text">No recipes found matching your criteria.</p>';
        return;
    }

    finalFilteredRecipes.forEach(recipe => {
        const recipeCost = calculateRecipeCost(recipe);
        const recipeCalories = calculateRecipeCalories(recipe);

        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <p><strong>Category:</strong> ${recipe.category === 'veg' ? 'Vegetarian 🥦' : 'Non-Vegetarian 🍗'}</p>
            <p>Serves: ${recipe.servings}</p>
            <p class="total-cost">Cost: ₹${recipeCost.toFixed(2)}</p>
            <p class="total-calories">Calories: ${recipeCalories.toFixed(0)} kcal</p>
            <button data-id="${recipe.id}">Add to Plan</button>
        `;
        elements.recipeListGrid.appendChild(recipeCard);

        recipeCard.querySelector('button').addEventListener('click', () => addRecipeToPlan(recipe.id));
    });
}

function addRecipeToPlan(recipeId) {
    const recipeToAdd = recipes.find(recipe => recipe.id === recipeId);
    if (recipeToAdd && !plannedRecipes.some(p => p.id === recipeId)) {
        plannedRecipes.push(recipeToAdd);
        savePlannerState();
        updateUI();
    }
}

function removeRecipeFromPlan(recipeId) {
    plannedRecipes = plannedRecipes.filter(recipe => recipe.id !== recipeId);
    savePlannerState();
    updateUI();
}

function renderPlannedRecipes() {
    elements.plannedRecipesGrid.innerHTML = ''; // Clear current planned recipes

    if (plannedRecipes.length === 0) {
        elements.plannedRecipesGrid.innerHTML = '<p class="placeholder-text">Your meal plan is empty. Add some recipes!</p>';
        return;
    }

    plannedRecipes.forEach(recipe => {
        const recipeCost = calculateRecipeCost(recipe);
        const recipeCalories = calculateRecipeCalories(recipe);

        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card'; // Reusing recipe-card style
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Serves: ${recipe.servings}</p>
            <p class="total-cost">Cost: ₹${recipeCost.toFixed(2)}</p>
            <p class="total-calories">Calories: ${recipeCalories.toFixed(0)} kcal</p>
            <button class="remove-button" data-id="${recipe.id}">Remove</button>
        `;
        elements.plannedRecipesGrid.appendChild(recipeCard);

        recipeCard.querySelector('button').addEventListener('click', () => removeRecipeFromPlan(recipe.id));
    });
}

function updateOverallTotals() {
    totalCost = plannedRecipes.reduce((sum, recipe) => sum + calculateRecipeCost(recipe), 0);
    totalCalories = plannedRecipes.reduce((sum, recipe) => sum + calculateRecipeCalories(recipe), 0);

    elements.totalCostSpan.textContent = totalCost.toFixed(2);
    elements.totalCaloriesSpan.textContent = totalCalories.toFixed(0);

    renderShoppingList();
}

function renderShoppingList() {
    elements.shoppingListDetails.innerHTML = '';
    const shoppingList = {};

    if (plannedRecipes.length === 0) {
        elements.shoppingListDetails.innerHTML = '<li class="placeholder-text">Add recipes to see your shopping list!</li>';
        return;
    }

    plannedRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            const unit = ingredient.unit || 'units'; // Default to 'units' if unit is not specified
            if (shoppingList[ingredient.name]) {
                shoppingList[ingredient.name].quantity += ingredient.quantity;
            } else {
                shoppingList[ingredient.name] = { ...ingredient }; // Clone ingredient object
            }
        });
    });

    for (const ingredientName in shoppingList) {
        const item = shoppingList[ingredientName];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.quantity} ${item.unit || ''}`;
        elements.shoppingListDetails.appendChild(listItem);
    }
}

function savePlannerState() {
    localStorage.setItem('plannedRecipes', JSON.stringify(plannedRecipes));
}

function loadPlannerState() {
    const savedPlannedRecipes = localStorage.getItem('plannedRecipes');
    if (savedPlannedRecipes) {
        plannedRecipes = JSON.parse(savedPlannedRecipes);
    }
}

function resetPlanner() {
    if (confirm('Are you sure you want to reset your entire meal plan? This action cannot be undone.')) {
        plannedRecipes = [];
        savePlannerState();
        updateUI();
        alert('Meal planner has been reset!');
    }
}

// Function to download the meal plan as an HTML file
function downloadMealPlan() {
    if (plannedRecipes.length === 0) {
        alert('Your meal plan is empty. Add some recipes before downloading!');
        return;
    }

    // Generate HTML content similar to openMealPlanInNewTab
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Meal Plan</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; padding: 20px; }
                h1 { color: #4CAF50; text-align: center; margin-bottom: 20px; }
                h2 { color: #3f51b5; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 30px; }
                ul { list-style: none; padding: 0; }
                li { background-color: #f9f9f9; border: 1px solid #ddd; margin-bottom: 10px; padding: 10px; border-radius: 5px; }
                .total-summary { text-align: center; margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 8px; border: 1px solid #c8e6c9; }
                .total-summary p { margin: 5px 0; font-size: 1.1em; font-weight: bold; }
                .recipe-item { margin-bottom: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px; background-color: #fff; }
                .recipe-item h3 { color: #4CAF50; margin-top: 0; }
                .recipe-item p { margin: 3px 0; }
                .shopping-list li { list-style: disc; margin-left: 20px; padding: 2px 0; border: none; background: none; }
            </style>
        </head>
        <body>
            <h1>Your Meal Plan Summary</h1>
            <div class="total-summary">
                <p>Total Estimated Cost: ₹${totalCost.toFixed(2)}</p>
                <p>Total Estimated Calories: ${totalCalories.toFixed(0)} kcal</p>
            </div>

            <h2>Planned Recipes</h2>
            <div class="planned-recipes-list">`;

    if (plannedRecipes.length > 0) {
        plannedRecipes.forEach(recipe => {
            htmlContent += `
                <div class="recipe-item">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <p>Serves: ${recipe.servings}</p>
                    <p>Cost: ₹${calculateRecipeCost(recipe).toFixed(2)}</p>
                    <p>Calories: ${calculateRecipeCalories(recipe).toFixed(0)} kcal</p>
                </div>
            `;
        });
    } else {
        htmlContent += '<p>No recipes planned.</p>';
    }

    htmlContent += `
            </div>

            <h2>Shopping List</h2>
            <ul class="shopping-list">`;

    const shoppingList = {};
    plannedRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (shoppingList[ingredient.name]) {
                shoppingList[ingredient.name].quantity += ingredient.quantity;
            } else {
                shoppingList[ingredient.name] = { ...ingredient };
            }
        });
    });

    if (Object.keys(shoppingList).length > 0) {
        for (const ingredientName in shoppingList) {
            const item = shoppingList[ingredientName];
            htmlContent += `<li>${item.name}: ${item.quantity} ${item.unit || ''}</li>`;
        }
    } else {
        htmlContent += '<li>Shopping list is empty.</li>';
    }

    htmlContent += `
            </ul>
        </body>
        </html>
    `;

    // Create a Blob with HTML content and 'text/html' type
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meal_plan.html'; // Set the filename with .html extension
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the URL object
}


// Function to open the meal plan as an HTML page in a new tab (unchanged)
function openMealPlanInNewTab() {
    if (plannedRecipes.length === 0) {
        alert('Your meal plan is empty. Add some recipes before viewing!');
        return;
    }

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Meal Plan</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; padding: 20px; }
                h1 { color: #4CAF50; text-align: center; margin-bottom: 20px; }
                h2 { color: #3f51b5; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 30px; }
                ul { list-style: none; padding: 0; }
                li { background-color: #f9f9f9; border: 1px solid #ddd; margin-bottom: 10px; padding: 10px; border-radius: 5px; }
                .total-summary { text-align: center; margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 8px; border: 1px solid #c8e6c9; }
                .total-summary p { margin: 5px 0; font-size: 1.1em; font-weight: bold; }
                .recipe-item { margin-bottom: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px; background-color: #fff; }
                .recipe-item h3 { color: #4CAF50; margin-top: 0; }
                .recipe-item p { margin: 3px 0; }
                .shopping-list li { list-style: disc; margin-left: 20px; padding: 2px 0; border: none; background: none; }
            </style>
        </head>
        <body>
            <h1>Your Meal Plan Summary</h1>
            <div class="total-summary">
                <p>Total Estimated Cost: ₹${totalCost.toFixed(2)}</p>
                <p>Total Estimated Calories: ${totalCalories.toFixed(0)} kcal</p>
            </div>

            <h2>Planned Recipes</h2>
            <div class="planned-recipes-list">`;

    if (plannedRecipes.length > 0) {
        plannedRecipes.forEach(recipe => {
            htmlContent += `
                <div class="recipe-item">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <p>Serves: ${recipe.servings}</p>
                    <p>Cost: ₹${calculateRecipeCost(recipe).toFixed(2)}</p>
                    <p>Calories: ${calculateRecipeCalories(recipe).toFixed(0)} kcal</p>
                </div>
            `;
        });
    } else {
        htmlContent += '<p>No recipes planned.</p>';
    }

    htmlContent += `
            </div>

            <h2>Shopping List</h2>
            <ul class="shopping-list">`;

    const shoppingList = {};
    plannedRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (shoppingList[ingredient.name]) {
                shoppingList[ingredient.name].quantity += ingredient.quantity;
            } else {
                shoppingList[ingredient.name] = { ...ingredient };
            }
        });
    });

    if (Object.keys(shoppingList).length > 0) {
        for (const ingredientName in shoppingList) {
            const item = shoppingList[ingredientName];
            htmlContent += `<li>${item.name}: ${item.quantity} ${item.unit || ''}</li>`;
        }
    } else {
        htmlContent += '<li>Shopping list is empty.</li>';
    }

    htmlContent += `
            </ul>
        </body>
        </html>
    `;

    // Open a new window and write the content
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    } else {
        alert('Please allow pop-ups for this website to view the meal plan in a new tab.');
    }
}


// --- Main UI Update Function ---
function updateUI() {
    renderRecipeCatalog();
    renderPlannedRecipes();
    updateOverallTotals();
}

// --- Initialization ---
function initializePlanner() {
    loadPlannerState();
    updateUI();
    console.log("Recipe Planner Initialized!");

    elements.filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            elements.filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentRecipeFilter = button.dataset.category;
            renderRecipeCatalog(); // Re-render after category filter change
        });
    });

    // Event listener for search input
    elements.recipeSearchInput.addEventListener('input', () => {
        currentSearchTerm = elements.recipeSearchInput.value;
        renderRecipeCatalog(); // Re-render after search term change
    });
}

// --- Event Listeners ---
elements.resetPlannerBtn.addEventListener('click', resetPlanner);

// MODIFIED: This now correctly triggers the download function with HTML content
elements.downloadPlanBtn.addEventListener('click', downloadMealPlan);

// This listener remains for opening in a new tab (HTML view)
elements.viewPlanBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior (no scrolling)
    openMealPlanInNewTab(); // Open in new tab
});


// Initialize the application
initializePlanner();