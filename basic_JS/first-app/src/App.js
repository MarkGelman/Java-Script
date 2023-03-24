
import React, { useState } from 'react';
// import ClassCounter from './ReactFrom_A_To_Z/ClassCounter';
// import Counter from './ReactFrom_A_To_Z/Counter';
import PostList from './ReactFrom_A_To_Z/PostList';
import './App.css'
import AddNewPost from './ReactFrom_A_To_Z/AddNewPost';
import MySelect from './ReactFrom_A_To_Z/UI/select/MySelect';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'яя' },
    { id: 2, title: 'бб', body: 'ээ' },
    { id: 3, title: 'вв', body: 'юю' },
  ])

  const [selectedSort, setSelectedSort]= useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort);

  }

  return (

    <div className="App">
      <AddNewPost create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value = {selectedSort}
          onChange = {sortPosts}
          defaultValue = "Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
          />
      </div>
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