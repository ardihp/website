import React from "react";
import Image from "next/image";
import IndexPict from "@/public/index.png";
import LinkHref from "@/components/LinkHref";

Index.title = "Ardi's Personal Website";

function Index() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full justify-center items-center">
      <div className="flex flex-col items-center md:items-start space-y-6 md:w-full duration-300">
        <div className="flex flex-col items-center md:items-start space-y-3 w-full">
          <p className="font-fredoka text-4xl md:text-5xl dark:text-white text-sky-500/50">
            <span className="dark:bg-sky-400/90 bg-sky-500/50 rounded-md text-white mr-2 px-2 tracking-wider">
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
        <p className="font-manrope font-bold text-md dark:text-slate-400 text-gray-600/80">
          Wanna see my past work ? {""}
          <LinkHref body="here" href="/projects" />.
        </p>
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
