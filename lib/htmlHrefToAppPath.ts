/**
 * Maps template `href="page.html"` to Next.js app paths. Returns null when the
 * anchor should stay a plain <a> (external, mailto, /assets/, hash-only).
 */
export function htmlHrefToAppPath(href: string): string | null {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("javascript:")) return null;
  if (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("//")) {
    return null;
  }
  if (trimmed.startsWith("#")) return null;
  if (trimmed.startsWith("/")) {
    if (trimmed.startsWith("/assets/")) return null;
    return trimmed;
  }

  const hashIndex = trimmed.indexOf("#");
  const pathPart = hashIndex >= 0 ? trimmed.slice(0, hashIndex) : trimmed;
  const hash = hashIndex >= 0 ? trimmed.slice(hashIndex) : "";

  const file = pathPart.split("/").pop() ?? pathPart;
  if (!file.toLowerCase().endsWith(".html")) return null;

  const base = file.slice(0, -5);
  if (base.toLowerCase() === "index") {
    return hash ? `/${hash}` : "/";
  }
  if (base.toLowerCase() === "menu") {
    return hash ? `/speisekarte${hash}` : "/speisekarte";
  }
  return `/${base}${hash}`;
}
