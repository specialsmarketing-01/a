/**
 * Connex Menü – Inhalt exakt wie vorgegeben.
 */

export const CONNEX_PAGE_TITLE = "Connex Menü";

export const CONNEX_LEFT = {
  aperitiv: {
    title: "APERITIV (nur bei 3 und 4 Gang Menü gültig):",
    line1: "Prosecco 0,1L",
    oder: "oder",
    line2: "Mango Prosecco 0,1L",
  },
  vorspeisen: {
    title: "VORSPEISEN:",
    dishes: [
      {
        title: "Grilled Chicken Tikka",
        description: "Tandoori Chicken mit Chutneys (G,M)",
      },
      {
        title: "Crispy Chicken Patty",
        description: "Knusprige Teigtaschen mit Hühnerfleisch (A,M)",
      },
      {
        title: "Papadams mit Mango Chutney",
        description: "Knuspriges Linsenbrot",
      },
      {
        title: "Golden Mini Samosa",
        description: "Gefüllt mit Kartoffeln",
      },
      {
        title: "Crispy Spring Rolls",
        description: "Paneer-Käse und Gemüse",
      },
      {
        title: "Alu Tikki",
        description: "Gebratene Laibchen mit Chutneys",
      },
    ],
  },
  zwischengang: {
    title: "ZWISCHENGANG:",
    titleLine: "Blattsalat mit Mango-Dressing",
    description: "Granatapfel, Walnüsse (G,M,N)",
  },
} as const;

export const CONNEX_RIGHT = {
  hauptVeg: {
    title: "HAUPTGERICHTE VEGETARISCH:",
    dishes: [
      {
        title: "Dal Makhani mit Basmatireis",
        description: "Königliches Linsengericht (G)",
      },
      {
        title: "Veg Fusion mit Basmatireis",
        description: "Gemüse in cremiger Sauce",
      },
      {
        title: "Veg Biryani",
        description: "Reisgericht mit Gemüse (G,H)",
      },
    ],
  },
  haupt: {
    title: "HAUPTGERICHTE:",
    dishes: [
      {
        title: "Butter Chicken mit Reis",
        description: "Cremige Butter-Sauce (G)",
      },
      {
        title: "Chicken Tikka Masala mit Reis",
        description: "Hühnerbrust in Masala Sauce (A,G)",
      },
      {
        title: "Chicken 65 mit Reis",
        description: "Curry mit Gewürzen (G)",
      },
      {
        title: "Chicken Biryani",
        description: "Reisgericht mit Huhn (G,H)",
      },
    ],
  },
  desserts: {
    title: "DESSERTS:",
    dishes: [
      {
        title: "Pistazien-Tiramisu",
        description: "(A,C,G,H)",
      },
      {
        title: "Kheer – Indischer Milchreis",
        description: "(G)",
      },
    ],
  },
} as const;
