import React, { useContext } from "react";

function SidebarItem({ active, alert, icon, text, expanded }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${
      active
        ? "bg-gradient-to-tr from-lightbrown to-lightbrown text-gray"
        : "hover:bg-lightbrown text-gray"
    }`}
    >
      {icon}
      <span
        className={`whitespace-nowrap overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-gray overflow-hidden transition-all ${
            expanded ? "w-0" : "top-2 right-3"
          }`}
        />
      )}
    </li>
  );
}

export default SidebarItem;
