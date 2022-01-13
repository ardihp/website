import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ slug, body }) {
  const { title, date, image, excerpt } = body;

  return (
    <Link href={`/blog/` + slug}>
      <a className="transform duration-300 border-dashed border-2 border-gray-300/30 rounded-lg hover:-translate-y-1 active:translate-y-0 active:scale-95">
        <div className="flex flex-col h-full p-3 bg-white/10 backdrop-blur-sm">
          <div className="flex bg-gray-50 rounded-lg overflow-hidden relative mb-2">
            <div className="absolute top-2 left-2 z-10">
              <div className="flex items-center bg-gray-700/60 px-2 py-1 rounded-md">
                <p className="font-manrope font-bold text-xs text-white">
                  {date}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={image}
                alt={title}
                width="712"
                height="360"
                layout="responsive"
              />
            </div>
          </div>
          <p className="font-fredoka text-xl hover:underline underline-offset-1 text-gray-600/60">
            {title}
          </p>
          <p className="font-manrope text-gray-600/60 font-bold text-sm mb-auto mt-1">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default BlogCard;
