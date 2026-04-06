import Link from "next/link";
import { GETRANKEKARTE_PAGE_TITLE, GETRANKEKARTE_SECTIONS } from "@/lib/getrankekartePageData";
import { GetrankekarteSection } from "./GetrankekarteSection";
import styles from "./getrankekarte.module.css";

export function GetrankekartePage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Getränkekarte
              </div>
              <h1 className="ak-section-title page-title-anim">Getränkekarte</h1>
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
                <h2 className={styles.pageTitle}>{GETRANKEKARTE_PAGE_TITLE}</h2>
                {GETRANKEKARTE_SECTIONS.map((section) => (
                  <GetrankekarteSection key={section.id} section={section} />
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
