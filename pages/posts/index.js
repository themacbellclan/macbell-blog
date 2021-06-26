import React from "react";
// nextjs components
import Head from "next/head";
// components
import PostList from "../../components/posts/PostList";
// utils
import { getAllPosts } from "../../utils/posts-utils";

function AllPosts(props) {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="List of all our blog posts" />
      </Head>
      <PostList posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPosts;
