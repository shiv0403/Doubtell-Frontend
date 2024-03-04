import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Sidebar({ children }) {
  return (
    <div className="flex flex-col h-screen shadow-sm border-2 border-stone-50 w-64 p-4">
      <div className="flex items-center justify-between">
        <img src="/assets/doubtell-logo-2.png" className="w-36" />
        <ChevronLeftIcon />
      </div>
      <ul className="flex-1 mt-6">{children}</ul>
      <div className="shadow-sm p-3 flex items-center">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="avatar"
          className="h-10 w-10 rounded"
        />
        <div className="leading-4 ml-3">
          <h4 className="font-semibold"> John Doe</h4>
          <span className="text-xs text-gray-600">johndoe@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
