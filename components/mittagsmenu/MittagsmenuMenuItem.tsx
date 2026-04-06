import type { MittagsmenuItem } from "@/lib/mittagsmenuPageData";
import styles from "./mittagsmenu.module.css";

function formatEuro(price: string) {
  const normalized = price.replace(",", ".");
  const n = parseFloat(normalized);
  if (Number.isNaN(n)) return `€ ${price}`;
  return `€ ${n.toFixed(2).replace(".", ",")}`;
}

export function MittagsmenuMenuItem({ item }: { item: MittagsmenuItem }) {
  return (
    <div className={`menu-item ${styles.menuItem}`}>
      <div className={styles.menuItemBody}>
        <h4 className={styles.menuItemTitle}>{item.title}</h4>
        {item.description ? <p className={styles.menuItemDesc}>{item.description}</p> : null}
      </div>
      {item.price != null ? (
        <span className={styles.menuItemPrice}>{formatEuro(item.price)}</span>
      ) : null}
    </div>
  );
}
