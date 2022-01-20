import React from "react";
import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import { Menu } from "@headlessui/react";
import ThemeChanger from "./ThemeChanger";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <div className="flex max-w-5xl mx-auto justify-between items-center py-4 px-6 duration-300">
      <Link href="/" passHref>
        <div className="flex w-28 items-center dark:text-white text-sky-500/50 cursor-pointer hover:animate-pulse">
          <p className="font-korean text-4xl font-bold">아르디</p>
        </div>
      </Link>
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
