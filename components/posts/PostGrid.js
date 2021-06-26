import React from "react";
import PostItem from "./PostItem";

function PostGrid(props) {
  const { posts } = props;

  return (
    <div className="flex justify-center mx-10 mt-10">
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:gap-6 md:grid-cols-3 ">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostGrid;
