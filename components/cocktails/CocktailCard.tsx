import type { CocktailItem } from "@/lib/cocktailsPageData";
import styles from "./cocktails.module.css";

function formatEuro(price: string) {
  const normalized = price.replace(",", ".");
  const n = parseFloat(normalized);
  if (Number.isNaN(n)) return `€ ${price}`;
  return `€ ${n.toFixed(2).replace(".", ",")}`;
}

export function CocktailCard({ item }: { item: CocktailItem }) {
  return (
    <div className={`cocktail-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <h4 className={styles.cardName}>{item.name}</h4>
        <span className={styles.cardPrice}>{formatEuro(item.price)}</span>
      </div>
      {item.ingredients ? (
        <p className={styles.cardIngredients}>{item.ingredients}</p>
      ) : null}
    </div>
  );
}
