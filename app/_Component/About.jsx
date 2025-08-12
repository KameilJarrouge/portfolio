import React from "react";

function About() {
  return (
    <section
      id="about"
      className=" text-gray-800 dark:text-gray-100 py-16 px-2 flex gap-6 w-7xl 2xl:w-[96rem] min-h-[40rem] self-center"
    >
      <div className="w-2/5 flex flex-col gap-6">
        <img
          src="/about.jpg"
          alt="Kamil"
          className="w-full h-[20rem] bg-gray-800"
        />

        <div className="mt">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Download CV
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv-fullstack.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Full-Stack Developer
            </a>
            <a
              href="/cv-software.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Software Engineer
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/5 ">
        {/* Intro */}
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300  mb-6">
          I'm a full-stack engineer who builds tools that solve real-world
          problems — from clinic management systems to DIY health trackers. I
          design with empathy, prioritize reliability, and believe that great
          software should feel invisible to the user.
        </p>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              AL-Hawash Private University - Bachelor's of Informatics
              Engineering.
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 flex gap-6">
            <li>English (fluent)</li>
            <li>Arabic (native)</li>
            <li>German (A1-A2)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Certificates</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/CVLQRWJCF9HF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                IBM - Introduction to Networking and Storage
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/NMUMC6JQM4PU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                DeepLearning.AI - Sequence Models
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/U5GYNTGANRBD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                DeepLearning.AI - Convolutional Neural Networks
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/WP4RA66HSN92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                DeepLearning.AI - Improving Deep Neural Networks
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/MV63R2EUZS7K"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                DeepLearning.AI - Neural Networks and Deep Learning
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/5J8B5HSJ6S78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                DeepLearning.AI - Structuring Machine Learning Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <p className="text-gray-500 dark:text-gray-400">
            Curious how I turn ideas into tools? Explore my{" "}
            <a
              href="#projects"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              project showcase
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
