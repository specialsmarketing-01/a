import type { Metadata } from "next";
import { MomentsOfTastePage } from "@/components/moments/MomentsOfTastePage";

export const metadata: Metadata = {
  title: "Moments of Taste | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Luxury 4-Gänge Erlebnis in Wien: Suppe oder Salat, Vorspeise, Hauptspeise und Dessert zur Wahl.",
};

export default function MomentsOfTasteMenuRoutePage() {
  return <MomentsOfTastePage />;
}
