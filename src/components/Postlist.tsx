import React, { useEffect, useState } from "react";
import PostItem, { Post } from "./PostItem";

import styles from "../styles/Home.module.css";

const Postlist = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    //
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data: Post[]) => setPosts(data));
    });
  }, []);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewPost(e.target.value)} // gera uma nova renderização a cada tecla digitada
        value={newPost}
      />
      <div>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Postlist;
