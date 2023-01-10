import React, { useState } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import { getAllFilesFrontMatter } from "../../lib/mdx";

export default function Main({ content }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredContent = content.filter((frontMatter) =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2">
      <h1 className="text-3xl pt-14">Unit 5</h1>
      <div className="relative w-5/12 mb-4 mt-10 ">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="px-4 py-2 border placeholder-black border-gray-500  focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white  text-gray-900 "
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            color="black"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid w-5/12 overflow-auto">
        <div className="">
          <div className="flex flex-col gap-4 h-">
            {!filteredContent.length && "No Topics Found."}
            {filteredContent.map((frontMatter) => (
              <Container key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
        </div>
      </div>
      <Link href="/" className='pb-14 pt-8'>
        <button className=" w-fit border py-2 px-4 rounded-md text-sm ">Go Back</button>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const content = await getAllFilesFrontMatter("unit5");

  return { props: { content } };
}
