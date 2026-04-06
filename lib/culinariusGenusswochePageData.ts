/**
 * Culinarius Genusswoche 2026 – Inhalt exakt wie vorgegeben.
 */

export const GENUSSWOCH_HERO = {
  line1: "Genusswoche",
  line2: "02 – 08 Februar 2026",
  line3: "Hari1090",
  line4: "Wir nehmen teil!",
} as const;

export const GENUSSWOCH_TITLE = {
  line1: "HARI1090 SIGNATURE EXPERIENCE",
  line2: "Gastronews Genusswoche",
  line3: "Von 02.02 bis 07.02.2026",
} as const;

export type GenusswocheDish = {
  title: string;
  description: string;
};

export type GenusswocheSegment =
  | { type: "dish"; dish: GenusswocheDish }
  | { type: "oder"; label?: string };

export type GenusswocheCourse = {
  id: string;
  heading: string;
  segments: GenusswocheSegment[];
};

export const GENUSSWOCH_COURSES: GenusswocheCourse[] = [
  {
    id: "gang-1",
    heading: "1. GANG – VORSPEISE",
    segments: [
      {
        type: "dish",
        dish: {
          title: "Hari's Mango-Avocado-Tartare",
          description:
            "Mit gegrillten Garnelen – fruchtig, cremig und elegant angerichtet (A,B,D,G)",
        },
      },
      { type: "oder", label: "(vegetarisch)" },
      {
        type: "dish",
        dish: {
          title: "Malai Paneer Tikka",
          description:
            "Indischer Frischkäse in cremiger Marinade, gegrillt und serviert mit Chutneys (G)",
        },
      },
    ],
  },
  {
    id: "gang-2",
    heading: "2. GANG – SIGNATURE BITE",
    segments: [
      {
        type: "dish",
        dish: {
          title: "Gegrilltes Hühnchen & Paneer",
          description:
            "Mit Rote-Beete-Chutney, Minze-Avocado-Chutney und knuspriger Tuille (A,C,G)",
        },
      },
    ],
  },
  {
    id: "gang-3",
    heading: "3. GANG – HAUPTSPEISE (AUSWAHL)",
    segments: [
      {
        type: "dish",
        dish: {
          title: "Butter Chicken „Hari Style“",
          description: "Mit cremiger Tomaten-Currysauce und Basmatireis (G)",
        },
      },
      { type: "oder" },
      {
        type: "dish",
        dish: {
          title: "Chicken Tikka Masala",
          description: "Gegrilltes Hähnchen in würziger Masala-Sauce (D,G)",
        },
      },
      { type: "oder" },
      {
        type: "dish",
        dish: {
          title: "Lachs-Curry",
          description: "Zartes Lachsfilet in Kokos-Tomaten-Currysauce (D,G)",
        },
      },
      { type: "oder" },
      {
        type: "dish",
        dish: {
          title: "Shahi Paneer (vegetarisch)",
          description: "Paneer in cremiger Tomaten-Sahne-Sauce (G,H)",
        },
      },
    ],
  },
  {
    id: "gang-4",
    heading: "4. GANG – DESSERT",
    segments: [
      {
        type: "dish",
        dish: {
          title: "Pistazien-Tiramisu",
          description: "Cremig, fein und elegant serviert (A,C,G,H)",
        },
      },
      { type: "oder" },
      {
        type: "dish",
        dish: {
          title: "Warm Chocolate Lava Cake",
          description: "Schokoladensoufflé mit flüssigem Kern (A,C,F,G,H)",
        },
      },
    ],
  },
];
