import Link from "next/link";
import {
  MITTAGSMENU_DESSERT,
  MITTAGSMENU_FOOTER_LINES,
  MITTAGSMENU_HAUPTGERICHTE,
  MITTAGSMENU_INTRO_LINES,
  MITTAGSMENU_INTRO_PRICING,
  MITTAGSMENU_PAGE_TITLE,
  MITTAGSMENU_SUPPE,
} from "@/lib/mittagsmenuPageData";
import { MittagsmenuMenuItem } from "./MittagsmenuMenuItem";
import styles from "./mittagsmenu.module.css";

export function MittagsmenuPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Mittagsmenü
              </div>
              <h1 className="ak-section-title page-title-anim">Mittagsmenü</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-80 ak-height-lg-50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className={styles.wrap}>
                <h2 className={styles.pageTitle}>{MITTAGSMENU_PAGE_TITLE}</h2>

                <div className={styles.introBlock}>
                  {MITTAGSMENU_INTRO_LINES.map((line, i) => (
                    <p key={i} className={styles.introLead}>
                      {line}
                    </p>
                  ))}
                  <dl className={styles.pricingGrid}>
                    {MITTAGSMENU_INTRO_PRICING.map((row) => (
                      <div key={row.label} className={styles.pricingRow}>
                        <dt className={styles.pricingLabel}>{row.label}:</dt>
                        <dd className={styles.pricingValue}>{row.price} €</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <section className={styles.section} aria-labelledby="suppe-heading">
                  <header className={styles.sectionHead}>
                    <h3 className={styles.sectionTitle} id="suppe-heading">
                      Suppe
                    </h3>
                  </header>
                  <div className={styles.list}>
                    <MittagsmenuMenuItem item={MITTAGSMENU_SUPPE} />
                  </div>
                </section>

                <section className={styles.section} aria-labelledby="haupt-heading">
                  <header className={styles.sectionHead}>
                    <h3 className={styles.sectionTitle} id="haupt-heading">
                      Hauptmenü
                    </h3>
                  </header>
                  <div className={styles.list}>
                    {MITTAGSMENU_HAUPTGERICHTE.map((item) => (
                      <MittagsmenuMenuItem key={item.title} item={item} />
                    ))}
                  </div>
                </section>

                <section className={styles.section} aria-labelledby="dessert-heading">
                  <header className={styles.sectionHead}>
                    <h3 className={styles.sectionTitle} id="dessert-heading">
                      Dessert
                    </h3>
                  </header>
                  <div className={styles.list}>
                    <MittagsmenuMenuItem item={MITTAGSMENU_DESSERT} />
                  </div>
                </section>

                <footer className={styles.footerProse}>
                  {MITTAGSMENU_FOOTER_LINES.map((line) => (
                    <p key={line} className={styles.footerLine}>
                      {line}
                    </p>
                  ))}
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
