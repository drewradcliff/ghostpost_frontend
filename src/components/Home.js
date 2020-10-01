import React, {useState, useEffect} from "react"
import Post from "./Post"

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}