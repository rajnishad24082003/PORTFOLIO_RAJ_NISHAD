import { profile } from "@/content/profile";
import { CurrentYear } from "./Clock";
import { Container } from "./Section";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-paper">
      <Container className="py-24 md:py-36">
        <p className="font-mono text-xs text-accent">05</p>
        <h2 id="contact-title" data-reveal className="mt-2 max-w-[16ch] font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
          Building something? <span className="italic text-accent">Let&rsquo;s talk.</span>
        </h2>

        <p className="mt-8 max-w-[48ch] text-lg text-paper/70">
          I&rsquo;m open to software developer roles, and to conversations about Java services, AI systems and
          React apps. Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-12 inline-block break-all border-b border-paper/30 pb-1 font-serif text-[clamp(1.6rem,4.2vw,3.25rem)] leading-tight transition-colors hover:border-accent hover:text-accent"
        >
          {profile.email}
        </a>

        <div className="mt-20 grid gap-8 border-t border-paper/15 pt-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Elsewhere</p>
            <ul className="mt-3 space-y-1.5">
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener" className="link-draw">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Direct</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-draw">
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Résumé</p>
            <a href={profile.resume} target="_blank" rel="noopener" className="link-draw mt-3 inline-block">
              View résumé ↗
            </a>
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-4 border-t border-paper/15 py-6 text-xs text-paper/50">
        <p>
          © <CurrentYear /> {profile.fullName}
        </p>
        <a href="#top" className="link-draw">
          Back to top ↑
        </a>
      </Container>
    </section>
  );
}
