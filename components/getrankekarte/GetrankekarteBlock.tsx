import type { GKBlock } from "@/lib/getrankekartePageData";
import { displayPriceCell } from "./priceDisplay";
import styles from "./getrankekarte.module.css";

export function GetrankekarteBlock({ block }: { block: GKBlock }) {
  if (block.type === "gap") {
    return <div className={styles.gap} aria-hidden="true" />;
  }
  if (block.type === "subhead") {
    return <p className={styles.subhead}>{block.text}</p>;
  }
  if (block.type === "text") {
    return <p className={styles.bodyText}>{block.text}</p>;
  }
  return (
    <div className={styles.row}>
      <div className={styles.rowMain}>
        <p className={styles.rowName}>{block.name}</p>
        {block.description ? <p className={styles.rowDesc}>{block.description}</p> : null}
      </div>
      <p className={styles.rowPrice}>{displayPriceCell(block.price)}</p>
    </div>
  );
}
