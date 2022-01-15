import React from "react";
import { getBlog } from "@/lib/getBlog";
import BlogCard from "@/components/BlogCard";

Blog.title = "Blog's - Ardi";
function Blog({ posts }) {
  return (
    <div className="flex flex-col py-6 space-y-6 w-full">
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
