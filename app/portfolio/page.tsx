import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.portfolio.title,
};

const html = loadTemplateBody("portfolio.body.html");

export default function PortfolioPage() {
  return <TemplatePageBody html={html} />;
}
