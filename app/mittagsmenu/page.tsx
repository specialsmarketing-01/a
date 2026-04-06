import type { Metadata } from "next";
import { MittagsmenuPage } from "@/components/mittagsmenu/MittagsmenuPage";

export const metadata: Metadata = {
  title: "Mittagsmenü KW14 | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Montag–Freitag 11:30–14:30 Uhr Mittagsmenü – Suppe, Wiener Menü, Indische Menüs und Dessert in Wien.",
};

export default function MittagsmenuRoutePage() {
  return <MittagsmenuPage />;
}
