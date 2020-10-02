import React, {useState, useEffect} from "react"
import Post from "./Post"

export default function Home({ endpoint }) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts" + endpoint)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [endpoint]);
  
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}