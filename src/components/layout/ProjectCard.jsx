// src/components/ProjectCard.jsx
function ProjectCard({ title, description, tech, github, demo, image }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
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
      <div className="flex gap-4 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
