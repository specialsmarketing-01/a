import type { GenusswocheDish as Dish } from "@/lib/culinariusGenusswochePageData";
import styles from "./genusswoche.module.css";

export function GenusswocheDish({ dish }: { dish: Dish }) {
  return (
    <div className={styles.dishBlock}>
      <h3 className={styles.dishTitle}>{dish.title}</h3>
      <p className={styles.dishDesc}>{dish.description}</p>
    </div>
  );
}
