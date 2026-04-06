/**
 * Degustations Menü – Inhalt exakt wie vorgegeben.
 */

export const DEGUSTATIONS_PAGE_TITLE = "Degustations Menü";

export const DEGUSTATIONS_STARTER = {
  label: "STARTER",
  title: "Hari's Salat",
  description:
    "Paneer (indischer Käse) trifft auf Avocado und knackige Pistazien, verfeinert mit Kräutern und Honig-Olivenöl – leicht und elegant. (G,M,N)",
};

export const DEGUSTATIONS_VORSPEISEN = {
  label: "VORSPEISEN-TRILOGY",
  lines: [
    "1. Crispy Spring Rolls mit indischem Käse",
    "2. Samosa – hausgemachte Teigtaschen gefüllt mit Kartoffeln, Erbsen und Gewürzen",
    "3. Knusprig gegrillte Garnelen mit Dip (A,G,M)",
  ],
};

export type DegustChoice = {
  title: string;
  lines: string[];
};

export const DEGUSTATIONS_HAUPTGERICHT = {
  label: "HAUPTGERICHT (ZUR AUSWAHL)",
  choices: [
    {
      title: "Knusprig gegrillter Lachs",
      lines: ["mit Kokos-Curry & Basmatireis (D,G)"],
    },
    {
      title: "Kumar's Chicken 65 mit Basmatireis",
      lines: ["Zartes Hühnerfleisch, raffiniert mariniert und schonend gegart. (G,M)"],
    },
    {
      title: "Dal Makhani mit Basmatireis",
      lines: ["Königliches Linsengericht, traditioneller Klassiker (G, vegetarisch)"],
    },
  ] satisfies DegustChoice[],
};

export const DEGUSTATIONS_DESSERT = {
  label: "DESSERT",
  choices: [
    {
      title: "Kheer",
      lines: ["Himmlischer Milchreis mit Kardamom (G,H)"],
    },
    {
      title: "Pistazien-Tiramisu",
      lines: ["(A,C,G,H)"],
    },
  ] satisfies DegustChoice[],
};

export const DEGUSTATIONS_FOOTER = {
  priceLine: "4 Gänge Menü – 49,90 € pro Person",
  lines: ["Althanstraße 51, 1090 Wien", "www.hari1090.com", "Tel: +43 699 1396 1360"],
};
