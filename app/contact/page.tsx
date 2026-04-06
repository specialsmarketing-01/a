import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
};

const html = loadTemplateBody("contact.body.html");

export default function ContactPage() {
  return <TemplatePageBody html={html} />;
}
