import React from "react";
import ReactIcon from "./DevIcons/ReactIcon";
import LaravelIcon from "./DevIcons/LaravelIcon";
import PythonIcon from "./DevIcons/PythonIcon";
import JavascriptIcon from "./DevIcons/JavascriptIcon";
import SQLiteIcon from "./DevIcons/SQLiteIcon";
import NextJsIcon from "./DevIcons/NextJsIcon";
import TailwindIcon from "./DevIcons/TailwindIcon";
import JavaIcon from "./DevIcons/JavaIcon";
import PHPIcon from "./DevIcons/PHPIcon";
import SQLIcon from "./DevIcons/SQLIcon";
import ExpressJSIcon from "./DevIcons/ExpressJSIcon";
import CSSIcon from "./DevIcons/CSSIcon";
import MySQLIcon from "./DevIcons/MySQLIcon";
import GitIcon from "./DevIcons/GitIcon";
import GithubIcon from "./DevIcons/GithubIcon";
import VercelIcon from "./DevIcons/VercelIcon";
import GraphQLIcon from "./DevIcons/GraphQLIcon";
import NodeIcon from "./DevIcons/NodeIcon";
import BashIcon from "./DevIcons/BashIcon";
import SocketIOIcon from "./DevIcons/SocketIOIcon";

const SECTIONS = [
  {
    title: "Languages",
    badges: [
      { title: "Javascript", icon: <JavascriptIcon /> },
      { title: "Python", icon: <PythonIcon /> },
      { title: "Java", icon: <JavaIcon /> },
      { title: "PHP", icon: <PHPIcon /> },
      { title: "SQL", icon: <SQLIcon /> },
      { title: "Graphql", icon: <GraphQLIcon /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    badges: [
      { title: "React", icon: <ReactIcon /> },
      { title: "NextJS", icon: <NextJsIcon /> },
      { title: "Laravel", icon: <LaravelIcon /> },
      { title: "ExpressJS", icon: <ExpressJSIcon /> },
      { title: "ReactNative", icon: <ReactIcon /> },
      { title: "Socket.io", icon: <SocketIOIcon /> },
    ],
  },
  {
    title: "Styling & UI",
    badges: [
      { title: "Tailwindcss", icon: <TailwindIcon /> },
      { title: "CSS3", icon: <CSSIcon /> },
    ],
  },
  {
    title: "Databases",
    badges: [
      { title: "SQLite", icon: <SQLiteIcon /> },
      { title: "MySQL", icon: <MySQLIcon /> },
    ],
  },
  {
    title: "Tools & Dev Experience",
    badges: [
      { title: "Git", icon: <GitIcon /> },
      { title: "Github", icon: <GithubIcon /> },
      { title: "Vercel", icon: <VercelIcon /> },
    ],
  },
  {
    title: "CLI / DX Tools",
    badges: [
      { title: "Nodejs", icon: <NodeIcon /> },
      { title: "Bash", icon: <BashIcon /> },
    ],
  },
];

function Tech() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-16 px-8 gap-y-5 flex-wrap">
      {SECTIONS.map((section, index) => (
        <Section key={index} title={section.title}>
          {section.badges.map((badge, bIndex) => (
            <TechBadge key={bIndex} title={badge.title} icon={badge.icon} />
          ))}
        </Section>
      ))}
    </section>
  );
}

export default Tech;

function Section({ title, children }) {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 ">
        {title}
      </h2>
      <div className="grid grid-cols-2  gap-4 text-gray-500 dark:text-gray-400 ">
        {children}
      </div>
    </section>
  );
}

function TechBadge({ icon, title }) {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 px-3 py-2 rounded flex items-center gap-4 min-w-[18ch]">
      <div className="w-[1.5rem] h-fit">{icon}</div>
      <span>{title}</span>
    </div>
  );
}
