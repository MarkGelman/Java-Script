
import React, {useState} from 'react';
import './App.css';
import PostItem from './ReactFrom_A_To_Z/PostItem';
import PostByProps from './ReactFrom_A_To_Z/PostByProps';

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript_1", body: 'Javascript -- язык программирования'},
    {id: 2, title: "Javascript_2", body: 'Javascript -- язык программирования'},
    {id: 3, title: "Javascript_3", body: 'Javascript -- язык программирования'},
  ])
  return (
    <>
      <form>
        <input type='text' placeholder='Название поста'/>
        <input type='text' placeholder='Описание поста'/>
        <button>Создать пост</button>
      </form>
      <div className="App">
            <PostByProps posts = {posts} title='Список языков'/>
      </div>
    </>
    
  );
}

export default App;