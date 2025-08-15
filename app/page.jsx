"use client";
import About from "./_Component/Sections/About";
import Contact from "./_Component/Sections/Contact";
import Divider from "./_Component/Divider";
import Header from "./_Component/Header";
import Hero from "./_Component/Sections/Hero";
import Projects from "./_Component/Sections/Projects";
import Tech from "./_Component/Sections/Tech";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Divider />
      <Tech />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Contact />
    </div>
  );
}
