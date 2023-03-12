<<<<<<< HEAD
import React from 'react';

function PostItem({post}) {
    console.log({post})

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>
=======
import React from 'react'

export default function PostItem({post}) {
  return (
    <>
        <div className="post">
        
            <div className="post__content">
								
                <strong>{post.id}. {post.title}</strong>
                <div>

>>>>>>> a980aa47647b39e0e5e7fea2983da65e826f0456
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
<<<<<<< HEAD
                <button>Удалить</button>
            </div>
        </div>  
    );
}

export default PostItem;
=======
                
                <button>Удалить</button>
            </div>            
            
        </div>
    </>
  )
}
>>>>>>> a980aa47647b39e0e5e7fea2983da65e826f0456
