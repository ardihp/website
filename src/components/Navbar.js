import React, { useEffect, useState } from "react";
import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import {
  Menu,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import ThemeChanger from "./ThemeChanger";
import MobileMenu from "./MobileMenu";

function Header() {
  const [version, setVersion] = useState("v1");

  useEffect(() => {
    if (version === "v2") {
      window.location.href = "/";
    }
  }, [version]);

  return (
    <div className="flex max-w-5xl mx-auto justify-between items-center py-4 px-6 duration-300">
      <div className="flex items-center gap-4">
        <Link href="/" passHref>
          <div className="flex items-center dark:text-white text-sky-500/50 cursor-pointer hover:animate-pulse">
            <p className="font-korean text-4xl font-bold">아르디</p>
          </div>
        </Link>

        <div className="flex items-center dark:bg-sky-500/20 hover:dark:bg-sky-500/25 bg-gray-300/30 rounded-full relative cursor-pointer">
          <Listbox value={version} onChange={setVersion}>
            <ListboxButton className="w-[65px] text-left px-3 py-[5px] font-fredoka font-medium text-sm dark:text-sky-400 text-gray-400">
              {version}
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              transition
              className="dark:bg-slate-800 bg-slate-100 w-[65px] z-[100] rounded-xl p-1 mt-1"
            >
              {["v2", "v1"].map((item, key) => (
                <ListboxOption
                  key={key}
                  value={item}
                  className="group flex items-center justify-between gap-2 rounded-lg py-1.5 px-2 select-none dark:data-[focus]:bg-slate-200/10 data-[focus]:bg-slate-400/20 cursor-pointer"
                >
                  <i className="fa fa-check text-[10px] stroke-0 invisible group-data-[selected]:visible group-data-[selected]:dark:text-sky-400 group-data-[selected]:text-gray-400" />
                  <p className="font-fredoka font-medium text-sm dark:text-white text-gray-400 group-data-[selected]:dark:text-sky-400 group-data-[selected]:text-gray-400">
                    {item}
                  </p>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>

          <div className="absolute right-3 pointer-events-none cursor-pointer">
            <i className="fa fa-chevron-down text-[10px] font-extrabold pointer-events-none dark:text-sky-400 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <div className="hidden sm:inline-block">
        <Menu
          as="div"
          className="flex items-center dark:bg-slate-900/90 dark:sm:bg-transparent bg-transparent sm:space-x-6 sm:divide-x"
        >
          <div className="flex items-center space-x-6 text-sm font-manrope font-bold w-full">
            <ActiveLink href="/blog">Blog</ActiveLink>
            <ActiveLink href="/projects">Projects</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
          </div>
          <div className="flex space-x-4 sm:pl-6 justify-between items-center pt-4 sm:pt-0 w-full">
            <ThemeChanger />
            <div className="flex items-center justify-center w-9 h-9 dark:text-white text-gray-400 dark:hover:text-opacity-50 hover:text-opacity-50 rounded-full duration-300">
              <a
                href="https://github.com/ardihp/website"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github text-xl" />
              </a>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
