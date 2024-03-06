import React, { createContext, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function Sidebar({ children, expanded, setExpanded }) {
  return (
    <aside className="h-screen bg-palebrown">
      <nav className="flex flex-col p-4 h-full shadow-sm border-2 border-stone-50">
        <div className="flex items-center justify-between">
          <img
            src="/assets/doubtell-logo-2.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          />
          <button onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? <ChevronLeftIcon /> : <ChevronRightOutlinedIcon />}
          </button>
        </div>

        <ul className="flex-1 mt-6">{children}</ul>

        <div className="shadow-sm p-2 flex items-center">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="avatar"
            className="h-10 w-10 rounded"
          />

          <div
            className={`flex items-center flex-1 justify-between overflow-hidden transition-all ${
              expanded ? "leading-4" : "w-0"
            }`}
          >
            <div className="mr-2 transition-all ml-3">
              <h4 className="font-semibold"> John Doe</h4>
              <div className="text-xs text-gray-600 whitespace-nowrap	">
                jasnadoe@gmail.com
              </div>
            </div>
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
