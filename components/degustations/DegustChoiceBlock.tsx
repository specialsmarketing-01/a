import type { DegustChoice } from "@/lib/degustationsMenuPageData";
import styles from "./degustations.module.css";

export function DegustChoiceBlock({ choice }: { choice: DegustChoice }) {
  return (
    <div className={styles.choice}>
      <h4 className={styles.choiceTitle}>{choice.title}</h4>
      {choice.lines.map((line) => (
        <p key={line} className={styles.choiceLine}>
          {line}
        </p>
      ))}
    </div>
  );
}
