import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import Divider from "../Divider";
import PROJECTS from "../Static/projects";

function Projects() {
  const [filter, setFilter] = useState("");
  const [showMore, setShowMore] = useState(false);
  const applyFilter = (project) => {
    const query = filter.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.type?.toLowerCase().includes(query) ||
      project.stack.some((tech) => tech.toLowerCase().includes(query)) ||
      project.description?.toLowerCase().includes(query) ||
      project.highlights?.some((h) => h.toLowerCase().includes(query)) ||
      project.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 w-full 2xl:w-[96rem] min-h-[40rem]  self-center"
    >
      <div className="w-full flex justify-between items-center mb-8 ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 ">
          Projects
        </h2>
        <input
          type="text"
          className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 shadow-md p-1"
          placeholder="Filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {PROJECTS.filter(applyFilter)
          .slice(0, showMore || filter !== "" ? undefined : 6)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>

      {filter === "" && (
        <div className="w-full flex gap-2 items-center mt-[1rem]">
          <Divider />
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-[25ch] text-gray-700 dark:text-gray-200 cursor-pointer text-sm"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <Divider />
        </div>
      )}
    </section>
  );
}

export default Projects;
