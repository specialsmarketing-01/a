/**
 * Extracts inner HTML from static template pages (repo root *.html) into
 * elegencia-final/content/*.body.html for Next.js TemplatePageBody.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(projectRoot, "..");
const outDir = path.join(projectRoot, "content");

const PAGES = [
  { src: "index.html", out: "home.body.html" },
  { src: "about.html", out: "about.body.html" },
  { src: "contact.html", out: "contact.body.html" },
  { src: "menu.html", out: "menu.body.html" },
  { src: "meet-the-chef.html", out: "meet-the-chef.body.html" },
  { src: "portfolio.html", out: "portfolio.body.html" },
  { src: "catering.html", out: "catering.body.html" },
  { src: "blog.html", out: "blog.body.html" },
  { src: "gallery.html", out: "gallery.body.html" },
  { src: "reservations.html", out: "reservations.body.html" },
];

function extractScrollBody(html) {
  const startTag = '<div id="scrollsmoother-container">';
  const start = html.indexOf(startTag);
  if (start === -1) throw new Error("scrollsmoother-container not found");
  const openEnd = html.indexOf(">", start) + 1;
  const footerIdx = html.indexOf("<footer", openEnd);
  if (footerIdx === -1) throw new Error("<footer not found after scrollsmoother");
  return html.slice(openEnd, footerIdx).trim();
}

function postProcess(s) {
  let out = s;
  out = out.replace(/(src|href|data-src|poster)="assets\//g, '$1="/assets/');
  out = out.replace(/<Section>/gi, "<section>").replace(/<\/Section>/gi, "</section>");
  out = out.replace(/<from\b/gi, "<form").replace(/<\/from>/gi, "</form>");
  out = out.replace(/<\/textarea>\s*<\/textarea>/gi, "</textarea>");
  return out;
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].replaceAll("&amp;", "&").trim() : "";
}

fs.mkdirSync(outDir, { recursive: true });
const meta = {};

for (const { src, out } of PAGES) {
  const abs = path.join(repoRoot, src);
  if (!fs.existsSync(abs)) {
    console.warn(`skip missing: ${src}`);
    continue;
  }
  const raw = fs.readFileSync(abs, "utf8");
  const key = out.replace(".body.html", "");
  meta[key] = { title: extractTitle(raw), source: src };
  const body = postProcess(extractScrollBody(raw));
  fs.writeFileSync(path.join(outDir, out), body, "utf8");
  console.log(`wrote content/${out} (${body.length} chars)`);
}

fs.writeFileSync(path.join(outDir, "page-meta.json"), JSON.stringify(meta, null, 2), "utf8");
console.log("wrote content/page-meta.json");
