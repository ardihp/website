import React from "react";
import dynamic from "next/dynamic";
import { getBlog } from "@/lib/getBlog";
import { motion } from "framer-motion";

const BlogCard = dynamic(() => import("@/components/BlogCard"));

Blog.title = "Blog's - Ardi";
Blog.route = "blog";

function Blog({ posts }) {
  return (
    <div className="flex flex-col py-6 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-fredoka text-4xl lg:text-5xl dark:text-white text-sky-500/50"
        >
          Blogs
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="font-manrope font-bold dark:text-slate-400 text-gray-600/70"
        >
          Place for me to share something using words.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((blog, i) => (
          <BlogCard key={i} idx={i} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const blogs = await getBlog();

  const posts = blogs.sort(
    (a, b) => new Date(b.body.date) - new Date(a.body.date)
  );

  return {
    props: {
      posts,
    },
  };
}
