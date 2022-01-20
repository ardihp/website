import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, url, source, stack, idx }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 + 0.1 * idx }}
      viewport={{ once: true }}
      className="overflow-hidden border-2 border-dashed dark:border-sky-400/40 border-gray-300/60 rounded-2xl backdrop-blur-xs"
    >
      <div className="flex flex-col h-full p-4 dark:bg-sky-500/5 bg-white/10">
        <div className="flex bg-gray-50 rounded-lg overflow-hidden mb-3">
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              layout="responsive"
              width="712"
              height="360"
            />
          </div>
        </div>
        <div className="flex items-center justify-between dark:text-slate-200 text-gray-600/60 mb-1">
          <p className="font-fredoka text-xl">{title}</p>
          <div className="flex space-x-4">
            <Link href={url}>
              <a target="_blank" rel="no-prefferer">
                <Tooltip content="Visit Project">
                  <i className="fas fa-link text-lg duration-300 dark:hover:text-slate-400 hover:text-gray-800" />
                </Tooltip>
              </a>
            </Link>
            <Link href={source}>
              <a target="_blank" rel="no-prefferer">
                <Tooltip content="Source Code">
                  <i className="fab fa-github text-lg duration-300 dark:hover:text-slate-400 hover:text-gray-800" />
                </Tooltip>
              </a>
            </Link>
          </div>
        </div>
        <p className="font-manrope text-sm font-bold dark:text-slate-400 text-gray-600/60 mb-auto">
          {description}.
        </p>
        <div className="flex space-x-2 mt-3">
          {stack.map((s, i) => (
            <div
              key={i}
              className="flex items-center space-x-2 dark:bg-sky-700/30 bg-gray-500/40 px-2 py-1 rounded-md"
            >
              <div className="h-2 w-2 rounded-full bg-white" />
              <p className="font-manrope font-bold text-xs text-white">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
