import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.home.title,
};

const homeHtml = loadTemplateBody("home.body.html");

export default function HomePage() {
  return <TemplatePageBody html={homeHtml} />;
}
