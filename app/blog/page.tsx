import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.blog.title,
};

const html = loadTemplateBody("blog.body.html");

export default function BlogPage() {
  return <TemplatePageBody html={html} />;
}
