import React from "react";
import Head from "next/head";
import Image from "next/image";
import AuthorImage from "@/public/author.png";
import { getBlogbySlug, getSlug } from "@/lib/getBlog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { H2, Images, Paragraph } from "@/components/MDXComponent";

function BlogPage({ body: { title, date, excerpt }, mdxSource }) {
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
        <div className="prose prose-hr:mb-6 prose-hr:mt-0 prose-zinc dark:prose-invert max-w-none">
          <MDXRemote
            {...mdxSource}
            components={{ p: Paragraph, h2: H2, img: Images }}
          />
        </div>
      </div>
      <div className="hidden lg:block lg:w-3/12 relative pl-10">
        <div className="sticky top-28">
          <div className="flex flex-col space-y-3 border border-dashed pb-5 rounded-lg">
            <Image src={AuthorImage} alt="gambar author" placeholder="blur" />
            <div className="flex justify-center">
              <p className="bg-sky-500/40 rounded-full px-3 py-1 font-manrope font-bold text-xs text-white">
                Authored by myself :)
              </p>
            </div>
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
