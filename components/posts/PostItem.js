import React from "react";
// nextjs components
import Link from "next/link";
// components
import BlogCard from "../layout/BlogCard";

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/postImages/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li>
      <Link href={linkPath}>
        <a>
          <BlogCard
            title={title}
            image={imagePath}
            excerpt={excerpt}
            date={formattedDate}
            slug={slug}
          />
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
