import React, { useState, useEffect } from "react";

function BackgroundGrid() {
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
    <>
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
    </>
  );
}

export default BackgroundGrid;
