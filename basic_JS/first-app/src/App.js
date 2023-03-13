
import React, {useState} from 'react';
// import ClassCounter from './ReactFrom_A_To_Z/ClassCounter';
// import Counter from './ReactFrom_A_To_Z/Counter';
import PostList from './ReactFrom_A_To_Z/PostList';
import './App.css'
import AddNewPost from './ReactFrom_A_To_Z/AddNewPost';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  console.log(posts)
  return (
   
    <div className="App">

        <AddNewPost create={createPost}/>
        <PostList posts={posts} title = "Посты про JS"/>
    </div>
  );
}

export default App;