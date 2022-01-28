import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function BlogCard({ slug, body, idx }) {
  const { title, date, image, excerpt } = body;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + 0.15 * idx }}
      viewport={{ once: true }}
      className="flex"
    >
      <Link href={`/blog/` + slug}>
        <a className="w-full transform duration-300 border-2 border-dashed dark:border-sky-400/40 border-gray-300/60 overflow-hidden rounded-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95">
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
                  placeholder="blur"
                  blurDataURL={image}
                  priority
                />
              </div>
            </div>
            <p className="font-fredoka text-xl hover:underline underline-offset-1 dark:text-slate-200 text-gray-600/60">
              {title}
            </p>
            <p className="font-manrope dark:text-slate-400 text-gray-600/60 font-bold text-sm mb-auto mt-1">
              {excerpt}
            </p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}

export default BlogCard;
