import { useContext, useEffect, useState } from "react";
import { TogleConsum } from "./context/GlobalContext";
import { Route, Routes } from "react-router-dom";
import { Landing, Login } from "./pages/landing";
import {
  Ambulan,
  Derek,
  Kalalin,
  Katrans,
  Patroli,
  Rescue,
  Senkom,
} from "./pages/client";
import { Cms } from "./pages/cms";
import { Mobile, Navbars, SideBars } from "./component";

function App() {
  const [togle] = useContext(TogleConsum);
  const [isLogin, setIsLogin] = useState(false);
  const Roles = JSON.parse(sessionStorage.getItem("Role"));
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        setIsLogin(false);
      }, 1000);
    }
    setTimeout(() => {
      setIsLogin(true);
    }, 1000);
  }, []);

  if (isLogin && token) {
    if (Roles === "KASHIFT_LALIN") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/ka-lalin" element={<Kalalin />} />
          </Routes>
        </main>
      );
    } else if (Roles === "KASHIFT_TRANS") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/ka-trans" element={<Katrans />} />
          </Routes>
        </main>
      );
    } else if (Roles === "PATROLI") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/patroli" element={<Patroli />} />
          </Routes>
        </main>
      );
    } else if (Roles === "DEREK") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/derek" element={<Derek />} />
          </Routes>
        </main>
      );
    } else if (Roles === "AMBULAN") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/ambulan" element={<Ambulan />} />
          </Routes>
        </main>
      );
    } else if (Roles === "RESCUE") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/rescue" element={<Rescue />} />
          </Routes>
        </main>
      );
    } else if (Roles === "SENKOM") {
      return (
        <main className="h-screen">
          <Routes>
            <Route path="/senkom" element={<Senkom />} />
          </Routes>
        </main>
      );
    } else {
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
                  <Route path="/adm" element={<Cms />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      );
    }
  } else {
    return (
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    );
  }
}

export default App;
