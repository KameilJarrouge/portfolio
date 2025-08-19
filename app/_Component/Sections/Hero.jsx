import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center py-24 2xl:py-32 gap-6 ">
      <div className="rounded-full w-[200px] h-[200px] bg-white dark:bg-gray-800  mx-auto flex items-center justify-center overflow-hidden">
        <img src="/me.png" alt="img" className="object-cover w-full h-full" />
      </div>
      <div className=" flex flex-col gap-2 items-center">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-100 text-gray-800">
          Kamil Victor Jarrouj
        </h1>
        <p className=" text-lg md:text-xl text-gray-500 dark:text-gray-400">
          Full-Stack Engineer
        </p>
        <p className=" text-gray-500 dark:text-gray-400 px-2 text-center">
          I build thoughtful, reliable software — from backend systems to
          intuitive user interfaces.
        </p>
      </div>
      <a
        href="#projects"
        className=" inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        View Projects
      </a>
    </section>
  );
}

export default Hero;
