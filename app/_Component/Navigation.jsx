import React from "react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:py-3 flex sm:flex-row sm:justify-between sm:items-center flex-col items-center pt-3 pb-1">
      <h1 className="text-xl font-bold">Kamil Victor Jarrouj</h1>

      <ul className="flex gap-6 text-sm items-center">
        <li>
          <NavLink href={"#projects"} title={"Projects"} />
        </li>
        <li>
          <NavLink href={"#about"} title={"About"} />
        </li>
        <li>
          <NavLink href={"#contact"} title={"Contact"} />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
