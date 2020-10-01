import React from "react";
import "./Post.css";

export default function Post({ post }) {
  const d = new Date(post.submission_date);

  return (
    <div className="post">
      <div className="score-div">
        <button>⬆️</button>
        <div className="score">{post.score}</div>
        <button>⬇️</button>
      </div>
      <div>
        <ul>
          <p>{post.post_text}</p>
          <p>{d.toDateString()}</p>
        </ul>
      </div>
    </div>
  );
}
