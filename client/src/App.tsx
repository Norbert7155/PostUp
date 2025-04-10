import React from 'react';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post" element={<Posts/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
