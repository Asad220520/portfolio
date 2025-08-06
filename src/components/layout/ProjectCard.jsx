import Button from "../ui/Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tech, github, demo, image }) {
  return (
    <div className="w-full h-80 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg [backface-visibility:hidden]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
          <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white w-full px-4 py-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">Наведи для деталей</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-lg shadow-lg bg-white dark:bg-gray-900 text-black dark:text-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <Button
              as="a"
              href={github}
              target="_blank"
              variant="secondary"
              className="flex items-center gap-2 text-sm"
            >
              <FaGithub /> GitHub
            </Button>
            <Button
              as="a"
              href={demo}
              target="_blank"
              className="flex items-center gap-2 text-sm"
            >
              <FaExternalLinkAlt /> Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
