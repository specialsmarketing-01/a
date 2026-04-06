import type { SpeisenMenuItem as Item } from "@/lib/speisenPageData";
import styles from "./speisen.module.css";

function formatEuro(price: string) {
  const normalized = price.replace(",", ".");
  const n = parseFloat(normalized);
  if (Number.isNaN(n)) return `€ ${price}`;
  return `€ ${n.toFixed(2).replace(".", ",")}`;
}

export function SpeisenMenuItem({ item }: { item: Item }) {
  return (
    <div className={`menu-item ${styles.menuItem}`}>
      <div className={styles.menuItemBody}>
        <h4 className={styles.menuItemTitle}>{item.title}</h4>
        {item.description ? <p className={styles.menuItemDesc}>{item.description}</p> : null}
      </div>
      <span className={styles.menuItemPrice}>{formatEuro(item.price)}</span>
    </div>
  );
}
