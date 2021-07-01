import React from "react";

function PostHeader({ title, author, date, image }) {
  return (
    <header className="mb-6 mt-10">
      <div className="flex flex-row text-sm tracking-wider mb-6 justify-center space-x-1 text-gray-400 text-center">
        <p>{author} </p>
        <div style={{ fontSize: "5px", paddingTop: "3px" }}>&#9679;</div>
        <p>{date}</p>
      </div>

      <h1 className="text-center text-6xl font-light">{title}</h1>
    </header>
  );
}

export default PostHeader;
