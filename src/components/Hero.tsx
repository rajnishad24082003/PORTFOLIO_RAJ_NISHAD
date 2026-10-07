import Image from "next/image";
import portrait from "@/assets/raj.jpg";
import { education, figures, profile, ticker } from "@/content/profile";
import { Container } from "./Section";
import { Ticker } from "./Ticker";

const facts = [
  { term: "Currently", detail: "SDE II, Hummingbird Web Solutions" },
  { term: "Previously", detail: "Intern, Accenture" },
  { term: "Studied", detail: `B.E. Computer Science, TCET · ${education.grade.replace("CGPA ", "")}` },
  { term: "Based in", detail: profile.location },
];

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="pt-14 md:pt-24">
      <Container>
        <p className="rise font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Software developer · Java · AI · React
        </p>

        {/* Phones stack name, photo, intro, links, facts. From md up the photo
            runs down the right while the name, intro and links fill the left. */}
        <div className="mt-6 grid gap-y-10 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
          <h1
            className="rise font-serif text-[clamp(4.25rem,19vw,12.5rem)] leading-[0.82] md:text-[min(14.5vw,12.5rem)] tracking-[-0.03em] md:col-span-8 md:row-start-1"
            style={delay(1)}
          >
            Raj <span className="italic text-accent">Nishad</span>
          </h1>

          <figure className="rise md:col-span-4 md:col-start-9 md:row-span-3 md:row-start-1" style={delay(2)}>
            <Image
              src={portrait}
              alt="Raj Nishad smiling, in a brown shirt, at his desk"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/5] w-full border border-rule object-cover object-top"
            />
            <figcaption className="mt-2 flex justify-between font-mono text-[11px] text-muted">
              <span>At my desk</span>
              <span>Mumbai</span>
            </figcaption>
          </figure>

          <p
            className="rise font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] md:col-span-7 md:row-start-2"
            style={delay(3)}
          >
            I&rsquo;m a software developer working across Java, AI and React: Spring Boot services, RAG pipelines on
            AWS Bedrock, and the React interfaces people use every day.
          </p>

          <div
            className="rise flex flex-wrap items-center gap-x-8 gap-y-4 self-end text-sm md:col-span-8 md:row-start-3"
            style={delay(4)}
          >
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-accent"
            >
              Get in touch
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            {profile.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className="link-draw text-ink-soft hover:text-ink">
                {link.label} ↗
              </a>
            ))}
          </div>

          <dl
            className="rise grid grid-cols-2 gap-x-6 gap-y-6 text-sm md:col-span-12 md:row-start-4 md:grid-cols-4 md:gap-x-8"
            style={delay(5)}
          >
            {facts.map((fact) => (
              <div key={fact.term} className="border-t border-rule pt-2.5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{fact.term}</dt>
                <dd className="mt-1 text-ink">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="rise mt-16 md:mt-20" style={delay(6)}>
        <Ticker items={ticker} />
      </div>

      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {figures.map((figure, i) => {
            // Two columns on phones, four in a row from md up.
            const rules = [
              i % 2 === 1 && "border-l pl-5",
              i >= 2 && "border-t md:border-t-0",
              i > 0 && "md:border-l md:pl-6",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <li key={figure.value} className={`border-rule py-8 pr-5 md:py-12 md:pr-6 ${rules}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{figure.context}</p>
                <p className="mt-4 whitespace-nowrap text-[2.1rem] font-semibold leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {figure.value}
                </p>
                <p className="mt-4 max-w-[26ch] text-sm leading-snug text-muted">{figure.label}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
