import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/User/UserHomePage';
import Login from '../Pages/User/UserLogin';
import SignUp from '../Pages/User/UserSignUp';
import SingleProduct from '../Pages/User/UserSingleProduct';
 
function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter
