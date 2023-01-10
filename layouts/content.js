import React from "react";
import Head from "next/head";
import Link from "next/link";
import "katex/dist/katex.min.css";

function ContentLayout({ children, frontMatter }) {
  return (
    <div className="head">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="text-3xl pt-6 title ">{frontMatter.title}</div>
      <div className="mt-2 mb-8 text-sm text-gray-300 ">
        <div className="flex items-center">
          <p className="text-sm eyebrow text-gray-500">{frontMatter.unit}</p>
        </div>
      </div>
      <div className="grid w-5/12 mt-4 overflow-auto">{children}</div>
      <Link
        href={`/${frontMatter.type}/main`}
        className=""
      >
        <button className="w-fit border py-2 px-4 rounded-md text-sm back-button  ">
        Go Back
        </button>
      </Link>
    </div>
  );
}

export default ContentLayout;
