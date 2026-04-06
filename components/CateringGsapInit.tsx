"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    hariInitCateringGsap?: () => void;
  }
}

/**
 * main.js runs once on first load; GSAP title/hero init for `.catering-gsap-root` is deferred to
 * `window.hariInitCateringGsap` so client-side navigations to /catering still animate. Template
 * scripts (jQuery, Swiper, GSAP, main.js) load globally via layout `TemplateScripts` + next/script.
 */
export function CateringGsapInit() {
  useEffect(() => {
    let cancelled = false;
    let tries = 0;
    const maxTries = 80;

    const run = () => {
      if (cancelled) return;
      if (typeof window.hariInitCateringGsap === "function") {
        window.hariInitCateringGsap();
        return;
      }
      tries += 1;
      if (tries < maxTries) {
        window.setTimeout(run, 50);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Script
      id="catering-template-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(){function g(){if(typeof window.hariInitCateringGsap==='function'){window.hariInitCateringGsap();}else{setTimeout(g,40);}}g();})();`,
      }}
    />
  );
}
