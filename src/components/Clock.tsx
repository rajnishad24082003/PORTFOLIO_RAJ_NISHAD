"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000 * 15);
  return () => clearInterval(id);
}

function useNow() {
  // Minute precision keeps the snapshot stable between ticks.
  return useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 60_000),
    () => null,
  );
}

export function LocalTime({ timeZone }: { timeZone: string }) {
  const minute = useNow();
  if (minute === null) return <span aria-hidden>--:--</span>;

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  }).format(minute * 60_000);

  return <time>{time}</time>;
}

export function CurrentYear() {
  const minute = useNow();
  return <>{minute === null ? "" : new Date(minute * 60_000).getFullYear()}</>;
}
