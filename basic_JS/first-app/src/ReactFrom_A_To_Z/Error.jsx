import React, {useState} from 'react'
import PostList from './PostList'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function AddNewPost() {  
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newPost, setNewPost] = useState({id: Date.now()}); 

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title); 
        const addPost = {
            title: title,
            body: body
        }
        console.log(addPost);       
        setNewPost({...newPost,...addPost});
        console.log(newPost);
    }

    console.log(newPost);

  return (
    <div>
        <form>

            <MyInput 
                value = {title}
                onChange = {e=>setTitle(e.target.value)}
                type="text" 
                placeholder="Название поста"
            />
            <MyInput
                value = {body}
                onChange = {e =>setBody(e.target.value)} 
                type="text" 
                placeholder="Описание поста"
            />
            <MyButton onClick = {addNewPost}>Создать пост</MyButton>
        </form>
        {/* <PostList/> */}
         <PostList addPost={newPost}/> 
    </div>
  )
}
