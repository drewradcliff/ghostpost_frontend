import React, { useState } from "react";
import "./Post.css";

export default function Post({ post }) {
  const d = new Date(post.submission_date);

  const [postScore, setPostScore] = useState(post.score);
  function handleUpvote(post) {
    fetch(`http://localhost:8000/api/posts/${post.id}/add_upvote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setPostScore(postScore + 1))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleDownvote(post) {
    fetch(`http://localhost:8000/api/posts/${post.id}/add_downvote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setPostScore(postScore - 1))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={post.is_boast ? "post-boast" : "post-roast"}>
      <div className="score-div">
        <button className="post-button" onClick={(e) => handleUpvote(post)}>
          <span role="img" aria-label="upvote">
            ⬆️
          </span>
        </button>
        <div className="score">{postScore}</div>
        <button className="post-button" onClick={(e) => handleDownvote(post)}>
          <span role="img" aria-label="downvote">
            ⬇️
          </span>
        </button>
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
