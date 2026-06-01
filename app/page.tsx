"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/lib/i18n";
import { basePath } from "@/lib/basePath";

// Static-export friendly redirect to the default locale.
// (Server-side redirect() is not supported with output: "export".)
export default function Root() {
  const url = `${basePath}/${defaultLocale}/`;
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <a href={url}>Enter portfolio →</a>
    </main>
  );
}
