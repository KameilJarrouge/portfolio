import React, { useState } from "react";
import Modal from "./Modal";

function ProjectModal({ isOpen, setIsOpen, project }) {
  const [selectedTab, setSelectedTab] = useState("Overview");
  return (
    <Modal
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      uniqueName={"Project-" + project.title}
    >
      <div className="w-[90vw] h-[80vh] xl:w-[90vw] xl:h-[90vh] overflow-auto  flex flex-col gap-4 relative ">
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50 flex flex-col-reverse gap-2  md:flex-row md:justify-between md:items-center h-fit px-3 py-1.5 rounded-t">
          <div className="flex justify-between sm:justify-start sm:gap-6 ">
            <Tab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabName={"Overview"}
            />
            <Tab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabName={"Diagrams"}
            />
            <Tab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabName={"Screenshots"}
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 ">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 pr-4 h-[20rem]">
            Info goes here
          </p>
          <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-3 "></div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;

function Tab({ selectedTab, setSelectedTab, tabName }) {
  return (
    <button
      onClick={() => setSelectedTab(tabName)}
      className={` font-semibold text-gray-600 dark:text-gray-300 cursor-pointer ${
        selectedTab === tabName && "underline underline-offset-8"
      } `}
    >
      {tabName}
    </button>
  );
}
