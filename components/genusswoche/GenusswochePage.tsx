import Link from "next/link";
import {
  GENUSSWOCH_COURSES,
  GENUSSWOCH_HERO,
  GENUSSWOCH_TITLE,
} from "@/lib/culinariusGenusswochePageData";
import { GenusswocheCourseSection } from "./GenusswocheCourseSection";
import styles from "./genusswoche.module.css";

export function GenusswochePage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Culinarius Genusswoche 2026
              </div>
              <h1 className="ak-section-title page-title-anim">Culinarius Genusswoche 2026</h1>
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
                <header className={styles.heroBlock}>
                  <p className={styles.heroLine}>{GENUSSWOCH_HERO.line1}</p>
                  <p className={styles.heroLineAccent}>{GENUSSWOCH_HERO.line2}</p>
                  <p className={styles.heroSub}>{GENUSSWOCH_HERO.line3}</p>
                  <p className={styles.heroTag}>{GENUSSWOCH_HERO.line4}</p>
                </header>

                <div className={styles.titleBlock}>
                  <p className={styles.titleMain}>{GENUSSWOCH_TITLE.line1}</p>
                  <p className={styles.titleSub}>{GENUSSWOCH_TITLE.line2}</p>
                  <p className={styles.titleDate}>{GENUSSWOCH_TITLE.line3}</p>
                </div>

                {GENUSSWOCH_COURSES.map((course) => (
                  <GenusswocheCourseSection key={course.id} course={course} />
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
