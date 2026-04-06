import Link from "next/link";
import { SPEISEKARTE_INFO_LINES, SPEISEKARTE_MENU_SECTIONS } from "@/lib/speisekarteMenuData";
import { SpeisekarteMenuSection } from "./SpeisekarteMenuSection";
import styles from "./speisekarte-menu.module.css";

export function SpeisekarteMenuPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Speisekarte
              </div>
              <h1 className="ak-section-title page-title-anim">Speisekarte</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className={styles.wrap}>
                {SPEISEKARTE_MENU_SECTIONS.map((section) => (
                  <SpeisekarteMenuSection key={section.id} section={section} />
                ))}

                <div className={styles.divider} aria-hidden="true" />

                <div className={styles.infoBlock}>
                  {SPEISEKARTE_INFO_LINES.map((line) => (
                    <p key={line} className={styles.infoLine}>
                      {line}
                    </p>
                  ))}
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
