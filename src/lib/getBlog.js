import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getBlog() {
  // Back to the root folder
  const root = process.cwd();
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
