import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
