import React from "react";
import "./Post.css";

export default function Post({ post }) {
  const d = new Date(post.submission_date);

  return (
    <div className={post.is_boast ? "post-boast" : "post-roast"}>
      <div className="score-div">
        <button>
          <span role="img" aria-label="upvote">
            ⬆️
          </span>
        </button>
        <div className="score">{post.score}</div>
        <button>
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
