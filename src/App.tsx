import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GitHomePage from './pages/GitHomePage';
import GitFavPage from './pages/GitFavPage';
import MainText from './pages/MainText';
import GitNavigation from './pages/GitNavigation';
import PostPage from './pages/PostPage';
import PostContent from './pages/PostContent';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<MainText/>}/>
          <Route path='git'element={<GitNavigation/>}/>
          <Route path='page'element={<PostPage/>}/>
          <Route path='post/:id'element={<PostContent/>}/>
          <Route path='search' element={<GitHomePage/>}/>
          <Route path='favorites' element={<GitFavPage/>} />
      </Route>
    </Routes>
    </div>
    
  );
}

export default App;
