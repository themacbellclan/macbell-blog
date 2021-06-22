import React from "react";
import PostGrid from "../posts/PostGrid";

function FeaturedPost(props) {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPost;
