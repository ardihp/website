import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image404 from "@/public/404.png";

Page404.title = "Whoops, Destination Not Found!";
function Page404() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-10 lg:space-y-0 w-full justify-center items-center">
      <div className="flex flex-col items-center lg:items-start space-y-8 lg:w-3/4">
        <div className="flex flex-col items-center lg:items-start w-full font-fredoka space-y-1 text-4xl md:text-5xl dark:text-slate-200 text-sky-500/50">
          <div className="flex items-center space-x-4">
            <p>There&apos;s</p>
            <p className="dark:bg-slate-700/60 bg-sky-500/50 rounded-md text-white mr-2 px-2 py-2 tracking-wider">
              Nothing
            </p>
          </div>
          <p>You Can See Here!</p>
        </div>
        <Link href="/">
          <a className="flex dark:bg-sky-500 dark:hover:bg-sky-400 bg-slate-400/70 hover:bg-slate-400/50 h-10 px-6 shadow-lg dark:shadow-sky-500/25 rounded-lg space-x-2 items-center text-white duration-300">
            <p className="font-manrope font-bold text-sm">Go back to Home</p>
            <i className="fas fa-angle-right" />
          </a>
        </Link>
      </div>
      <div className="flex justify-center overflow-hidden items-center rounded-full duration-300 lg:w-2/4">
        <div className="w-72 lg:w-full">
          <Image
            src={Image404}
            alt="gambar index"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default Page404;
