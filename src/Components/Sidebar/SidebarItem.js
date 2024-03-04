import React from "react";

function SidebarItem({ active, alert, icon, text }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
    ${
      active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover:bg-indigo-50 text-gray-600"
    }`}
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />
      )}
    </li>
  );
}

export default SidebarItem;
