import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  TShirt,
  House,
  IdentificationCard,
  Calendar,
  FileSearch,
  PresentationChart,
  Gear,
} from "@phosphor-icons/react";
import { TogleConsum } from "../../context/GlobalContext";

const navigation = [
  { name: "Dashboard", href: "/", icon: House, id: 1 },
  { name: "Customer", href: "/customer", icon: IdentificationCard, id: 2 },
  { name: "Product", href: "/product", icon: TShirt, id: 3 },
  { name: "Calendar", href: "/event", icon: Calendar, id: 4 },
  {
    name: "Documents",
    href: "/doc",
    icon: FileSearch,
    id: 5,
  },
  { name: "Reports", href: "/report", icon: PresentationChart, id: 6 },
];
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H" },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T" },
//   { id: 3, name: "Workcation", href: "#", initial: "W" },
// ];
export const Links = () => {
  const [togle, setTogle] = useContext(TogleConsum);

  const storedValueAsNumber = Number(sessionStorage.getItem("count"));
  //nav link
  const [active, setActive] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 1
  );
  useEffect(() => {
    sessionStorage.setItem("count", String(active));
  }, [active]);
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={() => setActive(item.id)}
                  className={
                    active === item.id
                      ? "group flex gap-x-3 rounded-md py-2 text-sm leading-6 font-semibold text-white  bg-sky-900 pl-2 pr-8 "
                      : "group flex gap-x-3  py-2 text-sm leading-6 font-semibold  hover:text-white text-teal-600 hover:bg-sky-900 rounded-md pl-2 pr-8 "
                  }
                >
                  <item.icon
                    className={
                      active === item.id
                        ? "h-6 w-6 shrink-0  text-white"
                        : "h-6 w-6 shrink-0  text-teal-600  group-hover:text-white"
                    }
                    aria-hidden="true"
                  />
                  <span className={togle ? "hidden" : ""}>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        {/* <li>
    <div className="text-xs font-semibold leading-6 text-gray-400">
      Your teams
    </div>
    <ul role="list" className="-mx-2 mt-2 space-y-1">
      {teams.map((team) => (
        <li key={team.name}>
          <a
            href={team.href}
            className={classNames(
              team.current
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            )}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
              {team.initial}
            </span>
            <span className="truncate">{team.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </li> */}
        <li className="mt-auto">
          <a
            href="#"
            className="group -mx-2 flex gap-x-3 rounded-md py-2 pl-2 pr-8 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Gear className="h-6 w-6 shrink-0" aria-hidden="true" />
            {togle ? null : <span>Settings</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
};
