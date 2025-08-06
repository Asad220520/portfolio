import { useState, useEffect } from "react";
import Button from "../ui/Button";

function ProjectCard({ title, description, tech, github, demo, image }) {
  const [isMobile, setIsMobile] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlip = () => {
    if (isMobile) {
      setFlipped(!flipped);
    }
  };

  return (
    <div className="w-full h-80 perspective" onClick={handleFlip}>
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        } group`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png"; // fallback image
            }}
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg bg-white dark:bg-gray-900 p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Button as="a" href={github} target="_blank" variant="secondary">
              GitHub
            </Button>
            <Button as="a" href={demo} target="_blank">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
