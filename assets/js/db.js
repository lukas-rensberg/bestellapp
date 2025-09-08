const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italienisch",
    rating: 4.5,
    deliveryTime: "25-40 min",
    deliveryFee: 2.99,
    minOrder: 15.0,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop",
    category: "pizza",
    popular: true,
  },
  {
    id: 2,
    name: "Burger Barn",
    cuisine: "Amerikanisch",
    rating: 4.3,
    deliveryTime: "20-35 min",
    deliveryFee: 1.99,
    minOrder: 12.0,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
    category: "burger",
    popular: true,
  },
  {
    id: 3,
    name: "Sushi Zen",
    cuisine: "Japanisch",
    rating: 4.7,
    deliveryTime: "30-45 min",
    deliveryFee: 3.99,
    minOrder: 20.0,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=200&fit=crop",
    category: "sushi",
    popular: true,
  },
  {
    id: 4,
    name: "Pasta Perfetto",
    cuisine: "Italienisch",
    rating: 4.4,
    deliveryTime: "25-40 min",
    deliveryFee: 2.49,
    minOrder: 18.0,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=200&fit=crop",
    category: "italian",
    popular: false,
  },
  {
    id: 5,
    name: "Dragon Wok",
    cuisine: "Chinesisch",
    rating: 4.2,
    deliveryTime: "20-35 min",
    deliveryFee: 2.99,
    minOrder: 15.0,
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=200&fit=crop",
    category: "asian",
    popular: false,
  },
  {
    id: 6,
    name: "Taco Fiesta",
    cuisine: "Mexikanisch",
    rating: 4.1,
    deliveryTime: "15-30 min",
    deliveryFee: 1.99,
    minOrder: 10.0,
    image:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400&h=200&fit=crop",
    category: "mexican",
    popular: false,
  },
  {
    id: 7,
    name: "Curry House",
    cuisine: "Indisch",
    rating: 4.6,
    deliveryTime: "30-45 min",
    deliveryFee: 3.49,
    minOrder: 16.0,
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=200&fit=crop",
    category: "asian",
    popular: false,
  },
  {
    id: 8,
    name: "Mediterranean Delights",
    cuisine: "Mediterran",
    rating: 4.3,
    deliveryTime: "25-40 min",
    deliveryFee: 2.99,
    minOrder: 17.0,
    image:
      "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=400&h=200&fit=crop",
    category: "mediterranean",
    popular: false,
  },
];

const menuData = {
  1: {
    categories: ["Pizza", "Pasta", "Salate", "Desserts"],
    items: {
      Pizza: [
        {
          id: 1,
          name: "Pizza Margherita",
          description: "Tomaten, Mozzarella, Basilikum",
          price: 8.5,
          image:
            "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Basilikum", price: 0, type: "remove" },
          ],
        },
        {
          id: 2,
          name: "Pizza Salami",
          description: "Tomaten, Mozzarella, Salami",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
        },
      ],
      Pasta: [
        {
          id: 3,
          name: "Spaghetti Carbonara",
          description: "Spaghetti mit Speck, Ei und Parmesan",
          price: 11.9,
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
        },
      ],
      Salate: [
        {
          id: 4,
          name: "Caesar Salad",
          description: "Römersalat, Parmesan, Croutons",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
        },
      ],
      Desserts: [
        {
          id: 5,
          name: "Tiramisu",
          description: "Klassisches italienisches Dessert",
          price: 4.5,
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  2: {
    categories: ["Burger", "Beilagen", "Getränke"],
    items: {
      Burger: [
        {
          id: 6,
          name: "Classic Burger",
          description: "Rindfleisch, Salat, Tomate, Zwiebel",
          price: 8.9,
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
        },
      ],
      Beilagen: [
        {
          id: 7,
          name: "Pommes Frites",
          description: "Knusprige Kartoffelpommes",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1576107232684-1279f390b5d7?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 8,
          name: "Cola 0,33l",
          description: "Erfrischende Cola",
          price: 2.5,
          image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  3: {
    categories: ["Sushi", "Maki", "Sashimi", "Warme Gerichte", "Getränke"],
    items: {
      Sushi: [
        {
          id: 9,
          name: "Sake Nigiri",
          description: "2 Stück Lachs auf Sushi-Reis",
          price: 4.5,
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
        },
        {
          id: 10,
          name: "Maguro Nigiri",
          description: "2 Stück Thunfisch auf Sushi-Reis",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
        },
        {
          id: 11,
          name: "Ebi Nigiri",
          description: "2 Stück Garnele auf Sushi-Reis",
          price: 4.0,
          image:
            "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
        },
      ],
      Maki: [
        {
          id: 12,
          name: "California Roll",
          description: "8 Stück mit Surimi, Avocado, Gurke",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop",
        },
        {
          id: 13,
          name: "Philadelphia Roll",
          description: "8 Stück mit Lachs, Frischkäse, Gurke",
          price: 8.9,
          image:
            "https://images.unsplash.com/photo-1617196034183-421b4917abd8?w=300&h=200&fit=crop",
        },
        {
          id: 14,
          name: "Spicy Tuna Roll",
          description: "8 Stück mit würzigem Thunfisch, Gurke",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
        },
      ],
      Sashimi: [
        {
          id: 15,
          name: "Lachs Sashimi",
          description: "6 Stück frischer Lachs ohne Reis",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
        },
        {
          id: 16,
          name: "Thunfisch Sashimi",
          description: "6 Stück frischer Thunfisch ohne Reis",
          price: 14.9,
          image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
        },
      ],
      "Warme Gerichte": [
        {
          id: 17,
          name: "Chicken Teriyaki",
          description: "Gegrilltes Hähnchen mit Teriyaki-Sauce und Reis",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
        },
        {
          id: 18,
          name: "Miso Suppe",
          description: "Traditionelle japanische Suppe",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 19,
          name: "Sake 0,3l",
          description: "Traditioneller japanischer Reiswein",
          price: 8.9,
          image:
            "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
        },
        {
          id: 20,
          name: "Grüner Tee",
          description: "Heißer grüner Tee",
          price: 2.5,
          image:
            "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  4: {
    categories: ["Pasta", "Risotto", "Antipasti", "Desserts", "Getränke"],
    items: {
      Pasta: [
        {
          id: 21,
          name: "Penne Arrabbiata",
          description: "Penne mit scharfer Tomatensauce",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
        },
        {
          id: 22,
          name: "Linguine alle Vongole",
          description: "Linguine mit Venusmuscheln in Weißweinsauce",
          price: 13.9,
          image:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&h=200&fit=crop",
        },
        {
          id: 23,
          name: "Fettuccine Alfredo",
          description: "Fettuccine in cremiger Parmesan-Sauce",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
        },
        {
          id: 24,
          name: "Spaghetti Bolognese",
          description: "Spaghetti mit hausgemachter Fleischsauce",
          price: 10.9,
          image:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&h=200&fit=crop",
        },
      ],
      Risotto: [
        {
          id: 25,
          name: "Risotto ai Funghi",
          description: "Cremiges Pilzrisotto",
          price: 12.5,
          image:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop",
        },
        {
          id: 26,
          name: "Risotto ai Frutti di Mare",
          description: "Meeresfrüchte-Risotto",
          price: 15.9,
          image:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop",
        },
      ],
      Antipasti: [
        {
          id: 27,
          name: "Bruschetta",
          description: "Geröstetes Brot mit Tomaten und Basilikum",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=300&h=200&fit=crop",
        },
        {
          id: 28,
          name: "Antipasti Misti",
          description: "Gemischte italienische Vorspeisen",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300&h=200&fit=crop",
        },
      ],
      Desserts: [
        {
          id: 29,
          name: "Panna Cotta",
          description: "Italienisches Sahne-Dessert mit Beerensauce",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop",
        },
        {
          id: 30,
          name: "Cannoli Siciliani",
          description: "Sizilianische Teigrollen mit Ricotta-Füllung",
          price: 4.9,
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 31,
          name: "Chianti 0,75l",
          description: "Italienischer Rotwein",
          price: 18.9,
          image:
            "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=200&fit=crop",
        },
        {
          id: 32,
          name: "Espresso",
          description: "Italienischer Espresso",
          price: 2.2,
          image:
            "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  5: {
    categories: [
      "Hauptgerichte",
      "Suppen",
      "Vorspeisen",
      "Reis & Nudeln",
      "Getränke",
    ],
    items: {
      Hauptgerichte: [
        {
          id: 33,
          name: "Peking Ente",
          description: "Knusprige Ente mit Pfannkuchen und Hoisin-Sauce",
          price: 16.9,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 34,
          name: "Süß-Saures Schweinefleisch",
          description: "Schweinefleisch in süß-saurer Sauce",
          price: 12.5,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 35,
          name: "Kung Pao Hähnchen",
          description: "Würziges Hähnchen mit Erdnüssen",
          price: 11.9,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 36,
          name: "Mapo Tofu",
          description: "Scharfer Tofu in Szechuan-Sauce",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
      ],
      Suppen: [
        {
          id: 37,
          name: "Wan Tan Suppe",
          description: "Traditionelle Suppe mit gefüllten Teigtaschen",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 38,
          name: "Heiß-Saure Suppe",
          description: "Würzige Suppe mit Tofu und Pilzen",
          price: 5.9,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
      ],
      Vorspeisen: [
        {
          id: 39,
          name: "Frühlingsrollen (4 Stück)",
          description: "Knusprige Frühlingsrollen mit süß-saurer Sauce",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 40,
          name: "Gyoza (6 Stück)",
          description: "Gebratene Teigtaschen mit Fleischfüllung",
          price: 6.9,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
      ],
      "Reis & Nudeln": [
        {
          id: 41,
          name: "Gebratener Reis mit Ei",
          description: "Traditionell gebratener Reis mit Rührei",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
        {
          id: 42,
          name: "Lo Mein Nudeln",
          description: "Weiche Nudeln mit Gemüse und Sauce",
          price: 8.9,
          image:
            "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 43,
          name: "Jasmin Tee",
          description: "Aromatischer chinesischer Tee",
          price: 2.5,
          image:
            "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop",
        },
        {
          id: 44,
          name: "Tsingtao Bier 0,33l",
          description: "Chinesisches Bier",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  6: {
    categories: ["Tacos", "Burritos", "Quesadillas", "Nachos", "Getränke"],
    items: {
      Tacos: [
        {
          id: 45,
          name: "Tacos al Pastor (3 Stück)",
          description: "Mariniertes Schweinefleisch mit Ananas",
          price: 8.5,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
        },
        {
          id: 46,
          name: "Tacos de Carnitas (3 Stück)",
          description: "Langsam gegarter Schweinebauch",
          price: 9.0,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
        },
        {
          id: 47,
          name: "Tacos de Pollo (3 Stück)",
          description: "Gegrilltes Hähnchen mit Salsa Verde",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
        },
        {
          id: 48,
          name: "Fish Tacos (3 Stück)",
          description: "Gebratener Fisch mit Krautsalat",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
        },
      ],
      Burritos: [
        {
          id: 49,
          name: "Burrito Grande",
          description: "Rindfleisch, Reis, Bohnen, Käse, Salsa",
          price: 11.9,
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
        },
        {
          id: 50,
          name: "Chicken Burrito",
          description: "Hähnchen, Reis, Bohnen, Guacamole",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
        },
        {
          id: 51,
          name: "Veggie Burrito",
          description: "Schwarze Bohnen, Reis, Gemüse, Käse",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
        },
      ],
      Quesadillas: [
        {
          id: 52,
          name: "Cheese Quesadilla",
          description: "Klassische Käse-Quesadilla",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop",
        },
        {
          id: 53,
          name: "Chicken Quesadilla",
          description: "Mit gegrilltem Hähnchen und Käse",
          price: 8.5,
          image:
            "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop",
        },
      ],
      Nachos: [
        {
          id: 54,
          name: "Nachos Supreme",
          description: "Tortilla-Chips mit Käse, Jalapeños, Sauerrahm",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
        },
        {
          id: 55,
          name: "Loaded Nachos",
          description: "Mit Rindfleisch, Bohnen, Käse, Guacamole",
          price: 12.5,
          image:
            "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 56,
          name: "Margarita 0,3l",
          description: "Klassischer Tequila-Cocktail",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
        },
        {
          id: 57,
          name: "Corona Extra 0,33l",
          description: "Mexikanisches Bier",
          price: 3.9,
          image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  7: {
    categories: ["Curry", "Tandoor", "Biryani", "Vorspeisen", "Getränke"],
    items: {
      Curry: [
        {
          id: 58,
          name: "Chicken Tikka Masala",
          description: "Hähnchen in cremiger Tomaten-Curry-Sauce",
          price: 13.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
        {
          id: 59,
          name: "Lamb Vindaloo",
          description: "Scharfes Lamm-Curry aus Goa",
          price: 15.9,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
        {
          id: 60,
          name: "Palak Paneer",
          description: "Spinat-Curry mit indischem Käse",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
        {
          id: 61,
          name: "Dal Makhani",
          description: "Cremiges schwarzes Linsen-Curry",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
      ],
      Tandoor: [
        {
          id: 62,
          name: "Tandoori Chicken",
          description: "Im Lehmofen gegrilltes Hähnchen",
          price: 14.9,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
        {
          id: 63,
          name: "Seekh Kebab",
          description: "Würzige Lammspieße aus dem Tandoor",
          price: 13.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
        {
          id: 64,
          name: "Naan Brot",
          description: "Traditionelles indisches Fladenbrot",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
        },
      ],
      Biryani: [
        {
          id: 65,
          name: "Chicken Biryani",
          description: "Aromatischer Basmatireis mit Hähnchen",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1563379091339-03246963d999?w=300&h=200&fit=crop",
        },
        {
          id: 66,
          name: "Mutton Biryani",
          description: "Würziger Reis mit Lammfleisch",
          price: 15.5,
          image:
            "https://images.unsplash.com/photo-1563379091339-03246963d999?w=300&h=200&fit=crop",
        },
      ],
      Vorspeisen: [
        {
          id: 67,
          name: "Samosas (4 Stück)",
          description: "Frittierte Teigtaschen mit Kartoffel-Füllung",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
        },
        {
          id: 68,
          name: "Onion Bhaji",
          description: "Frittierte Zwiebelringe in Kichererbsenteig",
          price: 4.9,
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 69,
          name: "Mango Lassi",
          description: "Erfrischendes Joghurt-Getränk mit Mango",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop",
        },
        {
          id: 70,
          name: "Chai Tee",
          description: "Würziger indischer Tee mit Milch",
          price: 2.8,
          image:
            "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop",
        },
      ],
    },
  },
  8: {
    categories: ["Hauptgerichte", "Meze", "Salate", "Gegrilltes", "Getränke"],
    items: {
      Hauptgerichte: [
        {
          id: 71,
          name: "Moussaka",
          description: "Geschichteter Auberginenauflauf mit Hackfleisch",
          price: 13.9,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
        },
        {
          id: 72,
          name: "Gyros mit Tzatziki",
          description: "Gegrilltes Schweinefleisch mit Joghurtsauce",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
        },
        {
          id: 73,
          name: "Souvlaki",
          description: "Gegrillte Fleischspieße mit Pita",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
        },
        {
          id: 74,
          name: "Seafood Paella",
          description: "Spanische Reispfanne mit Meeresfrüchten",
          price: 16.9,
          image:
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
        },
      ],
      Meze: [
        {
          id: 75,
          name: "Hummus",
          description: "Kichererbsenpüree mit Olivenöl",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
        },
        {
          id: 76,
          name: "Dolmades",
          description: "Gefüllte Weinblätter mit Reis",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=300&h=200&fit=crop",
        },
        {
          id: 77,
          name: "Feta mit Oliven",
          description: "Griechischer Käse mit Oliven und Kräutern",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=300&h=200&fit=crop",
        },
      ],
      Salate: [
        {
          id: 78,
          name: "Griechischer Salat",
          description: "Tomaten, Gurken, Oliven, Feta",
          price: 8.5,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
        },
        {
          id: 79,
          name: "Tabouleh",
          description: "Petersiliensalat mit Bulgur und Tomaten",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
        },
      ],
      Gegrilltes: [
        {
          id: 80,
          name: "Gegrillter Oktopus",
          description: "Zarter Oktopus vom Grill mit Zitrone",
          price: 15.5,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
        },
        {
          id: 81,
          name: "Gegrillte Dorade",
          description: "Frische Dorade mit mediterranen Kräutern",
          price: 17.9,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
        },
      ],
      Getränke: [
        {
          id: 82,
          name: "Ouzo 0,2l",
          description: "Griechischer Anisschnaps",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
        },
        {
          id: 83,
          name: "Retsina 0,75l",
          description: "Traditioneller griechischer Weißwein",
          price: 16.9,
          image:
            "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=200&fit=crop",
        },
      ],
    },
  },
};
