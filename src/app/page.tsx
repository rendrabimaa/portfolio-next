import Hero from "../containers/home-page/hero";
import About from "../containers/home-page/about";
import Experience from "../containers/home-page/experience";
import Projects from "@/containers/home-page/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="px-12 w-full lg:w-4/5 mx-auto h-screen flex items-center" id="hero">
        <Hero />
      </div>
      <div className="px-12 w-full lg:w-4/5 mx-auto h-screen flex items-center" id="about">
        <About />
      </div>
      <div className="px-12 w-full lg:w-4/5 mx-auto h-screen flex items-start mt-24" id="experience">
        <Experience />
      </div>
      <div className="px-12 w-full lg:w-4/5 mx-auto min-h-screen flex items-center" id="projects">
        <Projects />
      </div>
    </main>
  );
}
