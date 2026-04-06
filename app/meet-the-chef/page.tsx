import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta["meet-the-chef"].title,
};

const html = loadTemplateBody("meet-the-chef.body.html");

export default function MeetTheChefPage() {
  return <TemplatePageBody html={html} />;
}
