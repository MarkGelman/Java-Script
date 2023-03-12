import React, {useState} from 'react'
import PostList from './PostList'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function AddNewPost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const NewPost = () => {
        const newPost = {
            id: Date.Now,
            title,
            body
        }
        setPost
    }

  return (
    <div>
        <form>

            <MyInput 
                value = {title}
                onChange = {e=>setTitle(e.target.value)}
                type="text" 
                placeholder="Название поста"
            />
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton >Создать пост</MyButton>
        </form>
      <PostList/>
    </div>
  )
}
