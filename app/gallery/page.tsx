import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.gallery.title,
};

const html = loadTemplateBody("gallery.body.html");

export default function GalleryPage() {
  return <TemplatePageBody html={html} />;
}
