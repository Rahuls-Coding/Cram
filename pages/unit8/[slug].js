import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import ContentLayout from "../../layouts/content";
import MDXComponents from "../../components/MDXComponents";

export default function Content({ mdxSource, frontMatter }) {

  return (
    <ContentLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </ContentLayout>
  );
}

export async function getStaticPaths() {
  const content = await getFiles("unit8");

  return {
    paths: content.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const content = await getFileBySlug("unit8", params.slug);

  return { props: content };
}
