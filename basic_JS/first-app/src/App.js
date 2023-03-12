<<<<<<< HEAD

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
    
=======
import React, {useState} from 'react';
// import ClassCounter from './ReactFrom_A_To_Z/ClassCounter';
// import Counter from './ReactFrom_A_To_Z/Counter';
import PostList from './ReactFrom_A_To_Z/PostList';
import './App.css'
import AddNewPost from './ReactFrom_A_To_Z/AddNewPost';

function App() {

  return (
    <div className="App">

        <AddNewPost />

    </div>
>>>>>>> a980aa47647b39e0e5e7fea2983da65e826f0456
  );
}

export default App;