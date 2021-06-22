import React from "react";
import PostGrid from "./PostGrid";

function PostList({ posts }) {
  return (
    <div>
      <PostGrid posts={posts} />
    </div>
  );
}

export default PostList;
