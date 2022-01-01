import React from "react";
import IndexPict from "../../public/index.png";
import Image from "next/image";
import Head from "next/head";
import LinkHref from "../components/LinkHref";

function Index() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full justify-center items-center">
      <Head>
        <title>Ardi&apos;s Personal Website</title>
      </Head>
      <div className="flex flex-col items-center md:items-start space-y-6 md:w-full">
        <div className="flex flex-col items-center md:items-start space-y-3 w-full">
          <p className="font-fredoka text-4xl md:text-5xl text-sky-500/50">
            Hey, I&apos;m Ardi
            <span className="font-normal">👋🏻</span>
          </p>
          <p className="font-manrope font-extrabold text-md text-gray-400/70 text-center md:text-left w-72 md:w-96 duration-300">
            On my way to becoming a software engineer specialized in frontend
            development.
          </p>
        </div>
        <p className="font-manrope font-bold text-md text-gray-400/70">
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
