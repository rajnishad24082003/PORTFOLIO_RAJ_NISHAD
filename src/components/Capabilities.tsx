import { capabilities, education, recognition } from "@/content/profile";
import { Section } from "./Section";

export function Capabilities() {
  return (
    <Section id="capabilities" index="03" title="Capabilities">
      <dl data-reveal className="divide-y divide-rule border-y border-rule">
        {capabilities.map((group) => (
          <div key={group.area} className="grid gap-2 py-5 md:grid-cols-9 md:gap-8">
            <dt className="text-sm text-muted md:col-span-2 md:pt-1">{group.area}</dt>
            <dd className="text-xl leading-snug md:col-span-7">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" index="04" title="Recognition">
      <ul data-reveal className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
        {recognition.map((item) => (
          <li key={item.title} className="bg-paper p-6">
            <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
          </li>
        ))}
      </ul>

      <div data-reveal className="mt-14 grid gap-2 md:grid-cols-9 md:gap-8">
        <p className="font-mono text-xs text-muted md:col-span-2 md:pt-2">{education.period}</p>
        <div className="md:col-span-7">
          <h3 className="font-serif text-3xl leading-tight">{education.degree}</h3>
          <p className="mt-2 text-ink-soft">
            {education.school} · {education.grade}
          </p>
        </div>
      </div>
    </Section>
  );
}
