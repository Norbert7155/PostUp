import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';
import Post from './pages/Posts/Post';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Posts from './pages/Posts/Posts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="" />
        <Route path="/post" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
