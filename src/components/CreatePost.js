import React, { useState } from "react";
import "./CreatePost.css";

export default function CreatePost() {
  const [isBoast, setIsBoast] = useState(false);
  const [postText, setPostText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8000/api/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_boast: isBoast, post_text: postText }),
    }).catch((error) => {
      console.error("Error:", error);
    });
  }

  function handleChange(e) {
    if (e.target.id === "is_boast") {
      setIsBoast(!isBoast);
    } else {
      setPostText(e.target.value);
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label htmlFor="is_boast">Is boast?</label>
      <input
        onChange={handleChange}
        id="is_boast"
        type="checkbox"
        value={isBoast}
      ></input>
      <label htmlFor="text">Post Text:</label>
      <input onChange={handleChange} id="text" defaultValue={postText}></input>
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}
