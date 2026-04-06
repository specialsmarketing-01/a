/** Right-column price display: simple amounts get €; composite strings stay literal. */
export function displayPriceCell(raw: string): string {
  const t = raw.trim();
  if (!t) return t;
  if (t.includes("/") || /Glas|Flasche|pur|gespritzt/i.test(t)) return t;
  if (/^\d+$/.test(t)) return `€ ${t},00`;
  const dec = t.match(/^(\d+)[,.](\d{2})$/);
  if (dec) return `€ ${dec[1]},${dec[2]}`;
  return t;
}
