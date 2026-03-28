export type SpiceLevel = "mild" | "medium" | "spicy" | "none";
export type DietaryTag = "vegetarian" | "vegan" | "gluten-free" | "seafood";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  priceNote?: string;
  spiceLevel: SpiceLevel;
  popular?: boolean;
  dietaryTags?: DietaryTag[];
  greatPrice?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { id: "b1", name: "Coke", price: 2.0, spiceLevel: "none" },
      { id: "b2", name: "Diet Coke", price: 2.0, spiceLevel: "none" },
      { id: "b3", name: "Sprite", price: 2.0, spiceLevel: "none" },
      { id: "b4", name: "Hot Tea", price: 1.0, spiceLevel: "none" },
      { id: "b5", name: "Iced Tea", price: 3.0, spiceLevel: "none" },
      {
        id: "b6",
        name: "Thai Iced Tea",
        price: 5.0,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "b7",
        name: "Thai Iced Coffee",
        price: 5.0,
        spiceLevel: "none",
        popular: true,
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: "a1",
        name: "Satay",
        description:
          "Four pieces. Grilled chicken skewers marinated in a light curry and coconut milk, served with peanut sauce and cucumber salad.",
        price: 8.0,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "a2",
        name: "Fish Cake",
        description: "Eight pieces. Ground fish patties with curry.",
        price: 8.0,
        spiceLevel: "mild",
      },
      {
        id: "a3",
        name: "Thai Spring Roll",
        description:
          "Fresh Thai crepes filled with cucumber, bell peppers and tofu served with homemade plum sauce.",
        price: 7.0,
        spiceLevel: "none",
        popular: true,
        dietaryTags: ["vegetarian"],
      },
      {
        id: "a4",
        name: "Shrimp & Veggie Tempura",
        description:
          "Deep fried shrimp and vegetables served with sweet and sour sauce.",
        price: 10.0,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "a5",
        name: "Fried Tofu",
        description:
          "Deep fried tofu served with sweet chili sauce topped with crushed peanuts.",
        price: 7.0,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "a6",
        name: "Thai Egg Rolls",
        description:
          "Includes four rolls. Vegetable and vermicelli filled egg roll served with sweet and sour sauce.",
        price: 6.0,
        spiceLevel: "none",
        popular: true,
        dietaryTags: ["vegetarian"],
      },
      {
        id: "a7",
        name: "Shumai",
        description:
          "Seven pieces. Steamed dumplings filled with shrimp and crab meat served with a sweet ginger sauce.",
        price: 8.0,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "a8",
        name: "Crab Rangoon",
        description:
          "Six pieces. Deep fried wonton skins filled with imitation crab meat, cream cheese and celery, served with sweet and sour sauce.",
        price: 7.0,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "a9",
        name: "Potsticker",
        description:
          "Six pieces. Deep fried dumplings stuffed with chicken and vegetables served with sweet ginger sauce.",
        price: 8.0,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "a10",
        name: "Chive Dumplings",
        description:
          "Three pieces. Pan fried Chinese chive dumplings served with sweet ginger sauce.",
        price: 8.0,
        spiceLevel: "none",
      },
      {
        id: "a11",
        name: "Shrimp Roll",
        description:
          "Four pieces. Deep fried shrimp wrapped in rice paper served with sweet and sour sauce.",
        price: 9.0,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "a12",
        name: "Summer Roll",
        description:
          "Vegetables, herbs and rice noodles wrapped in rice paper served with sweet chili sauce topped with peanuts.",
        price: 8.0,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "a13",
        name: "Garden Pancake",
        description:
          "Thin crust pancake sprinkled with mushroom slices, sweet peppers, carrots and scallions. Served with our own special sauce.",
        price: 8.0,
        spiceLevel: "none",
        dietaryTags: ["vegetarian"],
      },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      {
        id: "s1",
        name: "Tom Yum Soup",
        description:
          "Traditional Thai hot and sour soup with chicken, onions and mushrooms in a lemony broth flavored with herbs, lime leaves, lemongrass and lime juice. Shrimp available for $8.50.",
        price: 7.5,
        spiceLevel: "mild",
        popular: true,
      },
      {
        id: "s2",
        name: "Tomkar Soup",
        description:
          "A spicy savory broth of coconut milk with chicken, onions, mushrooms, tomatoes, galangal root, citrus leaves and lime juice. Shrimp available for $8.50.",
        price: 7.5,
        spiceLevel: "mild",
      },
      {
        id: "s3",
        name: "Vegetable Soup",
        description: "Clear soup with assorted vegetables.",
        price: 7.5,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "s4",
        name: "Wonton Soup",
        description: "Fresh wontons filled with pork in a clear broth.",
        price: 7.5,
        spiceLevel: "none",
      },
      {
        id: "s5",
        name: "P'Oh Thak Soup",
        description:
          "A spicy soup with fresh shrimp, scallops, squid and Thai herbs.",
        price: 13.5,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "s6",
        name: "Chinese Hot & Sour Soup",
        description:
          "Chinese soup with tofu, bamboo shoots and black mushrooms seasoned with chili sauce.",
        price: 7.5,
        spiceLevel: "medium",
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      {
        id: "sa1",
        name: "Cucumber Salad",
        description:
          "Sliced fresh cucumber on a bed of lettuce, topped with onions, carrots, bell pepper and special house dressing.",
        price: 5.95,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "sa2",
        name: "Beef Salad",
        description:
          "Tasty sliced tender beef char broiled, then sprinkled with lemon juice and various spices. Served on a bed of lettuce.",
        price: 13.95,
        spiceLevel: "medium",
      },
      {
        id: "sa3",
        name: "Seafood Salad",
        description:
          "Steamed shrimp, squid, scallops and crab meat, mixed with sliced shallots, lemongrass, tomatoes, ground dried chili and lime juice.",
        price: 14.95,
        spiceLevel: "mild",
        dietaryTags: ["seafood", "gluten-free"],
      },
      {
        id: "sa4",
        name: "Chicken Salad",
        description:
          "Ground chicken tossed with green and red onions, hot peppers, rice powder and lime juice.",
        price: 13.95,
        spiceLevel: "medium",
      },
      {
        id: "sa5",
        name: "Tofu Salad",
        description:
          "Deep-fried sliced tofu mixed with sliced shallots, scallions and lime juice.",
        price: 11.95,
        spiceLevel: "none",
        dietaryTags: ["vegetarian"],
      },
      {
        id: "sa6",
        name: "Yum Woonson Salad",
        description:
          "Tender crystal noodles tossed in lime juice with ground chicken, shrimp, green onions, fresh mushrooms and hot peppers.",
        price: 13.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      {
        id: "n1",
        name: "Pad Thai",
        description:
          "Thin rice noodles stir-fried with bean sprouts, egg, green onions and ground peanuts. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "n2",
        name: "Lard Nar",
        description:
          "Wide rice noodles topped with broccoli in black bean sauce. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
      },
      {
        id: "n3",
        name: "Pad See-Eiw",
        description:
          "Stir-fried wide rice noodles with broccoli. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "n4",
        name: "Drunken Noodles",
        description:
          "Wide rice noodles stir-fried with hot chili peppers, tomatoes, carrots, bamboo shoots, sweet peppers, sweet basil leaves and bean sprouts. Choice of protein.",
        price: 13.95,
        spiceLevel: "mild",
        popular: true,
      },
      {
        id: "n5",
        name: "Peanut Noodles",
        description:
          "Stir-fried rice noodles with carrots, white onions, pea pods and peanut sauce. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
      },
      {
        id: "n6",
        name: "Red Curry Noodles",
        description:
          "Stir-fried rice noodles with sweet bell peppers, sweet basil and special homemade spicy sauce. Choice of protein.",
        price: 13.95,
        spiceLevel: "medium",
      },
      {
        id: "n7",
        name: "Pad Woonsen",
        description:
          "Vermicelli noodles stir-fried with eggs, bean sprouts, carrots, baby corn, mushrooms, onions and tomatoes. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
      },
      {
        id: "n8",
        name: "Yakisoba Thai Style",
        description:
          "Stir-fried rice noodles with zucchini, white onions, sweet peppers, hot peppers and bean sprouts with sesame sauce. Choice of protein.",
        price: 13.95,
        spiceLevel: "mild",
      },
      {
        id: "n9",
        name: "Pad Thai Woon Sen",
        description:
          "Crystal noodles stir-fried with bean sprouts, egg, green onions and ground peanuts. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
      },
      {
        id: "n10",
        name: "Green Curry Noodles",
        description:
          "Stir-fried rice noodles with sweet bell peppers, sweet basil and special homemade spicy sauce. Choice of protein.",
        price: 13.95,
        spiceLevel: "medium",
      },
    ],
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    items: [
      {
        id: "v1",
        name: "Basil Tofu",
        description:
          "Stir-fried with garlic, bell peppers, mushrooms, onions and basil leaves.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "v2",
        name: "Ginger Tofu",
        description:
          "Stir-fried with ginger, onions, black mushrooms and bell peppers.",
        price: 14.95,
        spiceLevel: "mild",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "v3",
        name: "Cashew Tofu",
        description:
          "Stir-fried with tofu, onions, pineapples, carrots, red and green peppers.",
        price: 14.95,
        spiceLevel: "mild",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "v4",
        name: "Pad Ped Tofu",
        description:
          "Stir-fried tofu and red curry with bamboo sprouts and green beans.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "v5",
        name: "Steamed Vegetable Tofu",
        description: "Steamed and mixed vegetables with tofu.",
        price: 14.95,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "v6r",
        name: "Vegetable Red Curry",
        description: "Sauteed vegetables in red curry and coconut milk.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "v6g",
        name: "Vegetable Green Curry",
        description: "Sauteed vegetables in green curry and coconut milk.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        id: "v7",
        name: "Garlic Tofu",
        description:
          "Stir-fried tofu with onion, sweet peppers and mushrooms in spicy chili paste.",
        price: 14.95,
        spiceLevel: "mild",
        dietaryTags: ["vegetarian", "vegan"],
      },
      {
        id: "v8",
        name: "Rama",
        description:
          "Steamed broccoli, carrots and noodles topped with homemade peanut sauce.",
        price: 14.95,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan"],
      },
    ],
  },
  {
    id: "curry",
    name: "Curry",
    items: [
      {
        id: "c1",
        name: "Yellow Curry",
        description:
          "Potatoes, onion and bell peppers in a yellow curry. Choice of protein.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["gluten-free"],
      },
      {
        id: "c2",
        name: "Red Curry",
        description:
          "Bamboo shoots, coconut milk, bell pepper and basil leaves in red curry. Choice of protein.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["gluten-free"],
      },
      {
        id: "c3",
        name: "Green Curry",
        description:
          "Bamboo shoots, coconut milk, bell pepper and basil leaves in green curry. Choice of protein.",
        price: 14.95,
        spiceLevel: "spicy",
        dietaryTags: ["gluten-free"],
      },
      {
        id: "c4",
        name: "Panang Curry",
        description:
          "Red peppers, basil and coconut milk. Choice of protein.",
        price: 14.95,
        spiceLevel: "medium",
        popular: true,
        dietaryTags: ["gluten-free"],
      },
      {
        id: "c5",
        name: "Mus Sa Mon Curry",
        description:
          "Potatoes, peanut and pineapple cubes in a Thai peanut butter sauce. Choice of protein.",
        price: 14.95,
        spiceLevel: "medium",
        dietaryTags: ["gluten-free"],
      },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    items: [
      {
        id: "fr1",
        name: "Vegetable Fried Rice",
        description: "Mixed vegetables, green onions and egg.",
        price: 13.95,
        spiceLevel: "none",
        dietaryTags: ["vegetarian"],
      },
      {
        id: "fr2",
        name: "Thai Fried Rice",
        description:
          "Onions, green onions, carrots and egg. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
        popular: true,
      },
      {
        id: "fr3",
        name: "Spicy Basil Fried Rice",
        description:
          "Onions, basil leaves and carrots. Choice of protein.",
        price: 13.95,
        spiceLevel: "mild",
      },
      {
        id: "fr4",
        name: "Pineapple Fried Rice",
        description: "Pineapple and onions. Choice of protein.",
        price: 13.95,
        spiceLevel: "none",
      },
      {
        id: "fr5",
        name: "Curry Fried Rice",
        description:
          "Curry powder and sweet peppers. Choice of protein.",
        price: 13.95,
        spiceLevel: "mild",
      },
      {
        id: "fr6",
        name: "Crab Meat Fried Rice",
        description:
          "Combination of green peas, white and green onions, carrot and eggs.",
        price: 13.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrees",
    items: [
      {
        id: "e1",
        name: "Basil Stir-Fry",
        description:
          "Stir-fried with garlic, hot peppers, mushrooms, onions, bell peppers and basil leaves in home sauce. Chicken/tofu/veggies $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "medium",
      },
      {
        id: "e2",
        name: "Cashew Stir-Fry",
        description:
          "Stir-fried with cashew nuts, garlic, onions, bell peppers, pineapple, water chestnuts and baby corn. Chicken $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "mild",
      },
      {
        id: "e3",
        name: "Garlic & Pepper",
        description:
          "Stir-fried with garlic, Thai herbs and pepper sauce, served with steamed assorted vegetables. Chicken/tofu/veggies $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "mild",
      },
      {
        id: "e4",
        name: "Ginger Stir-Fry",
        description:
          "Stir-fried with fresh ginger, black mushrooms, bell peppers, onions and scallions in home sauce. Chicken/tofu/veggies $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "mild",
      },
      {
        id: "e5",
        name: "Broccoli Oyster",
        description:
          "Stir-fried with broccoli, baby corn in oyster sauce. Chicken $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "e6",
        name: "5 Stars",
        description:
          "Mixed vegetables with cabbage, baby corn, water chestnut, carrots, pea pods and spicy chili paste sauce. Chicken/tofu/veggies $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "mild",
      },
      {
        id: "e7",
        name: "Sweet & Sour Chicken",
        description:
          "Deep-fried chicken with sweet and sour sauce, carrots, pineapples, bell peppers and tomatoes.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "e8",
        name: "Pineapple Chicken",
        description:
          "Grilled marinated chicken breast in rice honey and soy sauce, garnished with pineapple.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "e9",
        name: "Lemon Grass Beef",
        description:
          "Stir-fried slices of beef with lemon grass, roasted chili peppers, onions, carrots, pea pods and bell peppers in house sauce.",
        price: 15.95,
        spiceLevel: "mild",
      },
      {
        id: "e10",
        name: "Chicken Peanut Sauce",
        description:
          "Stir-fried chicken with peanut sauce served with mixed vegetables.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "e11",
        name: "Chicken Teriyaki",
        description:
          "Grilled chicken marinated in teriyaki sauce served with vegetables.",
        price: 14.95,
        spiceLevel: "none",
      },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    items: [
      {
        id: "sf1",
        name: "Basil Shrimp",
        description:
          "Stir-fried shrimp with mushrooms, garlic, onions, sweet peppers and basil.",
        price: 16.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf2",
        name: "Ginger Shrimp",
        description:
          "Stir-fried shrimp with fresh ginger, black mushrooms, sweet peppers and scallions.",
        price: 16.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf3",
        name: "Pla Rad Pik",
        description: "Deep fried fish, topped with exotic Thai sauce.",
        price: 17.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf4",
        name: "Cashew Shrimp",
        description:
          "Stir-fried shrimp with roasted cashew nuts, onions, baby corn, green peppers, hot dry peppers, pineapple, carrots and scallions.",
        price: 16.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf5",
        name: "Koong Pad Pik Khing",
        description:
          "Traditional Thai curry of shrimp stir-fried with green beans and fresh lemongrass.",
        price: 16.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf6",
        name: "Seafood Combination",
        description:
          "A combination of shrimp, sea scallops, squid, stir-fried in house sauce with baby corn, fresh ginger, basil leaves, carrots and vegetables.",
        price: 17.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sf7",
        name: "Salmon Teriyaki",
        description:
          "Grilled salmon with teriyaki sauce served with salad mixed vegetables.",
        price: 17.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
    ],
  },
  {
    id: "specials",
    name: "Fine Thai Specials",
    items: [
      {
        id: "sp1",
        name: "Basil Duck",
        description: "Roast duck topped with spicy basil sauce.",
        price: 17.95,
        spiceLevel: "medium",
        greatPrice: true,
      },
      {
        id: "sp2",
        name: "Gang Khua Koong",
        description:
          "Sauteed shrimp in delicate red curry paste and coconut milk with onions and pineapples, lime leaves, served with cellophane noodles.",
        price: 17.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "sp3",
        name: "Samsahai",
        description:
          "Chicken, shrimp and scallops stir-fried with baby corn, ginger, black mushrooms, onions, carrots, lobster sauce and sesame oil.",
        price: 17.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sp4",
        name: "Salmon Panang",
        description: "Salmon steamed fresh noodles topped with Panang sauce.",
        price: 17.95,
        spiceLevel: "medium",
        dietaryTags: ["seafood"],
      },
      {
        id: "sp5",
        name: "Garlic Shrimp",
        description:
          "Grilled marinated shrimp with crushed garlic, ground peppers, chopped lemon grass and cilantro, served with steamed vegetables.",
        price: 16.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sp6",
        name: "Garlic Shrimp Casserole",
        description:
          "Stir-fried shrimp with vegetables in bean sauce, served with cellophane noodles.",
        price: 17.95,
        spiceLevel: "none",
        dietaryTags: ["seafood"],
      },
      {
        id: "sp7",
        name: "Scallop Chili Paste",
        description:
          "Pan-fried scallops topped with Thai chili paste, served with steamed vegetables.",
        price: 17.95,
        spiceLevel: "spicy",
        dietaryTags: ["seafood"],
      },
    ],
  },
  {
    id: "asian-dishes",
    name: "Asian Dishes",
    items: [
      {
        id: "ad1",
        name: "Sesame Chicken",
        description:
          "Lightly battered and stir-fried with carrots, onion and sesame seeds in a tangy sweet and sour sauce.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "ad2",
        name: "Orange Chicken",
        description:
          "Breaded and fried chicken tossed in orange sauce served with steamed broccoli.",
        price: 14.95,
        spiceLevel: "none",
      },
      {
        id: "ad3",
        name: "Spicy Mongolian",
        description:
          "Marinated meat or tofu seasoned with special hot sauce, bell peppers, onions and carrots and served with rice.",
        price: 14.65,
        spiceLevel: "medium",
      },
      {
        id: "ad4",
        name: "Kung Pao Delight",
        description:
          "Stir-fried with water chestnuts, mushrooms, onions, green peppers and peanuts in hot Szechwan sauce. Chicken/tofu/veggies $14.95, pork/beef $15.95, shrimp $16.95.",
        price: 14.95,
        spiceLevel: "medium",
      },
      {
        id: "ad5",
        name: "Hunan",
        description:
          "Stir-fried with mushrooms, baby corn, onions and sweet peppers in spicy garlic sauce.",
        price: 14.95,
        spiceLevel: "medium",
      },
    ],
  },
  {
    id: "side-orders",
    name: "Side Orders",
    items: [
      { id: "so1", name: "Side of Rice", price: 2.0, spiceLevel: "none", dietaryTags: ["vegetarian", "vegan", "gluten-free"] },
      { id: "so2", name: "Brown Rice", price: 3.0, spiceLevel: "none", dietaryTags: ["vegetarian", "vegan", "gluten-free"] },
      { id: "so3", name: "Side of Vegetables", price: 3.0, spiceLevel: "none", dietaryTags: ["vegetarian", "vegan", "gluten-free"] },
      { id: "so4", name: "Side of Chicken", price: 3.0, spiceLevel: "none" },
      { id: "so5", name: "Side of Beef", price: 4.0, spiceLevel: "none" },
      { id: "so6", name: "Side of Pork", price: 4.0, spiceLevel: "none" },
      { id: "so7", name: "Side of Shrimp", price: 4.0, spiceLevel: "none", dietaryTags: ["seafood"] },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "d1",
        name: "Thai Custard",
        price: 7.5,
        spiceLevel: "none",
        dietaryTags: ["vegetarian"],
      },
      {
        id: "d2",
        name: "Banana Dumpling",
        price: 7.5,
        spiceLevel: "none",
        dietaryTags: ["vegetarian"],
      },
      {
        id: "d3",
        name: "Taro Pearl on Sweet Coconut Milk",
        price: 7.5,
        spiceLevel: "none",
        dietaryTags: ["vegetarian", "vegan", "gluten-free"],
      },
    ],
  },
];

export const restaurantInfo = {
  name: "Fine Thai",
  tagline: "Authentic Thai Cuisine in Brookfield",
  address: "9305 Ogden Ave, Brookfield, IL 60513",
  phone: "(708) 387-9082",
  phoneHref: "tel:7083879082",
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9305+Ogden+Ave,+Brookfield,+IL+60513",
  orderOnlineUrl:
    "https://www.brookfieldfinethai.com/2q9v8mch/fine-thai-brookfield-60513/order-online",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
    { day: "Friday", hours: "11:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "4:00 PM - 9:00 PM" },
  ],
  pickup: true,
  delivery: true,
  coupon: "Spend $60+ & Save 10%",
};
