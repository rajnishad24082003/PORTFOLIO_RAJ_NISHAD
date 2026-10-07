import { profile } from "@/content/profile";
import { LocalTime } from "./Clock";
import { Container } from "./Section";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper">
      <Container className="flex h-14 items-center justify-between gap-6 text-sm">
        <a href="#top" className="font-serif text-xl leading-none">
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-draw text-ink-soft hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-xs text-muted sm:inline">
            Mumbai <LocalTime timeZone={profile.timeZone} /> IST
          </span>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-ink px-3.5 py-1 text-[13px] transition-colors hover:bg-ink hover:text-paper"
          >
            Résumé
          </a>
        </div>
      </Container>
    </header>
  );
}
