import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Layout({ children }) {
  const [value, setValue] = useState(0);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (value < 30) {
      setGrid([...grid, grid]);
      setValue(value + 1);
    } else {
      console.log("stop");
    }
  }, [value, grid]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="sticky shadow-lg shadow-sky-200/25 top-0 border-b-2 border-dashed border-sky-200 rounded-b-xl z-50">
        <Navbar />
      </div>
      <div className="flex grow justify-center duration-300">
        <div className="max-w-5xl mx-auto px-6">{children}</div>
      </div>
      <Footer />
      <div className="absolute top-0 bg-gradient-to-b from-white to-white/60 h-full w-full -z-10" />
      <div className="absolute bottom-0 w-full h-auto -z-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
          {grid.map((g, index) => (
            <div
              key={index}
              className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10"
            >
              {grid.map((g, index) => (
                <div key={index} className="border border-gray-500/10 h-16">
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
