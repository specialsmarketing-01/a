import type { Metadata } from "next";
import { ConnexMenuPage } from "@/components/connex-menu/ConnexMenuPage";

export const metadata: Metadata = {
  title: "Connex Menü | Hari1090 by Kumar's Kitchen – Wien",
  description:
    "Connex Menü: Aperitiv, Vorspeisen, Zwischengang, Hauptgerichte und Desserts – strukturiert im Zwei-Spalten-Layout.",
};

export default function ConnexMenuRoutePage() {
  return <ConnexMenuPage />;
}
