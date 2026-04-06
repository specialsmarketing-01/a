import styles from "./degustations.module.css";

export function OderSeparator() {
  return (
    <div className={styles.oder} role="separator" aria-label="Oder">
      <span className={styles.oderText}>ODER</span>
    </div>
  );
}
