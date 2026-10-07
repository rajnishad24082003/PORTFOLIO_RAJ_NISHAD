import { Capabilities, Recognition } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Capabilities />
        <Recognition />
        <Contact />
      </main>
      <RevealObserver />
    </>
  );
}
