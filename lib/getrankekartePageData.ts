/**
 * Getränkekarte – Inhalt exakt wie vorgegeben.
 */

export type GKBlock =
  | { type: "row"; name: string; price: string; description?: string }
  | { type: "subhead"; text: string }
  | { type: "text"; text: string }
  | { type: "gap" };

export type GKSection = {
  id: string;
  title: string;
  icon?: string;
  blocks: GKBlock[];
};

export const GETRANKEKARTE_PAGE_TITLE = "Getränkekarte";

export const GETRANKEKARTE_SECTIONS: GKSection[] = [
  {
    id: "alkoholfrei-frisch",
    title: "ALKOHOLFREI (FRISCH & HAUSGEMACHT)",
    icon: "\uD83C\uDF79",
    blocks: [
      {
        type: "row",
        name: "Minze Limonade (0,5l)",
        price: "6,50",
        description:
          "Erfrischende Hauslimonade mit Holunder, frischer Minze, Zitrone, Orangen und Limetten",
      },
      {
        type: "row",
        name: "Ingwer Limonade (0,5l)",
        price: "6,50",
        description:
          "Erfrischende Hauslimonade mit Holunder, Ingwer, Zitrone, Orangen und Limetten",
      },
      {
        type: "row",
        name: "Basilikum Limonade (0,5l)",
        price: "6,50",
        description:
          "Erfrischende Hauslimonade mit Holunder, frischem Basilikum, Zitrone, Orangen und Limetten",
      },
      { type: "gap" },
      { type: "subhead", text: "Mango Lassi (G):" },
      { type: "row", name: "0,3", price: "4,90" },
      { type: "row", name: "0,5", price: "6,50" },
      { type: "text", text: "Beschreibung:" },
      {
        type: "text",
        text: "Erfrischendes Joghurtgetränk aus sonnengereiften Mangos. Perfekt als süßer Genuss oder Begleiter zu Speisen.",
      },
    ],
  },
  {
    id: "traubensaft",
    title: "TRAUBENSAFT",
    icon: "\uD83C\uDF47",
    blocks: [
      { type: "subhead", text: "Direkt gepresster Traubensaft (Österreich):" },
      { type: "row", name: "0,3 pur", price: "4,50" },
      { type: "row", name: "0,3 gespritzt", price: "4,00" },
      { type: "row", name: "0,5 pur", price: "5,50" },
      { type: "row", name: "0,5 gespritzt", price: "5,00" },
    ],
  },
  {
    id: "cocktails",
    title: "COCKTAILS",
    icon: "\uD83C\uDF79",
    blocks: [
      { type: "row", name: "Aperol Paloma", price: "11,90" },
      { type: "row", name: "Lilac Cocktail", price: "10,90" },
      { type: "row", name: "Mojito", price: "10,90" },
      { type: "row", name: "Campari Orange", price: "10,90" },
      { type: "row", name: "Negroni", price: "10,90" },
      { type: "row", name: "Espresso Martini", price: "11,90" },
      { type: "row", name: "Classic Margarita", price: "11,90" },
      { type: "row", name: "Caipirinha", price: "10,90" },
      { type: "row", name: "Hari's Rumba", price: "11,90" },
    ],
  },
  {
    id: "softdrinks",
    title: "ALKOHOLFREI (SOFTDRINKS)",
    icon: "\uD83E\uDDC3",
    blocks: [
      { type: "subhead", text: "Mineral still / prickelnd" },
      { type: "row", name: "0,33", price: "4,10" },
      { type: "row", name: "0,75", price: "6,90" },
      { type: "gap" },
      {
        type: "row",
        name: "Coca Cola / Zero / Fanta / Sprite / Frucade",
        price: "4,90",
      },
      { type: "row", name: "Eistee Pfirsich / Zitrone", price: "4,10" },
      { type: "gap" },
      { type: "row", name: "Red Bull / Red Bull Sugarfree", price: "5,50" },
      { type: "gap" },
      { type: "subhead", text: "Säfte:" },
      {
        type: "row",
        name: "Apfelsaft, Orangensaft, Mangosaft, Maracujasaft",
        price: "4,10",
      },
      { type: "row", name: "Gespritzt 0,3", price: "3,90" },
      { type: "row", name: "Gespritzt 0,5", price: "5,50" },
      { type: "gap" },
      { type: "subhead", text: "Soda:" },
      { type: "row", name: "Soda", price: "3,50 / 4,00" },
      { type: "row", name: "Soda Zitrone / Holunder / Himbeere", price: "3,90 / 4,50" },
    ],
  },
  {
    id: "tee",
    title: "HEISSGETRÄNKE (TEE)",
    icon: "\u2615",
    blocks: [
      { type: "row", name: "Kräutertee", price: "4,50" },
      { type: "row", name: "Japan Sencha", price: "4,50" },
      { type: "row", name: "Darjeeling", price: "4,50" },
      { type: "row", name: "Früchtetee", price: "4,50" },
      { type: "row", name: "Rooibos Orange", price: "4,50" },
      { type: "row", name: "Earl Grey", price: "4,50" },
    ],
  },
  {
    id: "bier",
    title: "BIER",
    icon: "\uD83C\uDF7A",
    blocks: [
      { type: "row", name: "Ottakringer 0,3", price: "4,50" },
      { type: "row", name: "Ottakringer 0,5", price: "5,50" },
      { type: "row", name: "Rotes Zwickl", price: "4,50 / 5,50" },
      { type: "row", name: "Radler", price: "5,70" },
      { type: "row", name: "Kingfisher", price: "4,90" },
      { type: "row", name: "Weizenbier", price: "5,90" },
      { type: "row", name: "Alkoholfreies Bier", price: "4,50" },
    ],
  },
  {
    id: "spritz",
    title: "SPRITZ",
    icon: "\uD83C\uDF79",
    blocks: [
      { type: "row", name: "Hugo", price: "7,90" },
      { type: "row", name: "Aperol Spritz", price: "8,50" },
      { type: "row", name: "Campari Spritz", price: "8,50" },
      { type: "row", name: "Campari Orange", price: "8,90" },
      { type: "row", name: "Italicus Grapefruit", price: "9,90" },
      { type: "row", name: "Lillet Berry", price: "8,90" },
      { type: "row", name: "Lillet Rose Spritz", price: "8,90" },
      { type: "row", name: "Weißer Spritzer", price: "4,90" },
      { type: "row", name: "Kaiser Spritzer", price: "4,90" },
      { type: "row", name: "Sommer Spritzer", price: "4,90" },
      { type: "row", name: "Prosecco 0,1", price: "6,00" },
      { type: "row", name: "Lilac Spritz", price: "9,50" },
      { type: "row", name: "Bellini Cipriani", price: "9,50" },
    ],
  },
  {
    id: "wein",
    title: "WEIN",
    icon: "\uD83C\uDF77",
    blocks: [
      { type: "subhead", text: "Weißwein:" },
      {
        type: "row",
        name: "Sauvignon Blanc Sabathi",
        price: "Glas 6,50 / Flasche 35,00",
      },
      {
        type: "row",
        name: "Gelber Muskateller",
        price: "Glas 6,50 / Flasche 35,00",
      },
      { type: "gap" },
      { type: "subhead", text: "Rotwein:" },
      {
        type: "row",
        name: "Zweigelt Classic",
        price: "Glas 6,90 / Flasche 31,00",
      },
      {
        type: "row",
        name: "Blaufränkisch",
        price: "Glas 6,90 / Flasche 31,00",
      },
      { type: "gap" },
      { type: "subhead", text: "Rosé:" },
      {
        type: "row",
        name: "Rose Gobelsburg",
        price: "Glas 6,00 / Flasche 30,00",
      },
      { type: "gap" },
      { type: "subhead", text: "Weitere:" },
      { type: "row", name: "Grüner Veltliner", price: "25,00" },
      { type: "row", name: "Blaufränkisch Kalk", price: "33,00" },
      { type: "row", name: "Riesling Federspiel", price: "65,00" },
    ],
  },
  {
    id: "schaumweine",
    title: "SCHAUMWEINE & CHAMPAGNER",
    icon: "\u{1F37E}",
    blocks: [
      { type: "row", name: "Prosecco", price: "28" },
      { type: "row", name: "Schlumberger Brut", price: "35" },
      { type: "row", name: "Cuvée", price: "45" },
      { type: "row", name: "Chardonnay", price: "45" },
      { type: "row", name: "Pinot Noir", price: "45" },
      { type: "row", name: "Cinzano Asti", price: "30" },
      { type: "gap" },
      { type: "subhead", text: "Champagner:" },
      { type: "row", name: "Moet Brut", price: "130" },
      { type: "row", name: "Moet Necter", price: "140" },
      { type: "row", name: "Veuve Clicquot", price: "150" },
      { type: "row", name: "Ruinart Rosé", price: "190" },
    ],
  },
  {
    id: "destillationen",
    title: "DESTILLATIONEN (4CL)",
    icon: "\uD83C\uDF78",
    blocks: [
      { type: "row", name: "Vodka", price: "5,90" },
      { type: "row", name: "Tequila", price: "5,90" },
      { type: "row", name: "Whiskey Glenfiddich", price: "9,90" },
      { type: "row", name: "Macallan 12Y", price: "11,90" },
      { type: "row", name: "Black Label", price: "8,90" },
      { type: "row", name: "Chivas Regal", price: "8,50" },
      { type: "row", name: "Gin Rangpur", price: "5,90" },
      { type: "row", name: "Grappa", price: "5,90" },
      { type: "row", name: "Averna", price: "5,90" },
      { type: "row", name: "Jägermeister", price: "5,90" },
      { type: "row", name: "Amaretto", price: "5,90" },
      { type: "row", name: "Bombay Sapphire", price: "6,90" },
      { type: "row", name: "Tanqueray No.10", price: "9,90" },
      { type: "row", name: "Le Tribute Gin", price: "9,90" },
      { type: "row", name: "aVAO Gin", price: "8,90" },
      { type: "row", name: "Blue Gin", price: "8,90" },
      { type: "row", name: "Patron Tequila", price: "9,90" },
      { type: "row", name: "Belvedere Vodka", price: "8,90" },
      { type: "row", name: "Beluga Vodka", price: "8,90" },
    ],
  },
];
