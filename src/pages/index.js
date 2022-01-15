import React from "react";
import Image from "next/image";
import IndexPict from "@/public/index.png";
import Link from "next/link";

Index.title = "Ardi's Personal Website";

function Index() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full justify-center items-center">
      <div className="flex flex-col items-center md:items-start space-y-8 md:w-full duration-300">
        <div className="flex flex-col items-center md:items-start space-y-3 w-full">
          <p className="font-fredoka text-4xl md:text-5xl dark:text-white text-sky-500/50">
            <span className="dark:bg-slate-700/60 bg-sky-500/50 rounded-md text-white mr-2 px-2 tracking-wider">
              Hai
            </span>
            , I&apos;m Ardi
            <i className="fas fa-paw ml-4 transform rotate-12" />
          </p>
          <p className="font-manrope font-bold text-md dark:text-slate-400 text-gray-600/80 text-center md:text-left w-72 md:w-96">
            On my way to becoming a software engineer specialized in frontend
            development.
          </p>
        </div>
        <Link href="/projects">
          <a className="flex dark:bg-sky-500 dark:hover:bg-sky-400 bg-slate-400/70 hover:bg-slate-400/50 h-10 px-6 shadow-lg dark:shadow-sky-500/25 rounded-lg space-x-2 items-center text-white duration-300">
            <p className="font-manrope font-bold text-sm">See my past work</p>
            <i className="fas fa-angle-right" />
          </a>
        </Link>
      </div>
      <div
        className="flex justify-center overflow-hidden items-center rounded-full duration-300 md:w-1/2"
        title="me lazy asf :)"
      >
        <div className="w-64 md:w-full">
          <Image
            src={IndexPict}
            alt="gambar index"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
