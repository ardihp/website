import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "./Tooltip";

function ProjectCard({ title, description, image, url, source, stack }) {
  return (
    <div
      key={title}
      className="flex flex-col h-full border-2 p-3 border-dashed border-gray-300/30 rounded-lg bg-white/10 backdrop-blur-sm relative"
    >
      <div className="flex bg-gray-50 rounded-lg overflow-hidden mb-2">
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
      <div className="flex items-center justify-between text-gray-600/60 mb-1">
        <p className="font-fredoka text-xl">{title}</p>
        <div className="flex space-x-4">
          <Link href={url}>
            <a target="_blank" rel="no-prefferer">
              <Tooltip content="Visit Project">
                <i className="fas fa-link text-lg duration-300 hover:text-gray-800" />
              </Tooltip>
            </a>
          </Link>
          <Link href={source}>
            <a target="_blank" rel="no-prefferer">
              <Tooltip content="Source Code">
                <i className="fab fa-github text-lg duration-300 hover:text-gray-800" />
              </Tooltip>
            </a>
          </Link>
        </div>
      </div>
      <p className="font-manrope text-sm font-bold text-gray-600/60 mb-auto">
        {description}.
      </p>
      <div className="flex space-x-2 mt-3">
        {stack.map((s, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 bg-gray-500/40 px-2 py-1 rounded-md"
          >
            <div className="h-2 w-2 rounded-full bg-white" />
            <p className="font-manrope font-bold text-xs text-white">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
