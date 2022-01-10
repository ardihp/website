import React from "react";
import { getBlog } from "@/lib/getBlog";

function Blog({ blogs }) {
  console.log(blogs);

  return (
    <div>
      <p>ini halaman blog</p>
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
