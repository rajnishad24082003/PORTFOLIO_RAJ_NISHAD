"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER = 3000; // ms after load
const STORAGE_KEY = "availability-notice-dismissed";

type Props = {
  /** ISO date (YYYY-MM-DD) of the last day at the current job. */
  lastWorkingDay: string;
  timeZone: string;
  email: string;
  resume: string;
};

export function AvailabilityToast({ lastWorkingDay, timeZone, email, resume }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Dismissal is remembered per date, so changing the date shows it again.
      if (localStorage.getItem(STORAGE_KEY) !== lastWorkingDay) setOpen(true);
    }, SHOW_AFTER);
    return () => clearTimeout(timer);
  }, [lastWorkingDay]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, lastWorkingDay);
    setOpen(false);
  }

  if (!open) return null;

  // Compare calendar dates in the given time zone; en-CA formats as YYYY-MM-DD.
  const today = new Intl.DateTimeFormat("en-CA", { timeZone }).format(new Date());
  const serving = today <= lastWorkingDay;
  const lastDay = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${lastWorkingDay}T00:00:00Z`));

  const subject = encodeURIComponent("Referral / role for Raj Nishad");

  return (
    <div
      role="status"
      aria-live="polite"
      className="rise fixed inset-x-4 bottom-4 z-30 border border-paper/15 bg-ink p-5 text-paper shadow-2xl sm:left-auto sm:right-6 sm:bottom-6 sm:w-[400px]"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss notice"
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center text-lg text-paper/60 transition-colors hover:text-paper"
      >
        ×
      </button>

      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
        Open to opportunities
      </p>

      <p className="mt-3 pr-6 font-serif text-2xl leading-tight">
        {serving ? (
          <>
            Joining from <span className="italic text-accent">December</span>
          </>
        ) : (
          <>
            Available to join <span className="italic text-accent">now</span>
          </>
        )}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-paper/75">
        {serving
          ? `I'm serving my notice period. My last working day is ${lastDay}, and I can join right after. A referral or an interview would mean a lot.`
          : "My notice period is complete and I can join immediately. A referral or an interview would mean a lot."}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
        <a
          href={`mailto:${email}?subject=${subject}`}
          className="rounded-full bg-paper px-4 py-2 text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          Refer or hire me
        </a>
        <a href={resume} target="_blank" rel="noopener" className="link-draw text-paper/80 hover:text-paper">
          Résumé ↗
        </a>
      </div>
    </div>
  );
}
