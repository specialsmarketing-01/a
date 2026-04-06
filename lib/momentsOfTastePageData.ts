/**
 * Moments of Taste - luxury 4-course menu copy.
 */

export const MOMENTS_PAGE = {
  titleTop: "Hari 1090",
  titleBottom: "Moments of Taste",
  subtitle: "Dieses Men\u00fc umfasst:",
} as const;

export type MomentsCourse = {
  courseNo: string;
  title: string;
  lines: string[];
};

export const MOMENTS_COURSES: MomentsCourse[] = [
  {
    courseNo: "1.",
    title: "Gang",
    lines: ["Tagessuppe oder Salat"],
  },
  {
    courseNo: "2.",
    title: "Gang",
    lines: ["Vorspeise \u2013 lt. Speisekarte", "1 x Vorspeise Ihrer Wahl"],
  },
  {
    courseNo: "3.",
    title: "Gang",
    lines: ["Hauptspeise \u2013 lt. Speisekarte", "1 x Hauptspeise Ihrer Wahl"],
  },
];

export const MOMENTS_FOURTH_COURSE = {
  courseNo: "4.",
  title: "Gang",
  firstOption: "Kheer mit Kardamom \u2013 indischer Milchreis",
  secondOption: "Gajar ka Halwa \u2013 indischer Karotten-Pudding",
} as const;

export const MOMENTS_FOOTER = {
  lead: [
    "Genie\u00dfen Sie ein 4-G\u00e4nge Men\u00fc",
    "f\u00fcr 2 Personen exkl. Gedeck und Getr\u00e4nke",
  ],
  lines: ["Althanstra\u00dfe 51", "1090 Wien", "reservierung@hari1090.com"],
} as const;
