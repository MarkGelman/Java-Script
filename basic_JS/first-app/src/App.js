
import React, { useState } from 'react';
// import ClassCounter from './ReactFrom_A_To_Z/ClassCounter';
// import Counter from './ReactFrom_A_To_Z/Counter';
import PostList from './ReactFrom_A_To_Z/PostList';
import './App.css'
import AddNewPost from './ReactFrom_A_To_Z/AddNewPost';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (

    <div className="App">
      <AddNewPost create={createPost} />
      <hr style={{margin: 15}}/>
      <MySelect
      {posts.length != 0
        ?
        <PostList remove={removePost} listPosts={posts} title="Посты про JS" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Посты не найдены!
        </h1>
      }
    </div>

  );
}

export default App;