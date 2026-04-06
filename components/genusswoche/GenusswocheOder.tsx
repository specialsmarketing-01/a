import styles from "./genusswoche.module.css";

export function GenusswocheOder({ label }: { label?: string }) {
  return (
    <div className={styles.oder} role="separator">
      <span>ODER</span>
      {label ? <span className={styles.oderSuffix}>{label}</span> : null}
    </div>
  );
}
