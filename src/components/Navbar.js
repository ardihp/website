import React from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

function Header() {
  return (
    <div className="m-6 shadow-lg shadow-sky-200/25 border-2 border-dashed border-sky-200 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center bg-white py-4 px-6">
        <Link href="/" passHref>
          <div className="flex items-center text-sky-500/50 cursor-pointer hover:animate-pulse">
            <i className="fas fa-hat-wizard text-xl mr-1" />
            <p className="font-fredoka text-2xl tracking-widest">rdi</p>
          </div>
        </Link>
          <div className="flex space-x-6 divide-x items-center">
            <div className="flex space-x-6 text-sm font-manrope font-bold">
              <ActiveLink href="/blog">Blog</ActiveLink>
              <ActiveLink href="/projects">Projects</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
            </div>
            <div className="flex space-x-4 pl-6 items-center text-gray-400">
              <div>
                <a
                  href="https://github.com/ardihp/website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-moon text-lg duration-200 py-1 px-2 rounded-full hover:bg-sky-300/50 hover:text-white" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/ardihp/website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github text-xl duration-200 py-1 px-2 rounded-full hover:bg-sky-300/50 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
