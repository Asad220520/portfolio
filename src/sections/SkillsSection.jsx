import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTrello,
  SiFigma,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "SCSS", icon: <SiSass className="text-pink-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
];


function SkillsSection() {
  return (
    <section id="skills" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6"> Навыки</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded shadow text-lg text-black dark:text-white"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
