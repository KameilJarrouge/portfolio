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

function Tech() {
  return (
    <section className="grid grid-cols-3  py-16 px-8 gap-y-5 flex-wrap">
      <Section title={"Languages"}>
        <TechBadge icon={<JavascriptIcon />} title={"Javascript"} />
        <TechBadge icon={<PythonIcon />} title={"Python"} />
        <TechBadge icon={<JavaIcon />} title={"Java"} />
        <TechBadge icon={<PHPIcon />} title={"PHP"} />
        <TechBadge icon={<SQLIcon />} title={"SQL"} />
        <TechBadge icon={<GraphQLIcon />} title={"Graphql"} />
      </Section>
      <Section title={"Frameworks & Libraries"}>
        <TechBadge icon={<ReactIcon />} title={"React"} />
        <TechBadge icon={<NextJsIcon />} title={"NextJS"} />
        <TechBadge icon={<LaravelIcon />} title={"Laravel"} />
        <TechBadge icon={<ExpressJSIcon />} title={"ExpressJS"} />
        <TechBadge icon={<ReactIcon />} title={"ReactNative"} />
        <TechBadge icon={<SocketIOIcon />} title={"Socket.io"} />
      </Section>
      <Section title={"Styling & UI"}>
        <TechBadge icon={<TailwindIcon />} title={"Tailwindcss"} />
        <TechBadge icon={<CSSIcon />} title={"CSS3"} />
      </Section>
      <Section title={"Databases"}>
        <TechBadge icon={<SQLiteIcon />} title={"SQLite"} />
        <TechBadge icon={<MySQLIcon />} title={"MySQL"} />
      </Section>
      <Section title={"Tools & Dev Experience"}>
        <TechBadge icon={<GitIcon />} title={"Git"} />
        <TechBadge icon={<GithubIcon />} title={"Github"} />
        <TechBadge icon={<VercelIcon />} title={"Vercel"} />
      </Section>
      <Section title={"CLI / DX Tools"}>
        <TechBadge icon={<NodeIcon />} title={"Nodejs"} />
        <TechBadge icon={<BashIcon />} title={"Bash"} />
      </Section>
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
