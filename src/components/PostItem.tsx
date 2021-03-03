import React, { memo } from "react";
import styles from "../styles/Home.module.css";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  post: Post;
}

const PostItem = ({ post }: PostProps) => {
  return (
    <div className={styles.card} key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default memo(PostItem);

// memorizar um  valor -> useMemo
// memorizar uma função -> useCallback
// memorizar um  componente -> React.memo
