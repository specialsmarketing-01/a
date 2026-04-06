import styles from "./degustations.module.css";

export function LuxDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span className={styles.dividerOrnament} />
    </div>
  );
}
