import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Admin/AdminHomePage';
import EditProduct from '../Pages/Admin/AdminEditProducts';
import ErrorPage from '../Pages/Admin/ErrorPage';
import AdminAddProducts from '../Pages/Admin/AdminAddProducts';
import AdminViewProducts from '../Pages/Admin/AdminViewProducts';
import AdminLogin from '../Pages/Admin/AdminLogin';

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/view' element={<AdminViewProducts/>}/>
        <Route path='/add' element={<AdminAddProducts/>}/>
        <Route path='/edit/:productId' element={<EditProduct/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
