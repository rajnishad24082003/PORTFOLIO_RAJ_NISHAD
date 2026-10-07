"use client";

import { useEffect } from "react";

/** Adds `is-in` to every `[data-reveal]` element as it scrolls into view. */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.dataset.js = "";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
