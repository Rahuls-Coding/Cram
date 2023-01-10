import Link from "next/link";
import Image from "next/image";

import Block from "./Block";
import Table from "./Table";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg w-20"  {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
   Image: RoundedImage,
  //   ImageWithTheme,
  //   a: CustomLink,
  //   Callout,
  //   Analytics,
  //   ConsCard,
  //   ProsCard,
  //   Step,
  //   Unsplash,
  //   YouTube
  Block,
  Table,
};

export default MDXComponents;
