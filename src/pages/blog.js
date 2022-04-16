import React from "react";
import dynamic from "next/dynamic";
import { getBlog } from "@/lib/getBlog";
import { motion } from "framer-motion";

const BlogCard = dynamic(() => import("@/components/BlogCard"));

Blog.title = "Blog's - Ardi";
Blog.route = "blog";

function Blog({ posts }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col pt-8 pb-4 space-y-6 w-full"
    >
      <div className="flex flex-col space-y-2">
        <p className="font-fredoka text-4xl lg:text-5xl dark:text-white text-sky-500/50">
          Blogs
        </p>
        <p className="font-manrope font-bold dark:text-slate-400 text-gray-600/70">
          Place for me to share something using words.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </motion.div>
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
