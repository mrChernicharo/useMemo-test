import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Postlist;
