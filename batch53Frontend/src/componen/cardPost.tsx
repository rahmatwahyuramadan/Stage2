import React, { useContext } from 'react'
import { postContext } from '../context/index'

const CardPost = (): React.JSX.Element => {
  const { posts } = useContext(postContext)

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "2px solid black" }}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>{post.userId}</p>
        </div>
      ))}
    </div>
  )
}


export default CardPost