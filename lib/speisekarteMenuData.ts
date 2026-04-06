export type SpeisekarteMenuItem = {
  title: string;
  /** Euro amount as shown (e.g. "13.90"); formatted with € in UI */
  price: string;
  description?: string;
};

export type SpeisekarteMenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: SpeisekarteMenuItem[];
};

export const SPEISEKARTE_MENU_SECTIONS: SpeisekarteMenuSection[] = [
  {
    id: "vorspeisen",
    title: "Vorspeisen",
    items: [
      {
        title: "Gegrillte Garnelen mit Cocktail-Dip",
        price: "13.90",
        description:
          "Knusprig gegrillte Garnelen, außen goldbraun, innen zart – serviert mit Cocktail-Dip.",
      },
      {
        title: "Hari’s Mango-Avocado Tartare mit gegrillten Garnelen",
        price: "14.90",
        description: "Fruchtige Mango trifft auf cremige Avocado – harmonisch kombiniert.",
      },
      {
        title: "Burratina mit Roter Beete & Dattel-Honig Chutney",
        price: "10.90",
        description: "Cremige Burrata mit frischer Minze und Chutney.",
      },
      {
        title: "Fried Shrimps im Panko-Mantel",
        price: "11.90",
        description: "Knusprig frittiert, serviert mit Tamarindensauce.",
      },
      {
        title: "Malai Paneer Tikka",
        price: "9.90",
        description: "Indischer Frischkäse in cremiger Marinade.",
      },
      {
        title: "Grilled Chicken Tikka",
        price: "7.90",
        description: "Zartes Hähnchen, klassisch gewürzt.",
      },
      {
        title: "Papadam mit Mango-Chutney",
        price: "3.50",
      },
    ],
  },
  {
    id: "share-platters",
    title: "Share Platters",
    items: [
      { title: "Kleine Platte", price: "14.90" },
      { title: "Medium Platte", price: "23.90" },
      { title: "Große Platte", price: "34.90" },
    ],
  },
  {
    id: "hauptspeisen",
    title: "Hauptspeisen",
    subtitle: "Spezialität des Hauses",
    items: [
      { title: "Chicken 65 mit Basmatireis", price: "18.90" },
      { title: "Gegrillter Lachs in Kokos-Curry", price: "25.90" },
      { title: "Tandoori Garnelen Curry", price: "26.90" },
      { title: "Lamm Curry", price: "26.90" },
    ],
  },
  {
    id: "biryanis",
    title: "Biryanis",
    items: [
      { title: "Veg Biryani", price: "20.90" },
      { title: "Chicken Biryani", price: "21.90" },
      { title: "Lamm Biryani", price: "28.50" },
      { title: "Garnelen Biryani", price: "29.50" },
    ],
  },
  {
    id: "klassiker",
    title: "Klassiker",
    items: [
      { title: "Chicken Tikka Masala", price: "21.90" },
      { title: "Butter Chicken", price: "18.90" },
      { title: "Tandoori Chicken", price: "18.90" },
    ],
  },
  {
    id: "vegetarisch",
    title: "Vegetarisch",
    items: [
      { title: "Vegan Fusion", price: "18.50" },
      { title: "Shahi Paneer", price: "18.90" },
      { title: "Dal Makhani", price: "17.50" },
      { title: "Palak Paneer", price: "18.90" },
    ],
  },
  {
    id: "burger-snacks",
    title: "Burger / Snacks",
    items: [
      { title: "Chicken Burger", price: "16.90" },
      { title: "Beef Burger", price: "16.90" },
      { title: "Club Sandwich", price: "14.90" },
      { title: "Chicken Tacos", price: "14.90" },
      { title: "Vegan Burger", price: "15.50" },
      { title: "Avocado Tacos", price: "14.90" },
      { title: "Pommes", price: "5.50" },
    ],
  },
  {
    id: "oesterreichisch",
    title: "Österreichische Speisen",
    items: [
      { title: "Gulaschsuppe", price: "5.90" },
      { title: "Linseneintopf", price: "5.90" },
      { title: "Gemüseschnitzel", price: "14.90" },
      { title: "Hühnerschnitzel", price: "16.90" },
      { title: "Wienerschnitzel", price: "16.90" },
    ],
  },
  {
    id: "beilagen",
    title: "Beilagen",
    items: [
      { title: "Reis", price: "3.00" },
      { title: "Naan", price: "3.50" },
      { title: "Paratha", price: "3.50" },
      { title: "Roti", price: "2.50" },
      { title: "Raita", price: "3.00" },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    items: [
      { title: "Blattsalat", price: "9.90" },
      { title: "Paneer Salat", price: "13.90" },
      { title: "Backhendl Salat", price: "13.50" },
      { title: "Caesar Salad", price: "13.90" },
      { title: "Griechischer Salat", price: "11.90" },
      { title: "Kartoffelsalat", price: "4.50" },
    ],
  },
  {
    id: "nachspeisen",
    title: "Nachspeisen",
    items: [
      { title: "Pistazientiramisu", price: "8.90" },
      { title: "Milchreis", price: "6.90" },
      { title: "Cheesecake", price: "7.00" },
      { title: "Eiskaffee Dessert", price: "7.50" },
      { title: "Karotten Halwa", price: "7.90" },
      { title: "Lava Cake", price: "7.50" },
      { title: "Rosenduft Coupe", price: "6.50" },
    ],
  },
];

export const SPEISEKARTE_INFO_LINES = [
  "Alle Preise in Euro inkl. MwSt.",
  "Gedeck pro Person: €2.00",
] as const;
