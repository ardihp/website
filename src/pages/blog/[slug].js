import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getBlogbySlug, getSlug } from "@/lib/getBlog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { H2 } from "@/components/MDXComponent";

function BlogPage({ body: { title, date, excerpt }, mdxSource }) {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const links = document.querySelectorAll("h2");

    const listLink = [];

    links.forEach((link) => {
      const id = link.id;
      const text = link.textContent;

      listLink.push({ id: id, content: text });
    });

    setToc(listLink);
  }, []);

  return (
    <div className="flex space-x-8 pt-8 pb-6 w-full">
      <Head>
        <title>{title} - Blog&apos;s Ardi</title>
      </Head>
      <div className="flex flex-col space-y-4 w-full lg:w-9/12">
        <div className="flex justify-between items-center">
          <div className="flex bg-sky-500/50 rounded-full items-center justify-center">
            <p className="font-manrope font-bold text-white text-xs py-1 px-3">
              {date}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-fredoka text-4xl lg:text-5xl text-sky-500/50">
            {title}
          </p>
          <p className="font-manrope font-bold text-gray-600/70">{excerpt}</p>
        </div>
        <div className="prose prose-p:font-manrope prose-p:font-bold prose-p:text-gray-600/70 prose-hr:mb-6 prose: prose-h2:font-fredoka prose-h2:font-normal prose-zinc dark:prose-invert max-w-none">
          <MDXRemote {...mdxSource} components={{ h2: H2 }} />
        </div>
      </div>
      <div className="hidden lg:block lg:w-3/12 relative pl-4">
        <div className="sticky top-28">
          <div className="flex flex-col space-y-4">
            <p className="font-manrope font-bold text-sm">On this blog</p>
            <ul className="flex flex-col">
              {toc.map((link) => (
                <li key={link.id} className="flex">
                  <Link href={`#${link.id}`}>
                    <a className="font-manrope text-sm font-bold text-gray-600/60 focus-visible:text-red-300 py-1">
                      {link.content}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

export async function getStaticPaths() {
  const paths = await getSlug();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { body, content } = await getBlogbySlug(slug);

  const mdxSource = await serialize(content);

  return {
    props: { body, mdxSource },
  };
}
