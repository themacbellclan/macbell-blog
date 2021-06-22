import React from "react";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../utils/posts-utils";

function AllPosts(props) {
  return <PostList posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  console.log(allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPosts;
