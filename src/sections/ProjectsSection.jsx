// src/sections/ProjectsSection.jsx
import { projects } from "../data/projects";
import ProjectCard from "../components/layout/ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Проекты</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
