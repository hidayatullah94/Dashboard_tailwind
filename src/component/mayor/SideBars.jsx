import React, { useContext } from "react";
import { TogleConsum } from "../../context/GlobalContext";
import { ArrowsIn, ArrowsOut } from "@phosphor-icons/react";
import { Links } from "./Links";

export const SideBars = () => {
  const [togle, setTogle] = useContext(TogleConsum);
  return (
    <div
      className={
        togle
          ? "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-16 lg:flex-col"
          : "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
      }
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center justify-between">
          {togle ? null : (
            <>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <p className="text-white">Operasional</p>
            </>
          )}
          <button className="text-white" onClick={() => setTogle(!togle)}>
            {togle ? <ArrowsOut size={24} /> : <ArrowsIn size={24} />}
          </button>
        </div>
        <Links />
      </div>
    </div>
  );
};
