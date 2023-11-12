import React from "react";
export const Backs = ({ name = "create", click, icon }) => {
  return (
    <button
      class="relative inline-flex items-center justify-center px-4 py-1 sm:px-6 sm:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-cyan-600 rounded-md group shadow-md"
      onClick={click}
    >
      {icon}
      <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span class="relative ms-3 capitalize">{name}</span>
    </button>
  );
};
