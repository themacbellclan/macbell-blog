import React from "react";
import Link from "next/link";
import Image from "next/image";
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
          {/* <div>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div> */}
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
