import type { Metadata } from "next";
import { CocktailsPage } from "@/components/cocktails/CocktailsPage";

export const metadata: Metadata = {
  title: "Hari's Cocktails | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Signature Cocktails, Spritz & Light, internationale Klassiker – Premium Bar in Wien.",
};

export default function CocktailsRoutePage() {
  return <CocktailsPage />;
}
