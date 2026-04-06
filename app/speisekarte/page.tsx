import type { Metadata } from "next";
import { SpeisekarteMenuPage } from "@/components/speisekarte/SpeisekarteMenuPage";

export const metadata: Metadata = {
  title: "Speisekarte | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Vorspeisen, Hauptspeisen, Biryanis, Klassiker, vegetarische Gerichte und mehr – Hari1090 Wien.",
};

export default function SpeisekartePage() {
  return <SpeisekarteMenuPage />;
}
