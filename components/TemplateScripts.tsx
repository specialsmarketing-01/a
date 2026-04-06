"use client";

import { TEMPLATE_SCRIPTS } from "@/lib/templateScripts";
import Script from "next/script";
import { useCallback, useState } from "react";

export function TemplateScripts() {
  const [n, setN] = useState(1);
  const visible = Math.min(n, TEMPLATE_SCRIPTS.length);

  const onScriptLoad = useCallback(
    (index: number) => {
      if (index === visible - 1 && visible < TEMPLATE_SCRIPTS.length) {
        setN((x) => x + 1);
      }
    },
    [visible],
  );

  return (
    <>
      {TEMPLATE_SCRIPTS.slice(0, visible).map((src, i) => (
        <Script
          key={src}
          src={src}
          strategy="afterInteractive"
          onLoad={() => onScriptLoad(i)}
        />
      ))}
    </>
  );
}
