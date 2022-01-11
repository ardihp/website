import React from "react";
import { getBlog } from "@/lib/getBlog";
import BlogCard from "@/components/BlogCard";

Blog.title = "Blog's - Ardi";
function Blog({ blogs }) {
  return (
    <div className="flex flex-col py-6 space-y-6 w-full">
      <div className="flex flex-col space-y-2">
        <p className="font-fredoka text-4xl lg:text-5xl text-sky-500/50">
          Blogs
        </p>
        <p className="font-manrope font-bold text-gray-600/70">
          Place for me to share something using words.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const blogs = await getBlog();

  return {
    props: {
      blogs,
    },
  };
}
