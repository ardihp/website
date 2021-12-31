import React, { useState, useEffect } from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [windowWidth, setWindowWidth] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    setWindowWidth(window.screen.width);
  }, [windowWidth]);

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

  return (
    <div className="duration-300 sticky shadow-lg shadow-sky-200/25 top-0 border-b-2 border-dashed border-sky-200 rounded-b-xl z-50">
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm py-4 px-6 lg:px-40 duration-300">
        <Link href="/" passHref>
          <div className="flex items-center text-sky-500/50 cursor-pointer hover:animate-pulse">
            <i className="fas fa-hat-wizard text-xl mr-1" />
            <p className="font-fredoka text-2xl tracking-widest">rdi</p>
          </div>
        </Link>
        <Menu as="div" className="flex relative w-full justify-end">
          {({ open }) => (
            <>
              <div className="sm:hidden">
                <Menu.Button className="flex items-center justify-center w-9 h-9 hover:bg-sky-300/50 rounded-full text-sky-300 hover:text-white duration-300">
                  <i className="fas fa-bars text-lg" />
                </Menu.Button>
              </div>
              <div className="absolute top-16 right-2 sm:relative sm:inline-block sm:top-0 w-48 sm:w-auto">
                <Transition
                  show={windowWidth >= 640 ? true : open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95 -translate-y-5"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95 -translate-y-5"
                >
                  <Menu.Items
                    className="flex flex-col items-center bg-white/90 p-4 sm:p-0 border-2 sm:border-0 border-dashed border-sky-300/50 rounded-xl sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 divide-y sm:divide-y-0 sm:divide-x"
                    static
                  >
                    <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 text-sm font-manrope font-bold w-full">
                      {windowWidth < 640 && (
                        <Menu.Item>
                          <ActiveLink href="/">Home</ActiveLink>
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink href="/projects">Projects</ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink href="/about">About</ActiveLink>
                      </Menu.Item>
                    </div>
                    <div className="flex space-x-4 sm:pl-6 justify-between items-center pt-4 sm:pt-0 w-full">
                      {renderThemeChanger()}
                      <div className="flex items-center justify-center w-9 h-9 text-gray-400 hover:text-opacity-50 rounded-full duration-300">
                        <Menu.Item>
                          <a
                            href="https://github.com/ardihp/website"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-github text-xl" />
                          </a>
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Header;
