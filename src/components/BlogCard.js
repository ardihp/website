import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function BlogCard({ slug, body }) {
  const { title, date, image, excerpt } = body;

  return (
    <div className="flex">
      <Link href={`/blog/` + slug} passHref>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ y: 0, scale: 0.95 }}
          transition={{ duration: 0.05 }}
          className="w-full transform duration-300 border-2 border-dashed dark:border-sky-400/40 border-gray-300/60 overflow-hidden rounded-2xl"
        >
          <div className="flex flex-col h-full p-4 dark:bg-sky-500/5 bg-white/10">
            <div className="flex rounded-lg overflow-hidden relative mb-3">
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
                  priority
                />
              </div>
            </div>
            <p className="font-fredoka text-xl hover:underline underline-offset-1 dark:text-slate-100 text-gray-600/80">
              {title}
            </p>
            <p className="font-manrope dark:text-slate-300 text-gray-600/60 font-bold text-sm mb-auto mt-1">
              {excerpt}
            </p>
          </div>
        </motion.a>
      </Link>
    </div>
  );
}

export default BlogCard;
