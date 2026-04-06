import type { MomentsCourse } from "@/lib/momentsOfTastePageData";
import styles from "./moments.module.css";

export function MomentsCourseBlock({ course }: { course: MomentsCourse }) {
  return (
    <section className={styles.courseBlock}>
      <p className={styles.courseHeading}>
        <span className={styles.courseNumber}>{course.courseNo}</span> {course.title}
      </p>
      <div className={styles.courseBody}>
        {course.lines.map((line) => (
          <p key={line} className={styles.courseLine}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
