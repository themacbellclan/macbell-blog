import React from "react";
// nextjs component
import Image from "next/image";

function BlogCard({ title, image, excerpt, date, slug }) {
  return (
    <>
      <div>
        <div className="max-w-sm overflow-hidden">
          <Image
            src={image}
            alt={title}
            height={250}
            width={300}
            layout="responsive"
          />
          <div className="px-6 py-4 text-center bg-transparent">
            <div className="text-xl mb-2 font-normal tracking-wider">
              {title}
            </div>
            <p className="text-xs text-gray-700 font-light tracking-wider mb-3">
              {excerpt}
            </p>
            <footer className="text-xs font-thin">{date}</footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
