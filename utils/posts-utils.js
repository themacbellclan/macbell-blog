// file system utils from node
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// path allows us to construct absolute path with join method
// cwd = current working directory
// second argument is which folder we should dive into
const postsDirectory = path.join(process.cwd(), "content");

// read our files in filesystem synchronously, pass path to directory
// postfiles is an array of strings (filenames for us)
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  // removes the file extension from our filename to be used as a slug
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // nodejs gets the overall content from each file (metadate and content)
  // we use gray matter to split it up
  // returns object with 2 properties - data (metadata) and content
  const { data, content } = matter(fileContent);

  //this now is object that contains data for a single post read from markdown file
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  // looks through content folder at markdown files and check how many files we have and go through them to get metadata

  const postFiles = getPostsFiles();
  // go through postfiles and extract the metadata and markdown content
  // also want to get a slug for the URL

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // sorting more recent posts in front of older posts
  const sortedPostsArray = allPosts.sort((postA, postB) =>
    postA.date > postB.data ? -1 : 1
  );

  return sortedPostsArray;
}
