import React from "react";
import LinkHref from "@/components/LinkHref";
import Image from "next/image";
import Image404 from "@/public/404.png";

Page404.title = "Whoops, Destination Not Found!";
function Page404() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-12 lg:space-y-0 w-full justify-center items-center">
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-3/4">
        <div className="flex flex-col items-center lg:items-start w-full font-fredoka space-y-1 text-4xl md:text-5xl text-sky-500/50">
          <div className="flex items-center space-x-4">
            <p>There&apos;s</p>
            <p className="bg-sky-500/50 rounded-md text-white mr-2 px-2 py-2 tracking-wider">
              Nothing
            </p>
          </div>
          <p>You Can See Here!</p>
        </div>
        <p className="font-manrope font-bold text-md text-gray-600/80">
          How about you go back to home ? {""}
          <LinkHref body="here" href="/" />.
        </p>
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
