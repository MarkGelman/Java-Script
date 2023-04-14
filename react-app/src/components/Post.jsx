import { string } from 'prop-types'
import React from 'react'
import ShareAndLike from './ShareAndLike'

export default function Post({title, text}) {

    const handleLike = (title)=> {
        console.log("the user liked the post" + title)
    }

    const handleShare = (title)=> {
        console.log("the user shared the post" + title)
    }

  return (
    <div>
      <h3> {title}</h3>
       
      <p>{text}</p>

      <ShareAndLike 
                    share = {handleShare}
                    like = {handleLike}
                    title = {title}
        />
    </div>
  )
}

Post.propTypes = {
    title: string.isRequired,
    text: string.isRequired,
}
