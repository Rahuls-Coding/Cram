import React from "react";
import Link from "next/link";

function Container({ title, description, type, slug }) {
  return (
    <Link href={`/${type}/${slug}`}>
      <div className="w-full h-28 border border-gray-300 rounded-2xl shadow-md">
        <div className="pt-4 pl-6">{title}</div>
        <div className="pl-6 pt-2  text-sm text-gray-600">{description}</div>
      </div>
    </Link>
  );
}

export default Container;
