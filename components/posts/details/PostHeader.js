import React from "react";
// import Image from "next/image";

function PostHeader({ title, author, date, image }) {
  return (
    <header className="mb-6 mt-10">
      <div className="flex flex-row text-xs tracking-wider mb-6 justify-center space-x-1 text-gray-400 text-center">
        <p>{author} </p>
        <div style={{ fontSize: "5px", paddingTop: "3px" }}>&#9679;</div>
        <p>{date}</p>
      </div>

      <h1 className="text-center text-5xl font-light">{title}</h1>
      {/* <Image src={image} alt={title} width={200} height={150} /> */}
    </header>
  );
}

export default PostHeader;
