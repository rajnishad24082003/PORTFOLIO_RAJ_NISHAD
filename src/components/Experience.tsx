import { experience } from "@/content/profile";
import { ImpactChart } from "./ImpactChart";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="divide-y divide-rule">
        {experience.map((role) => (
          <li key={role.company} data-reveal className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-9 md:gap-8">
            <p className="font-mono text-xs text-muted md:col-span-2 md:pt-2">{role.period}</p>

            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                {role.title}
                <span className="text-muted"> at </span>
                <span className="italic">{role.company}</span>
              </h3>
              <p className="mt-3 text-lg text-ink-soft">{role.summary}</p>

              {role.impact && <ImpactChart impact={role.impact} />}

              <ul className="mt-7 space-y-4">
                {role.points.map((point) => (
                  <li key={point} className="grid grid-cols-[1.25rem_1fr] leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-mono text-xs text-muted">{role.stack.join("  /  ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
