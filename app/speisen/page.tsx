import type { Metadata } from "next";
import { SpeisenPage } from "@/components/speisen/SpeisenPage";

export const metadata: Metadata = {
  title: "Speisen - Hari1090 | Restaurant | Kaffee | Catering | Meetings & Events",
  description:
    "Internationale Küche mit Raffinesse – Vorspeisen, Biryanis, indische Klassiker, Salate und mehr im Hari1090 Wien.",
};

export default function SpeisenRoutePage() {
  return <SpeisenPage />;
}
