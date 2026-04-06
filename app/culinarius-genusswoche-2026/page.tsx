import type { Metadata } from "next";
import { GenusswochePage } from "@/components/genusswoche/GenusswochePage";

export const metadata: Metadata = {
  title: "Genusswoche 2026 | Hari1090 Signature Experience – Wien",
  description:
    "Gastronews Genusswoche: Vier Gänge Signature Experience vom 02.02. bis 07.02.2026 bei Hari1090 in Wien.",
};

export default function CulinariusGenusswoche2026RoutePage() {
  return <GenusswochePage />;
}
