import React from "react";
import Modal from "./Modal";
import ImageCarousel from "../ImageCarousel";

function ProjectModal({ isOpen, setIsOpen, project }) {
  return (
    <Modal
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      uniqueName={"Project-" + project.title}
    >
      <div className="max-w-[90vw] w-fit h-fit max-h-[80vh] xl:max-h-[90vh]  overflow-auto bg-white dark:bg-gray-900 p-6 rounded-lg ">
        {/* Title + Stack */}
        <section className="flex flex-wrap justify-between items-center gap-4 ">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}{" "}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              ({project.type})
            </span>
          </h2>
          {project.recommendation && (
            <a
              href={project.recommendation}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline w-fit cursor-pointer "
            >
              Recommendation Letter
            </a>
          )}
        </section>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 mt-1">
          {project.stack.join(" • ")}
        </p>

        {/* Overview Section */}
        {project.description && (
          <section className="mb-6 max-w-[70ch]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Overview
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </section>
        )}

        {/* Highlights Section */}
        {project.highlights?.length > 0 && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        )}

        {project.diagrams?.length > 0 && (
          <section className="mb-6 max-w-[90ch]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Architecture / Diagrams
            </h3>
            <ImageCarousel images={project.diagrams} />
          </section>
        )}

        {/* Screenshots Section */}
        {project.screenshots?.length > 0 && (
          <section className="mb-6 max-w-[90ch]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Screenshots
            </h3>
            <ImageCarousel images={project.screenshots} />
          </section>
        )}

        {/* Repos */}
        {project.repos?.length > 0 && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Code
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {project.repos.map((repo, i) => (
                <li key={i}>
                  {" "}
                  <a
                    href={repo.url}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {repo.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>{" "}
    </Modal>
  );
}

export default ProjectModal;
