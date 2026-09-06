import Hero from "@/components/containers/hero";
import Experience from "@/components/containers/experience";
import Projects from "@/components/containers/projects";
import Skills from "@/components/containers/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
