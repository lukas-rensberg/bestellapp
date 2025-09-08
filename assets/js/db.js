/**
 * @fileoverview Database containing restaurant and menu data for the ordering app
 * @author Lukas Rensberg
 * @version 1.0.0
 */

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
            "https://images.unsplash.com/photo-1602658014714-26b99d5a45cf?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Salami", price: 2.0, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Salami", price: 0, type: "remove" },
            { name: "Zwiebeln", price: 0.8, type: "add" },
            { name: "Paprika", price: 1.0, type: "add" },
            { name: "Scharfe Peperoni", price: 1.2, type: "add" },
            { name: "Oliven", price: 1.0, type: "add" },
            { name: "Pilze", price: 1.0, type: "add" },
          ],
        },
      ],
      Pasta: [
        {
          id: 3,
          name: "Spaghetti Carbonara",
          description: "Spaghetti mit Speck, Ei und Parmesan",
          price: 11.9,
          image:
            "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Speck", price: 2.0, type: "add" },
            { name: "Extra Ei", price: 1.5, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Speck", price: 0, type: "remove" },
            { name: "Ei", price: 0, type: "remove" },
            { name: "Parmesan", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Römersalat", price: 2.0, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Extra Croutons", price: 1.5, type: "add" },
            { name: "Römersalat", price: 0, type: "remove" },
            { name: "Parmesan", price: 0, type: "remove" },
            { name: "Croutons", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Rindfleisch", price: 2.0, type: "add" },
            { name: "Extra Salat", price: 1.5, type: "add" },
            { name: "Extra Tomate", price: 1.5, type: "add" },
            { name: "Extra Zwiebeln", price: 1.5, type: "add" },
            { name: "Rindfleisch", price: 0, type: "remove" },
            { name: "Salat", price: 0, type: "remove" },
            { name: "Tomate", price: 0, type: "remove" },
            { name: "Zwiebeln", price: 0, type: "remove" },
          ],
        },
      ],
      Beilagen: [
        {
          id: 7,
          name: "Pommes Frites",
          description: "Knusprige Kartoffelpommes",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=300&h=200&fit=crop",
          customizations: [
            { name: "Große Portion", price: 1.5, type: "add" },
            { name: "Süßkartoffelpommes", price: 2.0, type: "add" },
            { name: "Ketchup", price: 0.5, type: "add" },
            { name: "Mayo", price: 0.5, type: "add" },
            { name: "BBQ Sauce", price: 0.7, type: "add" },
            { name: "Salz", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "0,5l Flasche", price: 1.0, type: "add" },
            { name: "Cola Zero", price: 0, type: "add" },
          ],
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
          customizations: [
            { name: "4 Stück", price: 4.0, type: "add" },
            { name: "Extra Wasabi", price: 0.5, type: "add" },
            { name: "Sesam", price: 0.3, type: "add" },
            { name: "Ingwer", price: 0.5, type: "add" },
            { name: "Lachs", price: 0, type: "remove" },
          ],
        },
        {
          id: 10,
          name: "Maguro Nigiri",
          description: "2 Stück Thunfisch auf Sushi-Reis",
          price: 5.5,
          image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Thunfisch", price: 2.0, type: "add" },
            { name: "Thunfisch", price: 0, type: "remove" },
          ],
        },
        {
          id: 11,
          name: "Ebi Nigiri",
          description: "2 Stück Garnele auf Sushi-Reis",
          price: 4.0,
          image:
            "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Garnele", price: 2.0, type: "add" },
            { name: "Garnele", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Surimi", price: 2.0, type: "add" },
            { name: "Surimi", price: 0, type: "remove" },
            { name: "Extra Avocado", price: 2.0, type: "add" },
            { name: "Avocado", price: 0, type: "remove" },
            { name: "Extra Gurke", price: 2.0, type: "add" },
            { name: "Gurke", price: 0, type: "remove" },
          ],
        },
        {
          id: 13,
          name: "Philadelphia Roll",
          description: "8 Stück mit Lachs, Frischkäse, Gurke",
          price: 8.9,
          image:
            "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Lachs", price: 2.0, type: "add" },
            { name: "Lachs", price: 0, type: "remove" },
            { name: "Extra Frischkäse", price: 2.0, type: "add" },
            { name: "Frischkäse", price: 0, type: "remove" },
            { name: "Extra Gurke", price: 2.0, type: "add" },
            { name: "Gurke", price: 0, type: "remove" },
          ],
        },
        {
          id: 14,
          name: "Spicy Tuna Roll",
          description: "8 Stück mit würzigem Thunfisch, Gurke",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Thunfisch", price: 2.0, type: "add" },
            { name: "Thunfisch", price: 0, type: "remove" },
            { name: "Extra Gurke", price: 2.0, type: "add" },
            { name: "Gurke", price: 0, type: "remove" },
          ],
        },
      ],
      Sashimi: [
        {
          id: 15,
          name: "Lachs Sashimi",
          description: "6 Stück frischer Lachs",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Lachs", price: 2.0, type: "add" },
            { name: "Lachs", price: 0, type: "remove" },
          ],
        },
        {
          id: 16,
          name: "Thunfisch Sashimi",
          description: "6 Stück frischer Thunfisch",
          price: 14.9,
          image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Thunfisch", price: 2.0, type: "add" },
            { name: "Thunfisch", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Hähnchen", price: 2.0, type: "add" },
            { name: "Hähnchen", price: 0, type: "remove" },
            { name: "Extra Reis", price: 2.0, type: "add" },
            { name: "Reis", price: 0, type: "remove" },
          ],
        },
        {
          id: 18,
          name: "Miso Suppe",
          description: "Traditionelle japanische Suppe",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Suppe", price: 2.0, type: "add" },
            { name: "Suppe", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Sake", price: 2.0, type: "add" },
            { name: "Sake", price: 0, type: "remove" },
          ],
        },
        {
          id: 20,
          name: "Grüner Tee",
          description: "Heißer grüner Tee",
          price: 2.5,
          image:
            "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Tee", price: 2.0, type: "add" },
            { name: "Tee", price: 0, type: "remove" },
          ],
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
            "https://img.chefkoch-cdn.de/rezepte/540991151409546/bilder/905171/crop-958x539/italienische-penne-all-arabbiata.jpg?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra scharf", price: 0.5, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Extra Basilikum", price: 1.0, type: "add" },
            { name: "Pilze", price: 2.0, type: "add" },
            { name: "Oliven", price: 1.5, type: "add" },
            { name: "Knoblauch", price: 0.8, type: "add" },
          ],
        },
        {
          id: 22,
          name: "Linguine alle Vongole",
          description: "Linguine mit Venusmuscheln in Weißweinsauce",
          price: 13.9,
          image:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Venusmuscheln", price: 3.0, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Extra Knoblauch", price: 0.8, type: "add" },
            { name: "Petersilie", price: 1.0, type: "add" },
            { name: "Chili", price: 0.5, type: "add" },
            { name: "Venusmuscheln", price: 0, type: "remove" },
          ],
        },
        {
          id: 23,
          name: "Fettuccine Alfredo",
          description: "Fettuccine in cremiger Parmesan-Sauce",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1662478839788-7d2898ca66cf?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Extra Sahne", price: 1.0, type: "add" },
            { name: "Hähnchen", price: 3.0, type: "add" },
            { name: "Pilze", price: 2.0, type: "add" },
            { name: "Brokkoli", price: 1.5, type: "add" },
            { name: "Knoblauch", price: 0.8, type: "add" },
          ],
        },
        {
          id: 24,
          name: "Spaghetti Bolognese",
          description: "Spaghetti mit hausgemachter Fleischsauce",
          price: 10.9,
          image:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Fleischsauce", price: 2.0, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Extra Basilikum", price: 1.0, type: "add" },
            { name: "Pilze", price: 2.0, type: "add" },
            { name: "Zwiebeln", price: 1.0, type: "add" },
            { name: "Knoblauch", price: 0.8, type: "add" },
          ],
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
          customizations: [
            { name: "Extra Pilze", price: 2.0, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Trüffelöl", price: 3.0, type: "add" },
            { name: "Petersilie", price: 1.0, type: "add" },
            { name: "Pilze", price: 0, type: "remove" },
          ],
        },
        {
          id: 26,
          name: "Risotto ai Frutti di Mare",
          description: "Meeresfrüchte-Risotto",
          price: 15.9,
          image:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Meeresfrüchte", price: 3.0, type: "add" },
            { name: "Extra Parmesan", price: 1.5, type: "add" },
            { name: "Safran", price: 2.5, type: "add" },
            { name: "Petersilie", price: 1.0, type: "add" },
            { name: "Meeresfrüchte", price: 0, type: "remove" },
          ],
        },
      ],
      Antipasti: [
        {
          id: 27,
          name: "Bruschetta",
          description: "Geröstetes Brot mit Tomaten und Basilikum",
          price: 6.5,
          image:
            "https://images.unsplash.com/photo-1572695157360-1153aaad020b?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Tomaten", price: 1.5, type: "add" },
            { name: "Extra Basilikum", price: 1.0, type: "add" },
            { name: "Mozzarella", price: 2.0, type: "add" },
            { name: "Knoblauch", price: 0.8, type: "add" },
            { name: "Olivenöl", price: 0.5, type: "add" },
            { name: "Tomaten", price: 0, type: "remove" },
          ],
        },
        {
          id: 28,
          name: "Antipasti Misti",
          description: "Gemischte italienische Vorspeisen",
          price: 12.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/842321189504218/bilder/1131189/crop-958x539/antipasti-misti.jpg?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Oliven", price: 2.0, type: "add" },
            { name: "Extra Käse", price: 2.5, type: "add" },
            { name: "Extra Schinken", price: 3.0, type: "add" },
            { name: "Extra Brot", price: 1.5, type: "add" },
            { name: "Trüffelöl", price: 3.0, type: "add" },
            { name: "Oliven", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Beerensauce", price: 1.0, type: "add" },
            { name: "Schokoladensauce", price: 1.5, type: "add" },
            { name: "Vanillesauce", price: 1.0, type: "add" },
            { name: "Frische Beeren", price: 2.0, type: "add" },
            { name: "Minze", price: 0.5, type: "add" },
            { name: "Beerensauce", price: 0, type: "remove" },
          ],
        },
        {
          id: 30,
          name: "Cannoli Siciliani",
          description: "Sizilianische Teigrollen mit Ricotta-Füllung",
          price: 4.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/3906471595499317/bilder/1325975/crop-958x539/cannoli-siciliani-mit-ricotta-schoko-und-pistazienfuellung-brombeer-vanille-minz-granit.jpg?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Ricotta", price: 1.5, type: "add" },
            { name: "Schokoladenstückchen", price: 1.0, type: "add" },
            { name: "Pistazien", price: 1.5, type: "add" },
            { name: "Puderzucker", price: 0.5, type: "add" },
            { name: "Zitronenschale", price: 0.8, type: "add" },
            { name: "Ricotta", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "0,5l Flasche", price: -5.0, type: "add" },
            { name: "1,5l Flasche", price: 8.0, type: "add" },
          ],
        },
        {
          id: 32,
          name: "Espresso",
          description: "Italienischer Espresso",
          price: 2.2,
          image:
            "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=200&fit=crop",
          customizations: [
            { name: "Doppio (doppelt)", price: 1.0, type: "add" },
            { name: "Macchiato", price: 0.5, type: "add" },
            { name: "Zucker", price: 0.2, type: "add" },
            { name: "Milch", price: 0.3, type: "add" },
            { name: "Zimt", price: 0.5, type: "add" },
            { name: "Kakao", price: 0.5, type: "add" },
          ],
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
          customizations: [
            { name: "Extra Peking Ente", price: 2.0, type: "add" },
            { name: "Extra Pfannkuchen", price: 1.5, type: "add" },
            { name: "Extra Hoisin-Sauce", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 34,
          name: "Süß-Saures Schweinefleisch",
          description: "Schweinefleisch in süß-saurer Sauce",
          price: 12.5,
          image:
            "https://img.chefkoch-cdn.de/rezepte/1212251227007141/bilder/1187409/crop-958x539/suess-saures-schweinefleisch-thai-style.jpg?w=300&h=200&fit=crop",
          customizations: [
            {
              name: "Extra Süß-Saures Schweinefleisch",
              price: 2.0,
              type: "add",
            },
            { name: "Extra Ananas", price: 1.5, type: "add" },
            { name: "Extra Paprika", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 35,
          name: "Kung Pao Hähnchen",
          description: "Würziges Hähnchen mit Erdnüssen",
          price: 11.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/486171142687666/bilder/605435/crop-958x539/kung-pao-huhn-1.jpg?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Kung Pao Hähnchen", price: 2.0, type: "add" },
            { name: "Extra Erdnüsse", price: 1.5, type: "add" },
            { name: "Extra Gemüse", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 36,
          name: "Mapo Tofu",
          description: "Scharfer Tofu in Szechuan-Sauce",
          price: 10.5,
          image:
            "https://img.chefkoch-cdn.de/rezepte/3708171560707474/bilder/1566267/crop-958x539/mapo-tofu.jpg",
          customizations: [
            { name: "Extra Mapo Tofu", price: 2.0, type: "add" },
            { name: "Extra Tofu", price: 1.5, type: "add" },
            { name: "Extra Gemüse", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
      ],
      Suppen: [
        {
          id: 37,
          name: "Wan Tan Suppe",
          description: "Traditionelle Suppe mit gefüllten Teigtaschen",
          price: 6.5,
          image:
            "https://img.chefkoch-cdn.de/rezepte/183971079254601/bilder/1382892/crop-958x539/wan-tan-suppe.jpg",
          customizations: [
            { name: "Extra Wan Tan Suppe", price: 2.0, type: "add" },
            { name: "Extra Teigtaschen", price: 1.5, type: "add" },
            { name: "Extra Gemüse", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 38,
          name: "Heiß-Saure Suppe",
          description: "Würzige Suppe mit Tofu und Pilzen",
          price: 5.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/3912941596936554/bilder/1328044/crop-958x539/wuerzig-cremige-shimeji-pilzsuppe.jpg",
          customizations: [
            { name: "Extra Heiß-Saure Suppe", price: 2.0, type: "add" },
            { name: "Extra Tofu", price: 1.5, type: "add" },
            { name: "Extra Pilze", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
      ],
      Vorspeisen: [
        {
          id: 39,
          name: "Frühlingsrollen (4 Stück)",
          description: "Knusprige Frühlingsrollen mit süß-saurer Sauce",
          price: 5.5,
          image:
            "https://img.chefkoch-cdn.de/rezepte/1054511210486367/bilder/535140/crop-958x539/fruehlingsrollen.jpg",
          customizations: [
            {
              name: "Extra Frühlingsrollen (4 Stück)",
              price: 2.0,
              type: "add",
            },
            { name: "6 Stück", price: 1, type: "add" },
            { name: "Extra süß-saure Sauce", price: 0.8, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 40,
          name: "Gyoza (6 Stück)",
          description: "Gebratene Teigtaschen mit Fleischfüllung",
          price: 6.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/1725041281679403/bilder/1489583/crop-958x539/gyoza.jpg",
          customizations: [
            { name: "Extra Gyoza (6 Stück)", price: 2.0, type: "add" },
            { name: "8 Stück", price: 2.5, type: "add" },
            { name: "Vegetarische Füllung", price: 0, type: "add" },
            { name: "Extra Dip", price: 0.8, type: "add" },
          ],
        },
      ],
      "Reis & Nudeln": [
        {
          id: 41,
          name: "Gebratener Reis mit Ei",
          description: "Traditionell gebratener Reis mit Rührei",
          price: 7.5,
          image:
            "https://img.chefkoch-cdn.de/rezepte/1265711231831058/bilder/1510489/crop-958x539/gebratener-reis-mit-ei.jpg",
          customizations: [
            { name: "Extra Gebratener Reis mit Ei", price: 2.0, type: "add" },
            { name: "Extra Ei", price: 1.5, type: "add" },
            { name: "Extra Gemüse", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 42,
          name: "Lo Mein Nudeln",
          description: "Weiche Nudeln mit Gemüse und Sauce",
          price: 8.9,
          image:
            "https://img.chefkoch-cdn.de/rezepte/3129231466181773/bilder/920860/crop-958x539/vegane-lo-mein-nudelpfanne.jpg",
          customizations: [
            { name: "Extra Lo Mein Nudeln", price: 2.0, type: "add" },
            { name: "Extra Gemüse", price: 1.5, type: "add" },
            { name: "Extra Sauce", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
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
            "https://imgs.search.brave.com/WoKTik7w15lw-urzRUln3z4h8wVvCxeGMYyBkOKbKxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L1RzaW5ndGFv/X2JlZXJfYV8yMDE1/LTA0LTA3XzE2LTU2/LTE3LkpQRw",
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
          customizations: [
            {
              name: "Extra Tacos al Pastor (3 Stück)",
              price: 2.0,
              type: "add",
            },
            { name: "5 Stück", price: 3.0, type: "add" },
            { name: "Extra Ananas", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 46,
          name: "Tacos de Carnitas (3 Stück)",
          description: "Langsam gegarter Schweinebauch",
          price: 9.0,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
          customizations: [
            {
              name: "Extra Tacos de Carnitas (3 Stück)",
              price: 2.0,
              type: "add",
            },
            { name: "5 Stück", price: 3.0, type: "add" },
            { name: "Extra Zwiebeln", price: 1.0, type: "add" },
            { name: "Extra Cilantro", price: 0.8, type: "add" },
          ],
        },
        {
          id: 47,
          name: "Tacos de Pollo (3 Stück)",
          description: "Gegrilltes Hähnchen mit Salsa Verde",
          price: 7.5,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Tacos de Pollo (3 Stück)", price: 2.0, type: "add" },
            { name: "5 Stück", price: 3.0, type: "add" },
            { name: "Extra Salsa Verde", price: 1.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 48,
          name: "Fish Tacos (3 Stück)",
          description: "Gebratener Fisch mit Krautsalat",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Fish Tacos (3 Stück)", price: 2.0, type: "add" },
            { name: "5 Stück", price: 3.0, type: "add" },
            { name: "Extra Krautsalat", price: 1.0, type: "add" },
            { name: "Extra Zitrone", price: 0.5, type: "add" },
          ],
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
          customizations: [
            { name: "Extra Burrito Grande", price: 2.0, type: "add" },
            { name: "Extra Rindfleisch", price: 2.5, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Extra Salsa", price: 1.0, type: "add" },
          ],
        },
        {
          id: 50,
          name: "Chicken Burrito",
          description: "Hähnchen, Reis, Bohnen, Guacamole",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Chicken Burrito", price: 2.0, type: "add" },
            { name: "Extra Hähnchen", price: 2.5, type: "add" },
            { name: "Extra Guacamole", price: 1.5, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
          ],
        },
        {
          id: 51,
          name: "Veggie Burrito",
          description: "Schwarze Bohnen, Reis, Gemüse, Käse",
          price: 9.5,
          image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Veggie Burrito", price: 2.0, type: "add" },
            { name: "Extra Gemüse", price: 1.5, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Extra Bohnen", price: 1.0, type: "add" },
          ],
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
          customizations: [
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Jalapeños", price: 0.8, type: "add" },
            { name: "Sauerrahm", price: 0.7, type: "add" },
            { name: "Guacamole", price: 1.2, type: "add" },
            { name: "Käse", price: 0, type: "remove" },
          ],
        },
        {
          id: 53,
          name: "Chicken Quesadilla",
          description: "Mit gegrilltem Hähnchen und Käse",
          price: 8.5,
          image:
            "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Hähnchen", price: 2.5, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Jalapeños", price: 0.8, type: "add" },
            { name: "Sauerrahm", price: 0.7, type: "add" },
            { name: "Guacamole", price: 1.2, type: "add" },
            { name: "Hähnchen", price: 0, type: "remove" },
            { name: "Käse", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Extra Jalapeños", price: 0.8, type: "add" },
            { name: "Extra Sauerrahm", price: 0.7, type: "add" },
            { name: "Guacamole", price: 1.2, type: "add" },
            { name: "Salsa", price: 0.8, type: "add" },
            { name: "Jalapeños", price: 0, type: "remove" },
            { name: "Sauerrahm", price: 0, type: "remove" },
          ],
        },
        {
          id: 55,
          name: "Loaded Nachos",
          description: "Mit Rindfleisch, Bohnen, Käse, Guacamole",
          price: 12.5,
          image:
            "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Rindfleisch", price: 2.5, type: "add" },
            { name: "Extra Bohnen", price: 1.0, type: "add" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Extra Guacamole", price: 1.2, type: "add" },
            { name: "Jalapeños", price: 0.8, type: "add" },
            { name: "Sauerrahm", price: 0.7, type: "add" },
            { name: "Rindfleisch", price: 0, type: "remove" },
            { name: "Bohnen", price: 0, type: "remove" },
          ],
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
            "https://imgs.search.brave.com/3X8WV0eKCy4v6QUUCym8mJrsluwh8_16-syg9rdYttw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmlu/a2x1c2l2LmF0L2Nk/bi9zaG9wL3Byb2R1/Y3RzL2Nvcm9uYS1l/eHRyYS0wXzM1NWxf/MTgwMHguanBnP3Y9/MTY3Njg5ODE1NA",
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
          customizations: [
            { name: "Extra Hähnchen", price: 3.0, type: "add" },
            { name: "Scharf", price: 0, type: "add" },
            { name: "Mild", price: 0, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Sauce", price: 0, type: "remove" },
          ],
        },
        {
          id: 59,
          name: "Lamb Vindaloo",
          description: "Scharfes Lamm-Curry aus Goa",
          price: 15.9,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Lamm", price: 4.0, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
            { name: "Extra scharf", price: 0, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Kartoffeln", price: 0, type: "remove" },
          ],
        },
        {
          id: 60,
          name: "Palak Paneer",
          description: "Spinat-Curry mit indischem Käse",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Paneer", price: 2.5, type: "add" },
            { name: "Extra Spinat", price: 1.5, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Paneer", price: 0, type: "remove" },
            { name: "Vegan (Paneer)", price: 0, type: "remove" },
          ],
        },
        {
          id: 61,
          name: "Dal Makhani",
          description: "Cremiges schwarzes Linsen-Curry",
          price: 10.5,
          image:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Portion", price: 2.0, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Vegan (Sahne)", price: 0, type: "remove" },
            { name: "Extra cremig", price: 1.0, type: "add" },
          ],
        },
      ],
      Tandoor: [
        {
          id: 62,
          name: "Tandoori Chicken",
          description: "Im Lehmofen gegrilltes Hähnchen",
          price: 14.9,
          image:
            "https://images.unsplash.com/photo-1697155836250-e3ba3a24fbd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          customizations: [
            { name: "Halbes Hähnchen", price: 3.0, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Minz-Chutney", price: 0.8, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 63,
          name: "Seekh Kebab",
          description: "Würzige Lammspieße aus dem Tandoor",
          price: 13.5,
          image:
            "https://images.unsplash.com/photo-1740591872073-e0e627756b90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          customizations: [
            { name: "Extra Spieß", price: 4.0, type: "add" },
            { name: "Basmatireis", price: 2.5, type: "add" },
            { name: "Naan Brot", price: 3.0, type: "add" },
            { name: "Zwiebel-Chutney", price: 0.8, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 64,
          name: "Naan Brot",
          description: "Traditionelles indisches Fladenbrot",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1697155406014-04dc649b0953?w=300&h=200&fit=crop",
          customizations: [
            { name: "Knoblauch Naan", price: 1.0, type: "add" },
            { name: "Käse Naan", price: 1.5, type: "add" },
            { name: "Butter Naan", price: 0.8, type: "add" },
            { name: "2 Stück", price: 3.0, type: "add" },
            { name: "Butter", price: 0, type: "remove" },
          ],
        },
      ],
      Biryani: [
        {
          id: 65,
          name: "Chicken Biryani",
          description: "Aromatischer Basmatireis mit Hähnchen",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=300&h=200",
          customizations: [
            { name: "Extra Hähnchen", price: 3.0, type: "add" },
            { name: "Extra Reis", price: 2.0, type: "add" },
            { name: "Raita (Joghurt-Sauce)", price: 1.5, type: "add" },
            { name: "Zwiebeln", price: 0, type: "remove" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
        },
        {
          id: 66,
          name: "Mutton Biryani",
          description: "Würziger Reis mit Lammfleisch",
          price: 15.5,
          image:
            "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Lamm", price: 4.0, type: "add" },
            { name: "Extra Reis", price: 2.0, type: "add" },
            { name: "Raita (Joghurt-Sauce)", price: 1.5, type: "add" },
            { name: "Zwiebeln", price: 0, type: "remove" },
            { name: "Weniger scharf", price: 0, type: "add" },
          ],
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
          customizations: [
            { name: "6 Stück", price: 2.5, type: "add" },
            { name: "Fleisch-Füllung", price: 1.5, type: "add" },
            { name: "Minz-Chutney", price: 0.8, type: "add" },
            { name: "Tamarind-Sauce", price: 0.8, type: "add" },
            { name: "Kartoffeln", price: 0, type: "remove" },
          ],
        },
        {
          id: 68,
          name: "Onion Bhaji",
          description: "Frittierte Zwiebelringe in Kichererbsenteig",
          price: 4.9,
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Portion", price: 2.0, type: "add" },
            { name: "Minz-Chutney", price: 0.8, type: "add" },
            { name: "Weniger scharf", price: 0, type: "add" },
            { name: "Extra knusprig", price: 0.5, type: "add" },
          ],
        },
      ],
      Getränke: [
        {
          id: 69,
          name: "Mango Lassi",
          description: "Erfrischendes Joghurt-Getränk mit Mango",
          price: 3.5,
          image:
            "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=200&fit=crop",
          customizations: [
            { name: "Große Portion", price: 1.5, type: "add" },
            { name: "Salzig", price: 0, type: "add" },
            { name: "Extra Mango", price: 1.0, type: "add" },
            { name: "Zucker", price: 0, type: "remove" },
          ],
        },
        {
          id: 70,
          name: "Chai Tee",
          description: "Würziger indischer Tee mit Milch",
          price: 2.8,
          image:
            "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&h=200&fit=crop",
          customizations: [
            { name: "Große Tasse", price: 1.0, type: "add" },
            { name: "Extra Gewürze", price: 0.5, type: "add" },
            { name: "Milch", price: 0, type: "remove" },
            { name: "Zucker", price: 0, type: "remove" },
          ],
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
          customizations: [
            { name: "Extra Hackfleisch", price: 2.5, type: "add" },
            { name: "Vegetarisch", price: 0, type: "remove" },
            { name: "Extra Käse", price: 1.5, type: "add" },
            { name: "Griechischer Salat", price: 3.0, type: "add" },
            { name: "Pita Brot", price: 2.0, type: "add" },
          ],
        },
        {
          id: 72,
          name: "Gyros mit Tzatziki",
          description: "Gegrilltes Schweinefleisch mit Joghurtsauce",
          price: 11.5,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Gyros", price: 3.0, type: "add" },
            { name: "Hähnchen statt Schwein", price: 0, type: "add" },
            { name: "Extra Tzatziki", price: 1.0, type: "add" },
            { name: "Pommes", price: 2.5, type: "add" },
            { name: "Pita Brot", price: 2.0, type: "add" },
            { name: "Zwiebeln", price: 0, type: "remove" },
          ],
        },
        {
          id: 73,
          name: "Souvlaki",
          description: "Gegrillte Fleischspieße mit Pita",
          price: 12.9,
          image:
            "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=200&fit=crop",
          customizations: [
            { name: "Extra Spieß", price: 3.5, type: "add" },
            { name: "Hähnchen statt Schwein", price: 0, type: "add" },
            { name: "Tzatziki", price: 1.0, type: "add" },
            { name: "Pommes", price: 2.5, type: "add" },
            { name: "Extra Pita", price: 2.0, type: "add" },
          ],
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
