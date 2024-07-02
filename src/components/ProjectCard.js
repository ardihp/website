import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "./Tooltip";

function ProjectCard({ title, description, image, url, source, stack }) {
  return (
    <div className="overflow-hidden border-2 border-dashed dark:border-sky-400/40 border-gray-300/60 rounded-2xl backdrop-blur-xs">
      <div className="flex flex-col h-full p-4 dark:bg-sky-500/5 bg-white/10">
        <div className="flex bg-gray-50 rounded-lg overflow-hidden mb-3">
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              layout="responsive"
              width="712"
              height="360"
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-between dark:text-slate-100 text-gray-600/80 mb-1">
          <p className="font-fredoka text-xl">{title}</p>
          <div className="flex space-x-4">
            <Link href={url} target="_blank" passHref>
              <Tooltip content="Visit Project">
                <i className="fas fa-link text-lg duration-300 dark:hover:text-slate-300 hover:text-gray-800" />
              </Tooltip>
            </Link>
            <Link href={source} target="_blank" passHref>
              <Tooltip content="Source Code">
                <i className="fab fa-github text-lg duration-300 dark:hover:text-slate-300 hover:text-gray-800" />
              </Tooltip>
            </Link>
          </div>
        </div>
        <p className="font-manrope text-sm font-bold dark:text-slate-300 text-gray-600/60 mb-auto">
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
    </div>
  );
}

export default ProjectCard;
