import Link from "next/link";
import { CONNEX_LEFT, CONNEX_PAGE_TITLE, CONNEX_RIGHT } from "@/lib/connexMenuPageData";
import { ConnexDishList } from "./ConnexDishList";
import styles from "./connex-menu.module.css";

export function ConnexMenuPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Connex Menü
              </div>
              <h1 className="ak-section-title page-title-anim">Connex Menü</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-80 ak-height-lg-50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-11">
              <div className={styles.wrap}>
                <h2 className={styles.pageTitle}>{CONNEX_PAGE_TITLE}</h2>

                <div className={styles.grid}>
                  <div className={styles.column}>
                    <section className={styles.section} aria-labelledby="connex-aperitiv">
                      <h3 className={styles.sectionTitle} id="connex-aperitiv">
                        {CONNEX_LEFT.aperitiv.title}
                      </h3>
                      <div className={styles.aperitivLines}>
                        <p className={styles.aperitivLine}>{CONNEX_LEFT.aperitiv.line1}</p>
                        <p className={styles.aperitivOder}>{CONNEX_LEFT.aperitiv.oder}</p>
                        <p className={styles.aperitivLine}>{CONNEX_LEFT.aperitiv.line2}</p>
                      </div>
                    </section>

                    <section className={styles.section} aria-labelledby="connex-vorspeisen">
                      <h3 className={styles.sectionTitle} id="connex-vorspeisen">
                        {CONNEX_LEFT.vorspeisen.title}
                      </h3>
                      <ConnexDishList dishes={CONNEX_LEFT.vorspeisen.dishes} />
                    </section>

                    <section className={styles.section} aria-labelledby="connex-zwischen">
                      <h3 className={styles.sectionTitle} id="connex-zwischen">
                        {CONNEX_LEFT.zwischengang.title}
                      </h3>
                      <p className={styles.zwischenTitle}>{CONNEX_LEFT.zwischengang.titleLine}</p>
                      <p className={styles.zwischenDesc}>{CONNEX_LEFT.zwischengang.description}</p>
                    </section>
                  </div>

                  <hr className={styles.divider} aria-hidden="true" />

                  <div className={styles.column}>
                    <section className={styles.section} aria-labelledby="connex-veg">
                      <h3 className={styles.sectionTitle} id="connex-veg">
                        {CONNEX_RIGHT.hauptVeg.title}
                      </h3>
                      <ConnexDishList dishes={CONNEX_RIGHT.hauptVeg.dishes} />
                    </section>

                    <section className={styles.section} aria-labelledby="connex-haupt">
                      <h3 className={styles.sectionTitle} id="connex-haupt">
                        {CONNEX_RIGHT.haupt.title}
                      </h3>
                      <ConnexDishList dishes={CONNEX_RIGHT.haupt.dishes} />
                    </section>

                    <section className={styles.section} aria-labelledby="connex-dessert">
                      <h3 className={styles.sectionTitle} id="connex-dessert">
                        {CONNEX_RIGHT.desserts.title}
                      </h3>
                      <ConnexDishList dishes={CONNEX_RIGHT.desserts.dishes} />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
