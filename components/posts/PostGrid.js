import React from "react";
import PostItem from "./PostItem";

function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className="grid md:grid-cols-3 gap-10 mx-14">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
