import Link from "next/link";
import {
  DEGUSTATIONS_DESSERT,
  DEGUSTATIONS_FOOTER,
  DEGUSTATIONS_HAUPTGERICHT,
  DEGUSTATIONS_PAGE_TITLE,
  DEGUSTATIONS_STARTER,
  DEGUSTATIONS_VORSPEISEN,
} from "@/lib/degustationsMenuPageData";
import { DegustChoiceBlock } from "./DegustChoiceBlock";
import { LuxDivider } from "./LuxDivider";
import { OderSeparator } from "./OderSeparator";
import styles from "./degustations.module.css";

export function DegustationsMenuPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Degustationsmenü
              </div>
              <h1 className="ak-section-title page-title-anim">Degustationsmenü</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-80 ak-height-lg-50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className={styles.root}>
                <h2 className={styles.pageTitle}>{DEGUSTATIONS_PAGE_TITLE}</h2>
                <LuxDivider />

                <section
                  className={styles.section}
                  style={{ animationDelay: "0.06s" }}
                  aria-labelledby="degust-starter"
                >
                  <p className={styles.sectionLabel} id="degust-starter">
                    {DEGUSTATIONS_STARTER.label}
                  </p>
                  <h3 className={styles.dishTitle}>{DEGUSTATIONS_STARTER.title}</h3>
                  <p className={styles.body}>{DEGUSTATIONS_STARTER.description}</p>
                </section>

                <LuxDivider />

                <section
                  className={styles.section}
                  style={{ animationDelay: "0.14s" }}
                  aria-labelledby="degust-vorspeisen"
                >
                  <p className={styles.sectionLabel} id="degust-vorspeisen">
                    {DEGUSTATIONS_VORSPEISEN.label}
                  </p>
                  <div className={styles.trilogyBlock}>
                    {DEGUSTATIONS_VORSPEISEN.lines.map((line) => (
                      <p key={line} className={styles.trilogyLine}>
                        {line}
                      </p>
                    ))}
                  </div>
                </section>

                <LuxDivider />

                <section
                  className={styles.section}
                  style={{ animationDelay: "0.22s" }}
                  aria-labelledby="degust-haupt"
                >
                  <p className={styles.sectionLabel} id="degust-haupt">
                    {DEGUSTATIONS_HAUPTGERICHT.label}
                  </p>
                  {DEGUSTATIONS_HAUPTGERICHT.choices.map((choice, index) => (
                    <div key={choice.title}>
                      {index > 0 ? <OderSeparator /> : null}
                      <DegustChoiceBlock choice={choice} />
                    </div>
                  ))}
                </section>

                <LuxDivider />

                <section
                  className={styles.section}
                  style={{ animationDelay: "0.3s" }}
                  aria-labelledby="degust-dessert"
                >
                  <p className={styles.sectionLabel} id="degust-dessert">
                    {DEGUSTATIONS_DESSERT.label}
                  </p>
                  {DEGUSTATIONS_DESSERT.choices.map((choice, index) => (
                    <div key={choice.title}>
                      {index > 0 ? <OderSeparator /> : null}
                      <DegustChoiceBlock choice={choice} />
                    </div>
                  ))}
                </section>

                <footer className={styles.footer}>
                  <p className={styles.priceLine}>{DEGUSTATIONS_FOOTER.priceLine}</p>
                  <p className={styles.footerLine}>{DEGUSTATIONS_FOOTER.lines[0]}</p>
                  <p className={styles.footerLine}>
                    <a
                      className={styles.footerLink}
                      href="https://www.hari1090.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {DEGUSTATIONS_FOOTER.lines[1]}
                    </a>
                  </p>
                  <p className={styles.footerLine}>
                    <a className={styles.footerLink} href="tel:+4369913961360">
                      {DEGUSTATIONS_FOOTER.lines[2]}
                    </a>
                  </p>
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
