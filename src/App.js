// src/App.js
import React from 'react';
import Register from './Register';
import Login from './Login';
import PostList from './PostList';
import NewPost from './NewPost';

const App = () => {
  return (
    <div>
      <h1>Mi Aplicación de Publicaciones</h1>
      <Register />
      <Login />
      <NewPost />
      <PostList />
    </div>
  );
};

export default App;
