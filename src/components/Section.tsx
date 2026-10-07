type SectionProps = {
  id: string;
  index: string;
  title: string;
  /** "raised" sets the section on a slightly darker band for rhythm. */
  tone?: "plain" | "raised";
  children: React.ReactNode;
};

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Section({ id, index, title, tone = "plain", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-rule ${tone === "raised" ? "bg-paper-raised" : ""}`}
    >
      <Container className="grid gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28">
        <header className="md:col-span-3">
          <div data-reveal className="md:sticky md:top-24">
            <p className="font-mono text-xs text-accent">{index}</p>
            <h2 id={`${id}-title`} className="mt-2 font-serif text-4xl leading-none md:text-5xl">
              {title}
            </h2>
          </div>
        </header>
        <div className="md:col-span-9">{children}</div>
      </Container>
    </section>
  );
}
