import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";
import styles from "./home-live.module.css";

export const metadata: Metadata = {
  title: pageMeta.home.title,
};

const homeHtml = loadTemplateBody("home.body.html");

export default function HomePage() {
  return (
    <>
      <div className={styles.liveStrip} role="status" aria-live="polite">
        Website is Live
      </div>
      <TemplatePageBody html={homeHtml} />
    </>
  );
}
