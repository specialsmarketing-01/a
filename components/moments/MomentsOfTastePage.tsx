import Link from "next/link";
import {
  MOMENTS_COURSES,
  MOMENTS_FOOTER,
  MOMENTS_FOURTH_COURSE,
  MOMENTS_PAGE,
} from "@/lib/momentsOfTastePageData";
import { MomentsCourseBlock } from "./MomentsCourseBlock";
import { OderBadge } from "./OderBadge";
import styles from "./moments.module.css";

export function MomentsOfTastePage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Moments of Taste
              </div>
              <h1 className="ak-section-title page-title-anim">Moments of Taste</h1>
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
                <h2 className={styles.titleTop}>{MOMENTS_PAGE.titleTop}</h2>
                <h3 className={styles.titleBottom}>{MOMENTS_PAGE.titleBottom}</h3>
                <p className={styles.subtitle}>{MOMENTS_PAGE.subtitle}</p>

                {MOMENTS_COURSES.map((course) => (
                  <MomentsCourseBlock key={course.courseNo} course={course} />
                ))}

                <section className={styles.courseBlock}>
                  <p className={styles.courseHeading}>
                    <span className={styles.courseNumber}>{MOMENTS_FOURTH_COURSE.courseNo}</span>{" "}
                    {MOMENTS_FOURTH_COURSE.title}
                  </p>
                  <p className={styles.courseLine}>{MOMENTS_FOURTH_COURSE.firstOption}</p>
                  <OderBadge />
                  <p className={styles.courseLine}>{MOMENTS_FOURTH_COURSE.secondOption}</p>
                </section>

                <footer className={styles.footer}>
                  <p className={styles.footerLead}>{MOMENTS_FOOTER.lead[0]}</p>
                  <p className={styles.footerLead}>{MOMENTS_FOOTER.lead[1]}</p>
                  <p className={styles.footerLine}>{MOMENTS_FOOTER.lines[0]}</p>
                  <p className={styles.footerLine}>{MOMENTS_FOOTER.lines[1]}</p>
                  <p className={styles.footerLine}>
                    <a className={styles.footerLink} href="mailto:reservierung@hari1090.com">
                      {MOMENTS_FOOTER.lines[2]}
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
