import React, { useState, useEffect } from "react";
import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import { Menu, Transition } from "@headlessui/react";
import ThemeChanger from "./ThemeChanger";

function Header() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.screen.width);
  }, [windowWidth]);

  return (
    <div className="flex max-w-5xl mx-auto justify-between items-center py-4 px-6 duration-300">
      <Link href="/" passHref>
        <div className="flex w-28 items-center dark:text-white text-sky-500/50 cursor-pointer hover:animate-pulse">
          <p className="font-korean text-4xl font-bold">아르디</p>
        </div>
      </Link>
      <Menu as="div" className="flex relative w-full justify-end">
        {({ open }) => (
          <>
            <div className="sm:hidden">
              <Menu.Button className="flex items-center justify-center w-9 h-9 dark:hover:bg-sky-500/30 hover:bg-sky-300/50 rounded-full dark:text-white text-sky-300 hover:text-white duration-300">
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
                  className="flex flex-col items-center dark:bg-slate-900/90 bg-white/90 sm:bg-transparent p-4 sm:p-0 border-2 sm:border-0 border-dashed dark:border-slate-400 border-sky-300/50 rounded-xl sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 divide-y sm:divide-y-0 sm:divide-x"
                  static
                >
                  <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 text-sm font-manrope font-bold w-full">
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
                    <ThemeChanger />
                    <div className="flex items-center justify-center w-9 h-9 dark:text-white text-gray-400 dark:hover:text-opacity-50 hover:text-opacity-50 rounded-full duration-300">
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
  );
}

export default Header;
