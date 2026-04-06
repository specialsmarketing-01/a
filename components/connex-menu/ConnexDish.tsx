import styles from "./connex-menu.module.css";

export type ConnexDishProps = {
  title: string;
  description?: string;
};

export function ConnexDish({ title, description }: ConnexDishProps) {
  return (
    <div className={styles.dishBlock}>
      <h4 className={styles.dishTitle}>{title}</h4>
      {description ? <p className={styles.dishDesc}>{description}</p> : null}
    </div>
  );
}
