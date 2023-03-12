import React, {useState} from 'react'
import PostItem from './PostItem'

export default function PostList({newPost}) {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 1, title: 'Javascript', body: 'Description'},
  ])

  let title = "Посты про JS"
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        {posts.map(post => 
                <PostItem post={post}/>
            )
        }
        if (newPost != null)
          <PostItem post={newPost}/>
        
    </div>
  )
}
