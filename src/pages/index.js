import React from "react";
import Image from "next/image";
import IndexPict from "@/public/index.png";
import Link from "next/link";
import { motion } from "framer-motion";

Index.title = "Ardi's Personal Website";
Index.route = "index";

function Index() {
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 w-full py-8 justify-center items-center">
      <div className="flex flex-col items-center lg:items-start space-y-8 md:w-full duration-300">
        <div className="flex flex-col items-center lg:items-start space-y-3 w-full">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-fredoka text-4xl sm:text-5xl dark:text-white text-sky-500/50"
          >
            <span className="dark:bg-slate-700/60 bg-sky-500/50 rounded-lg text-white mr-2 px-2 tracking-wider">
              Hai
            </span>
            , I&apos;m Ardi
            <i className="fas fa-paw ml-4 transform rotate-12" />
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="font-manrope font-bold text-lg dark:text-slate-400 text-gray-600/80 text-center lg:text-left w-72 sm:w-96"
          >
            On my way to becoming a software engineer specialized in frontend
            development.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link href="/projects">
            <a className="flex dark:bg-sky-500 dark:hover:bg-sky-400 bg-slate-400/70 hover:bg-slate-400/50 h-10 px-6 shadow-lg dark:shadow-sky-500/25 rounded-lg space-x-2 items-center text-white duration-300">
              <p className="font-manrope font-bold text-sm">See my past work</p>
              <i className="fas fa-angle-right" />
            </a>
          </Link>
        </motion.div>
      </div>
      <div
        className="flex justify-center overflow-hidden items-center rounded-full duration-300 w-64 lg:w-1/2"
        title="me lazy asf :)"
      >
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <Image
            src={IndexPict}
            alt="gambar index"
            layout="responsive"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
