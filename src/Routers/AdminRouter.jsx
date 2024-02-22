import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Admin/AdminHomePage';
import Login from '../Pages/Admin/AdminLogin';
import EditProduct from '../Pages/Admin/AdminEditProducts';
import ErrorPage from '../Pages/Admin/ErrorPage';

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit' element={<EditProduct/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
