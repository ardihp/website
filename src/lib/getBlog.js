import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Back to the root folder
const root = process.cwd();

export async function getSlug() {
  const files = fs.readdirSync(path.join(root, "src/data/blogs"));

  const slugs = files.map((file) => {
    // Set slug from file name
    const slug = file.replace(".mdx", "");

    return {
      params: {
        slug,
      },
    };
  });

  return slugs;
}

export async function getBlog() {
  // Get all the files on folder blogs
  const files = fs.readdirSync(path.join(root, "src/data/blogs"));

  // Get slug for blogs
  const blogs = files.map((file) => {
    // Set slug from file name
    const slug = file.replace(".mdx", "");
    // Get frontmatter
    const fm = fs.readFileSync(
      path.join((root, "src/data/blogs"), file),
      "utf-8"
    );

    const { data: body } = matter(fm);

    return {
      slug,
      body,
    };
  });

  return blogs;
}

export async function getBlogbySlug(slug) {
  // Get files with the specific slug
  const files = fs.readFileSync(
    path.join(root, "src/data/blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: body, content } = matter(files);

  return {
    body,
    content,
  };
}
