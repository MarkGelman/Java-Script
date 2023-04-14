import { string } from 'prop-types'
import { func } from 'prop-types'
import React from 'react'

export default function ShareAndLike({share, like, title}) {
  return (
    <div>
      <button onClick={() => like(title)}>Like</button>
      <button onClick={() => share(title)}>Share</button>
    </div>
  )
}

ShareAndLike.propTypes = {
    share: func.isRequired,
    like: func.isRequired,
    title: string.isRequired,
}