import React from "react";
import PostContent from "../../components/posts/details/PostContent";
import { getPostData, getPostsFiles } from "../../utils/posts-utils";

function PostDetails(props) {
  return <PostContent post={props.post} />;
}

// get single post per given slug
export function getStaticProps(context) {
  const { params } = context;
  console.log(context);
  const { slug } = params;
  console.log(params);

  // gives us the data for the slug file and reads it
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetails;
