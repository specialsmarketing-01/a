/**
 * Mittagsmenü KW14 – Inhalt exakt wie vorgegeben.
 */

export type MittagsmenuItem = {
  title: string;
  description?: string;
  /** Fehlt, wenn der Preis nur im Intro steht (z. B. Tagessuppe). */
  price?: string;
};

export const MITTAGSMENU_PAGE_TITLE = "MITTAGSMENÜ KW14";

export const MITTAGSMENU_INTRO_LINES = [
  "Montag–Freitag von 11:30 bis 14:30 Uhr",
  "Gestalten Sie Ihr Menü ganz nach Ihrem Geschmack.",
] as const;

/** Preisbausteine im Intro */
export const MITTAGSMENU_INTRO_PRICING = [
  { label: "Tagessuppe", price: "2,50" },
  { label: "Petit-Salat", price: "2,00" },
  { label: "Hauptspeise ab", price: "10,50" },
  { label: "Dessert", price: "4,00" },
] as const;

export const MITTAGSMENU_SUPPE: MittagsmenuItem = {
  title: "Gemüsesuppe",
  description: "(A,G)",
};

export const MITTAGSMENU_HAUPTGERICHTE: MittagsmenuItem[] = [
  {
    title: "Wiener Menü: Rindergulasch",
    description:
      "Zart geschmortes Rindfleisch in aromatischer Paprikasauce mit Semmel. (A, C, G)",
    price: "12.00",
  },
  {
    title: "Indo-chinesisches Gericht",
    description:
      "Paneer in Chili-Süß-Sauer-Sauce, verfeinert mit frischen Kräutern, serviert mit Basmatireis. (A,G,M)",
    price: "11.00",
  },
  {
    title: "Kumar's Chicken 65 Menü",
    description: "Mariniertes Hühnerfleisch mit Gewürzen, serviert mit Basmatireis. (G,M)",
    price: "12.00",
  },
  {
    title: "Delhi Menü",
    description: "Cremiges Butter Chicken mit Basmatireis. (G,M)",
    price: "11.00",
  },
  {
    title: "Punjabi Menü",
    description: "Dal Makhni – königliches Linsengericht mit Basmatireis. (G,M)",
    price: "10.50",
  },
];

export const MITTAGSMENU_DESSERT: MittagsmenuItem = {
  title: "Himmlischer Milchreis mit Kardamom-Geschmack",
  description: "(G)",
  price: "4.00",
};

export const MITTAGSMENU_FOOTER_LINES = [
  "Alle Preise inkl. MwSt. in Euro",
  "Speisen verfügbar solange der Vorrat reicht",
  "Althanstraße 51, 1090 Wien",
] as const;
