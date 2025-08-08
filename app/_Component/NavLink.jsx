import React from "react";

function NavLink({ href, title }) {
  return (
    <a href={href} className="hover:text-blue-500 dark:hover:text-blue-400">
      {title}
    </a>
  );
}

export default NavLink;
