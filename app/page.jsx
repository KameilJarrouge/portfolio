"use client";
import Divider from "./_Component/Divider";
import Header from "./_Component/Header";
import Hero from "./_Component/Hero";
import Projects from "./_Component/Projects";
import Tech from "./_Component/Tech";

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
    </div>
  );
}
