import React from "react";

import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  console.log(post.tags);
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className={`${styles.center} btn btn-outline`} >
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
