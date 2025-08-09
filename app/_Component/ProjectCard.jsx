import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div className="absolute bottom-[0.5rem] right-[0.5rem] text-xs text-gray-500 dark:text-gray-400 ">
        {project.footer}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 my-2" />

      {project.highlights && (
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
          {project.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      <a
        href="#"
        className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
      >
        View Details
      </a>
    </div>
  );
}

export default ProjectCard;
