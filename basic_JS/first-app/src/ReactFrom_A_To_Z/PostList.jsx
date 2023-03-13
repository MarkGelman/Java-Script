import React, {useState} from 'react'
//import AddNewPost from './AddNewPost';
import PostItem from './PostItem'


export default function PostList(props) {
  console.log(props["posts"])
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {props.title}
        </h1>
        {props.map((post, index) => 
                <PostItem number = {index + 1} post={post} key={post.id}/>
            )
        } 
    </div>
  )
}
