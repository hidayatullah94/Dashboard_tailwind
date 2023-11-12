import { useContext, useState } from "react";

import { TogleConsum } from "./context/GlobalContext";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/cms";
import { Mobile, Navbars, SideBars } from "./component";

function App() {
  const [togle] = useContext(TogleConsum);

  return (
    <div>
      <Mobile />
      {/* Static sidebar for desktop */}
      <SideBars />
      <div className={togle ? "lg:pl-14" : "lg:pl-72"}>
        <Navbars />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
