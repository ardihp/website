import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";

function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const renderThemeChanger = () => {
    if (!loaded) return;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Menu.Item>
          <button
            type="button"
            onClick={() => setTheme("light")}
            className="w-9 h-9 text-gray-400 hover:text-opacity-50 rounded-full duration-150"
          >
            <i className="fas fa-sun text-lg" />
          </button>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className="w-9 h-9 text-gray-400 hover:text-opacity-50 rounded-full duration-150"
          >
            <i className="fas fa-moon text-lg" />
          </button>
        </Menu.Item>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}

export default ThemeChanger;
