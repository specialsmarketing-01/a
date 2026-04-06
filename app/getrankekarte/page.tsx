import type { Metadata } from "next";
import { GetrankekartePage } from "@/components/getrankekarte/GetrankekartePage";

export const metadata: Metadata = {
  title: "Getränkekarte | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Hausgemachte Limonaden, Traubensaft, Cocktails, Softdrinks, Tee, Bier, Spritz, Wein, Schaumwein und Spirituosen.",
};

export default function GetrankekarteRoutePage() {
  return <GetrankekartePage />;
}
