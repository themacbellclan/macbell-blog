import React from "react";
import Image from "next/image";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

function PostContent({ post }) {
  const imagePath = `/images/postImages/${post.slug}/${post.image}`;
  // renderers tells markdown how we want something rendered
  // now markdown no longer renders an image into an image tag but instead calls our image method,and takes in data about the image and returns our nextjs image component
  // in our markdown file, the alt text is the text between square brackets
  // image.properties.src is available between parentheses
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/postImages/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className="mb-40">
      <div className="container max-w-4xl mx-auto">
        <PostHeader title={post.title} author={post.author} date={post.date} />
        <ReactMarkdown
          className="prose prose-sm max-w-md mx-auto"
          components={customRenderers}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <div></div>
    </article>
  );
}

export default PostContent;
