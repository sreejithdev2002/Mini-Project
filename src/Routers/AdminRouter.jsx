import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Admin/AdminHomePage';
import Login from '../Pages/Admin/AdminLogin';
import EditProduct from '../Pages/Admin/AdminEditProducts';

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit' element={<EditProduct/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
