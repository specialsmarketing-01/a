/**
 * Hari’s Cocktails – Inhalt exakt wie vorgegeben.
 */

export type CocktailItem = {
  name: string;
  price: string;
  /** Fehlt bei reinen Preislisten ohne Zutatenzeile. */
  ingredients?: string;
};

export type CocktailSection = {
  id: string;
  title: string;
  items: CocktailItem[];
};

export const COCKTAILS_PAGE_TITLE = "HARI'S COCKTAILS";

export const COCKTAILS_SECTIONS: CocktailSection[] = [
  {
    id: "signature",
    title: "SIGNATURE COCKTAILS",
    items: [
      {
        name: "Indian Glory",
        price: "9.50",
        ingredients: "Sekt / Grenadine / Lycheesaft",
      },
      {
        name: "Porn Star Martini",
        price: "11.50",
        ingredients:
          "Vanille Vodka / Passionsfruchtlikör / Limettensaft / Passionsfrucht Püree / Sekt",
      },
      {
        name: "Hari's Chili Martini",
        price: "11.50",
        ingredients: "Vodka / Naga Chili / Limettensaft / Mangosaft",
      },
      {
        name: "Margarita",
        price: "11.90",
        ingredients: "Tequila / Orangenlikör / Limettensaft",
      },
      {
        name: "Hari's Mule",
        price: "11.00",
        ingredients: "Rangpur Gin / Ginger Beer / Mandelsirup / Orangen",
      },
      {
        name: "Lillet Rose",
        price: "8.50",
        ingredients: "Lillet Rose / Rose Lemonade / frische Beeren",
      },
      {
        name: "Bellini Cipriani 0,2",
        price: "9.50",
        ingredients: "Sekt und Pfirsichpüree",
      },
      {
        name: "Le Tribute Gin",
        price: "11.50",
        ingredients: "Auswahl: Olive-Lemonade / Ginger Beer / Tonic Water",
      },
      {
        name: "Strawberry Daiquiri",
        price: "12.50",
        ingredients: "Rum / Limettensaft / Cointreau / Erdbeeren",
      },
      {
        name: "Sexy Cosmopolitan",
        price: "9.50",
        ingredients: "Vodka / Cointreau / Limettensaft / Cranberrysaft",
      },
      {
        name: "Hari's Rumba",
        price: "11.90",
        ingredients: "Rum / Baileys / Mandelsirup / frische Beeren",
      },
      {
        name: "007 Royal Martini",
        price: "12.50",
        ingredients: "Gin / Vodka / Lillet Blanc / Oliven",
      },
      {
        name: "Espresso Martini",
        price: "11.90",
        ingredients: "Vodka / Kaffeelikör / frischer Espresso",
      },
    ],
  },
  {
    id: "spritz",
    title: "SPRITZ & LIGHT COCKTAILS",
    items: [
      { name: "Aperol Spritz", price: "8.50" },
      { name: "Hugo", price: "7.90" },
      { name: "Lilac Spritz", price: "9.50" },
      { name: "Mango Spritz", price: "6.50" },
    ],
  },
  {
    id: "signature-hari1090",
    title: "SIGNATURE COCKTAILS BY HARI1090",
    items: [
      { name: "Pina Colada", price: "10.90" },
      { name: "Hari's Mango Colada", price: "10.90" },
      { name: "Cuba Libre", price: "9.50" },
      { name: "Aperol Paloma", price: "11.90" },
      { name: "Lilac Cocktail", price: "11.50" },
    ],
  },
  {
    id: "klassiker",
    title: "INTERNATIONALE KLASSIKER",
    items: [
      { name: "Mojito", price: "10.90" },
      { name: "Caipirinha", price: "10.90" },
      { name: "Margarita", price: "11.90" },
      { name: "Whiskey Sour", price: "11.90" },
      { name: "Negroni", price: "10.90" },
    ],
  },
];
