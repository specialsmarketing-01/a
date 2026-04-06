import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.about.title,
};

const html = loadTemplateBody("about.body.html");

export default function AboutPage() {
  return <TemplatePageBody html={html} />;
}
