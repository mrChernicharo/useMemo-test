import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import PostItem, { Post } from "./PostItem";

const Postlist = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    //
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data: Post[]) => setPosts(data));
    });
    //
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Postlist;
