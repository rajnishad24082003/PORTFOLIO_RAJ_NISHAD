import type { Impact } from "@/content/profile";

export function ImpactChart({ impact }: { impact: Impact }) {
  const max = Math.max(impact.before.value, impact.after.value);
  const rows = [
    { ...impact.before, tone: "bg-ink/20" },
    { ...impact.after, tone: "bg-accent" },
  ];
  const ratio = Math.round(impact.before.value / impact.after.value);

  return (
    <figure className="mt-8 border border-rule p-5 md:p-6">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm text-ink">{impact.title}</span>
        <span className="font-mono text-xs text-muted">≈{ratio}× faster</span>
      </figcaption>

      <div className="mt-5 space-y-4" aria-hidden>
        {rows.map((row) => (
          <div key={row.label} className="group" title={`${row.label}: ${row.value} ${impact.unit}`}>
            <div className="flex items-baseline justify-between gap-4 text-xs">
              <span className="text-ink-soft">{row.label}</span>
              <span className="font-mono text-ink">
                {row.value} {impact.unit}
              </span>
            </div>
            <div className="mt-1.5 h-2.5 w-full py-px">
              <div
                className={`h-full rounded-r-[4px] transition-opacity group-hover:opacity-80 ${row.tone}`}
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <table className="sr-only">
        <caption>{impact.title}</caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>
                {row.value} {impact.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
