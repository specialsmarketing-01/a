import type { GenusswocheCourse } from "@/lib/culinariusGenusswochePageData";
import { GenusswocheDish } from "./GenusswocheDish";
import { GenusswocheOder } from "./GenusswocheOder";
import styles from "./genusswoche.module.css";

export function GenusswocheCourseSection({ course }: { course: GenusswocheCourse }) {
  return (
    <section className={styles.course} aria-labelledby={`${course.id}-heading`}>
      <h2 className={styles.courseHeading} id={`${course.id}-heading`}>
        {course.heading}
      </h2>
      {course.segments.map((seg, i) => {
        if (seg.type === "dish") {
          return <GenusswocheDish key={`${course.id}-dish-${i}`} dish={seg.dish} />;
        }
        return <GenusswocheOder key={`${course.id}-oder-${i}`} label={seg.label} />;
      })}
    </section>
  );
}
