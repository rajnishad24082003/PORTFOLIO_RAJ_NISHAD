import { projects, type Project } from "@/content/profile";
import { Section } from "./Section";

function SystemDiagram({ steps }: { steps: Project["flow"] }) {
  return (
    <figure className="border border-rule bg-paper">
      <figcaption className="flex items-center justify-between border-b border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>How a request moves</span>
        <span>{steps.length} stages</span>
      </figcaption>

      <ol className="flex flex-col items-stretch p-5 md:p-6 xl:flex-row">
        {steps.map((step, i) => (
          <li key={step.label} className="flex min-w-0 flex-col xl:flex-1 xl:flex-row xl:items-center">
            <div className="flex items-baseline gap-3 border border-ink/20 bg-paper-raised px-3.5 py-3 xl:block xl:w-full xl:self-stretch">
              <p className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</p>
              <div className="xl:mt-2">
                <p className="text-sm leading-tight text-ink">{step.label}</p>
                <p className="mt-1 font-mono text-[11px] leading-tight text-accent">{step.tech}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="wire relative mx-auto h-7 w-px shrink-0 bg-ink/25 xl:mx-0 xl:h-px xl:w-8"
                style={{ "--i": i } as React.CSSProperties}
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="02" title="Projects" tone="raised">
      <p data-reveal className="max-w-[52ch] text-lg text-ink-soft">
        Side projects I built end to end, each going deep on one hard part: geo search, vector retrieval, or
        real-time networking.
      </p>

      <ol className="mt-12 divide-y divide-rule border-t border-rule">
        {projects.map((project, i) => (
          <li key={project.name} data-reveal className="py-12 last:pb-0">
            <div className="grid gap-4 md:grid-cols-9 md:gap-8">
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-sm text-muted">{project.kind}</p>
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-5xl leading-none tracking-[-0.02em] md:text-6xl">{project.name}</h3>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.summary}</p>
              </div>
            </div>

            <div className="mt-8">
              <SystemDiagram steps={project.flow} />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-9 md:gap-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-2 md:pt-1">Notes</p>
              <div className="md:col-span-7">
                <ul className="space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="grid grid-cols-[1.25rem_1fr] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-xs text-muted">{project.stack.join("  /  ")}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
