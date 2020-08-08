import React from 'react';
import './App.css'

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header />
      <div className="posts">
        <PostList />
      </div>
    </>
  )
}

export default App;