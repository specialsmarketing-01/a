import type { Metadata } from "next";
import { DegustationsMenuPage } from "@/components/degustations/DegustationsMenuPage";

export const metadata: Metadata = {
  title: "Degustations Menü | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Vier Gänge Degustationsmenü in Wien – Starter, Vorspeisen-Trilogie, Hauptgericht zur Wahl und Dessert.",
};

export default function DegustationsMenuRoutePage() {
  return <DegustationsMenuPage />;
}
