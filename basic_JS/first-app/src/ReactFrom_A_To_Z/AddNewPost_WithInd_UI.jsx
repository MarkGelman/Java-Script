import React from 'react'
import PostList from './PostList'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function AddNewPost() {
  return (
    <div>
        <form>

            <MyInput type="text" placeholder="Название поста"/>
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton>Создать пост</MyButton>
        </form>
      <PostList/>
    </div>
  )
}
