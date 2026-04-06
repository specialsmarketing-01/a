import type { SpeisekarteMenuItem, SpeisekarteMenuSection as SectionType } from "@/lib/speisekarteMenuData";
import styles from "./speisekarte-menu.module.css";

function formatPrice(euro: string) {
  return `€ ${euro.replace(".", ",")}`;
}

function MenuRow({ item }: { item: SpeisekarteMenuItem }) {
  return (
    <div className={styles.row}>
      <div className={styles.textCol}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        {item.description ? <p className={styles.itemDesc}>{item.description}</p> : null}
      </div>
      <div className={styles.priceCol}>
        <span className={styles.price}>{formatPrice(item.price)}</span>
      </div>
    </div>
  );
}

export function SpeisekarteMenuSection({ section }: { section: SectionType }) {
  return (
    <section className={styles.section} id={section.id} aria-labelledby={`${section.id}-heading`}>
      <header className={styles.sectionHead}>
        <h2 className={styles.sectionTitle} id={`${section.id}-heading`}>
          {section.title}
        </h2>
        {section.subtitle ? <p className={styles.sectionSubtitle}>{section.subtitle}</p> : null}
      </header>
      <div className={styles.list}>
        {section.items.map((item) => (
          <MenuRow key={`${section.id}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}
