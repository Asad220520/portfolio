// src/pages/Home.jsx
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import Navbar from "../components/layout/Navbar";
import EducationSection from "../sections/EducationSection";
import SkillsSection from "../sections/SkillsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";

function Home() {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4">
        <HeroSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  mx-auto">
          <div id="about">
            <AboutSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}

export default Home;
