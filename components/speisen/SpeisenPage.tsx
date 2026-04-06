import Link from "next/link";
import { Fragment } from "react";
import {
  SPEISEN_BOOK_TABLE,
  SPEISEN_FOOTER_AND_ALLERGEN,
  SPEISEN_GUTSCHEIN,
  SPEISEN_INTRO,
  SPEISEN_MENU_SECTIONS,
} from "@/lib/speisenPageData";
import { SpeisenMenuItem } from "./SpeisenMenuItem";
import styles from "./speisen.module.css";

export function SpeisenPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Speisen
              </div>
              <h1 className="ak-section-title page-title-anim">Speisen</h1>
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
                <header className={styles.intro}>
                  <p className={styles.introKicker}>{SPEISEN_INTRO.kicker}</p>
                  <h2 className={styles.introHeadline}>{SPEISEN_INTRO.headline}</h2>
                  {SPEISEN_INTRO.paragraphs.map((p, i) => (
                    <p key={i} className={styles.introText}>
                      {p}
                    </p>
                  ))}
                  <div className={styles.introActions}>
                    <a
                      className={styles.introLink}
                      href={SPEISEN_BOOK_TABLE.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SPEISEN_BOOK_TABLE.label}
                    </a>
                    <Link className={styles.bookBtn} href="/reservations">
                      Book Now!
                    </Link>
                    <a
                      className={styles.introLink}
                      href="https://hari1090.com/en/speisen/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      English
                    </a>
                  </div>
                </header>

                {SPEISEN_MENU_SECTIONS.map((section) => (
                  <Fragment key={section.id}>
                    {section.navStripBefore ? (
                      <div className={styles.navStrip} role="note">
                        {section.navStripBefore}
                      </div>
                    ) : null}
                    <section
                      className={styles.section}
                      id={section.id}
                      aria-labelledby={section.hideHeading ? undefined : `${section.id}-h`}
                      aria-label={section.hideHeading ? "Gerichte" : undefined}
                    >
                      {!section.hideHeading ? (
                        <header className={styles.sectionHead}>
                          <h3 className={styles.sectionTitle} id={`${section.id}-h`}>
                            {section.title}
                          </h3>
                          {section.subtitle ? (
                            <p className={styles.sectionSubtitle}>{section.subtitle}</p>
                          ) : null}
                        </header>
                      ) : null}
                      {section.intro?.length ? (
                        <div className={styles.sectionIntro}>
                          {section.intro.map((block, i) => (
                            <p key={i}>{block}</p>
                          ))}
                        </div>
                      ) : null}
                      <div className={styles.list}>
                        {section.items.map((item) => (
                          <SpeisenMenuItem key={`${section.id}-${item.title}`} item={item} />
                        ))}
                      </div>
                    </section>
                  </Fragment>
                ))}

                <div className={styles.divider} aria-hidden="true" />

                <footer className={styles.footerProse}>
                  <div className={styles.footerLegal}>{SPEISEN_FOOTER_AND_ALLERGEN}</div>
                </footer>

                <aside className={styles.gutschein}>
                  <h3 className={styles.gutscheinTitle}>{SPEISEN_GUTSCHEIN.title}</h3>
                  <p className={styles.gutscheinText}>{SPEISEN_GUTSCHEIN.body}</p>
                  <a
                    className={styles.gutscheinLink}
                    href={SPEISEN_GUTSCHEIN.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SPEISEN_GUTSCHEIN.linkLabel}
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
