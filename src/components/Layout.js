import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Layout({ children }) {
  const [value, setValue] = useState(0);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (value < 20) {
      setGrid([...grid, grid]);
      setValue(value + 1);
    } else {
      console.log("stop");
    }
  }, [value, grid]);

  return (
    <div className="flex flex-col min-h-screen max-h-full relative">
      <div className="sticky shadow-lg dark:bg-slate-900/95 bg-white/95 backdrop-blur-sm dark:shadow-sky-500/25 shadow-sky-200/25 top-0 border-b-2 border-dashed dark:border-slate-300 border-sky-200 rounded-b-xl z-50">
        <Navbar />
      </div>
      <div className="flex grow justify-center duration-300">
        <div className="flex max-w-5xl mx-auto px-6 w-full">{children}</div>
      </div>
      <Footer />
      <div className="fixed top-0 bg-gradient-to-b dark:from-slate-900 from-white dark:to-slate-900/80 to-white/90 h-full w-full -z-10" />
      <div className="fixed top-0 w-full max-h-screen -z-20 overflow-hidden">
        <div className="grid grid-cols-2">
          {grid.map((g, index) => (
            <div
              key={index}
              className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10"
            >
              {grid.map((g, index) => (
                <div
                  key={index}
                  className="border dark:border-white/10 border-gray-800/40 h-16"
                >
                  {""}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
