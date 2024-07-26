

import React from "react";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-[40.8vh]">
      <div className="border-4 border-t-4 border-t-indigo-600 border-gray-200 rounded-full w-10 h-10 mb-2 animate-spin"></div>
      <p className="text-xl">Loading...</p>
    </div>
  );
}

export default Loader;
