import Link from "next/link";
import { COCKTAILS_PAGE_TITLE, COCKTAILS_SECTIONS } from "@/lib/cocktailsPageData";
import { CocktailCard } from "./CocktailCard";
import styles from "./cocktails.module.css";

export function CocktailsPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Cocktails
              </div>
              <h1 className="ak-section-title page-title-anim">Cocktails</h1>
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
                <h2 className={styles.pageTitle}>{COCKTAILS_PAGE_TITLE}</h2>

                {COCKTAILS_SECTIONS.map((section) => (
                  <section
                    key={section.id}
                    className={styles.section}
                    aria-labelledby={`cocktails-${section.id}`}
                  >
                    <header className={styles.sectionHead}>
                      <h3 className={styles.sectionTitle} id={`cocktails-${section.id}`}>
                        {section.title}
                      </h3>
                    </header>
                    <div className={styles.grid}>
                      {section.items.map((item) => (
                        <CocktailCard key={`${section.id}-${item.name}`} item={item} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
