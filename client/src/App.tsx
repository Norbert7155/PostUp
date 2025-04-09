import React from 'react';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import Login from './Login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
