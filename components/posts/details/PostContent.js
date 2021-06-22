import React from "react";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

function PostContent({ post }) {
  const imagePath = `/images/postImages/${post.slug}/${post.image}`;

  return (
    <article>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
