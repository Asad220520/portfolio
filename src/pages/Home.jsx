// src/pages/Home.jsx
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </main>
    </>
  );
}

export default Home;
