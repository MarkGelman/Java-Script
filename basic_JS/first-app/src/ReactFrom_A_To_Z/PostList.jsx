import React, {useState} from 'react'
//import AddNewPost from './AddNewPost';
import PostItem from './PostItem'


export default function PostList(props) {
  console.log(props)
  console.log(props.title);
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {props.title}
        </h1>
        {props.listPosts.map((post, index) => 
                <PostItem remove={props.remove} number = {index + 1} post={post} key={post.id}/>
            )
        } 
    </div>
  )
}
