import fs from "fs";
import matter from "gray-matter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

import MDXComponents from "../components/MDXComponents.js";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "content", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "content", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "content", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }
  });

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "content", type));

  return files.reduce((allContent, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "content", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allContent,
    ];
  }, []);
}
