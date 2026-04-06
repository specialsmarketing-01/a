import type { GKSection } from "@/lib/getrankekartePageData";
import { GetrankekarteBlock } from "./GetrankekarteBlock";
import styles from "./getrankekarte.module.css";

export function GetrankekarteSection({ section }: { section: GKSection }) {
  return (
    <section className={styles.section} aria-labelledby={`gk-${section.id}`}>
      <header className={styles.sectionHead}>
        {section.icon ? (
          <span className={styles.sectionIcon} aria-hidden="true">
            {section.icon}
          </span>
        ) : null}
        <h2 className={styles.sectionTitle} id={`gk-${section.id}`}>
          {section.title}
        </h2>
      </header>
      <div className={styles.blocks}>
        {section.blocks.map((block, i) => (
          <GetrankekarteBlock key={`${section.id}-${i}`} block={block} />
        ))}
      </div>
    </section>
  );
}
