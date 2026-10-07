"use client";

import { useEffect, useRef } from "react";

const SPEED = 40; // px per second while drifting on its own
const RESUME_AFTER = 1800; // ms of no interaction before drifting again
const COPIES = 3;

/**
 * A horizontally scrollable band that drifts on its own. Visitors can swipe,
 * drag or wheel it; it hands control back after they stop.
 *
 * The list is rendered three times and the view is kept in the middle copy,
 * which leaves a full copy of runway in both directions. Re-centering only
 * happens when no native gesture is running (a programmatic jump during a
 * touch scroll fights the browser's own scrolling and makes it jitter).
 */
export function Ticker({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pos = 0; // float position; scrollLeft alone rounds and would stall at slow speeds
    let lastInput = -Infinity;
    let last = performance.now();
    let frame = 0;
    let drag: { x: number; scroll: number } | null = null;

    const copy = () => el.scrollWidth / COPIES;

    /** Shift by whole copies so the view sits in the middle copy. */
    const centered = (x: number) => {
      const w = copy();
      if (x < w * 0.5) return x + w;
      if (x >= w * 1.5) return x - w;
      return x;
    };

    const touched = () => {
      lastInput = performance.now();
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!drag && now - lastInput > RESUME_AFTER) {
        // Idle: safe to re-sync with wherever the visitor left it.
        pos = centered(Math.abs(pos - el.scrollLeft) > 1 ? el.scrollLeft : pos);
        if (!reduceMotion) pos = centered(pos + (SPEED * dt) / 1000);
        el.scrollLeft = pos;
      }
      frame = requestAnimationFrame(tick);
    };

    // Mouse drag; touch and trackpads use native scrolling.
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      drag = { x: e.clientX, scroll: el.scrollLeft };
      el.setPointerCapture(e.pointerId);
      touched();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag) return;
      // Programmatic, so wrapping mid-drag is seamless.
      const target = drag.scroll - (e.clientX - drag.x);
      const wrapped = centered(target);
      drag.scroll += wrapped - target;
      el.scrollLeft = pos = wrapped;
      touched();
    };
    const endDrag = () => {
      drag = null;
      touched();
    };

    el.scrollLeft = pos = copy();
    el.addEventListener("keydown", touched);
    el.addEventListener("wheel", touched, { passive: true });
    el.addEventListener("touchstart", touched, { passive: true });
    el.addEventListener("touchmove", touched, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("keydown", touched);
      el.removeEventListener("wheel", touched);
      el.removeEventListener("touchstart", touched);
      el.removeEventListener("touchmove", touched);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  const run = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Technologies I work with"
      tabIndex={0}
      className="no-scrollbar cursor-grab select-none overflow-x-auto overscroll-x-contain border-y border-ink bg-ink py-4 text-paper active:cursor-grabbing"
    >
      <ul className="flex w-max">
        {run.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center font-serif text-3xl leading-none md:text-4xl"
          >
            <span className={i % 2 ? "italic" : ""}>{item}</span>
            <span aria-hidden className="mx-7 font-mono text-sm text-accent">
              /
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
