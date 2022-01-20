import React from "react";
import ActiveLink from "@/components/ActiveLink";
import { Menu, Transition } from "@headlessui/react";
import ThemeChanger from "./ThemeChanger";

function MobileMenu() {
  return (
    <Menu as="div" className="flex relative w-full justify-end">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-center w-9 h-9 dark:hover:bg-sky-500/30 hover:bg-sky-300/50 rounded-full dark:text-white text-sky-300 hover:text-white duration-300">
            <i className="fas fa-bars text-lg" />
          </Menu.Button>
          <div className="absolute top-16 right-2 w-48">
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95 -translate-y-5"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95 -translate-y-5"
            >
              <Menu.Items
                className="flex flex-col items-center dark:bg-slate-900/90 bg-white/90 p-4 border-2 border-dashed dark:border-slate-400 border-sky-300/50 rounded-xl space-y-4 divide-y"
                static
              >
                <div className="flex flex-col items-center space-y-2 text-sm font-manrope font-bold w-full">
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
                <div className="flex space-x-4 justify-between items-center pt-4 w-full">
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
  );
}

export default MobileMenu;
