import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/User/UserHomePage';
import Login from '../Pages/User/UserLogin';
import SignUp from '../Pages/User/UserSignUp';
import SingleProduct from '../Pages/User/UserSingleProduct';
import ErrorPage from '../Pages/User/ErrorPage';
import UserLatestArrivals from '../Pages/User/UserLatestArrivals';
import UserMens from '../Pages/User/UserMens';
import UserWomens from '../Pages/User/UserWomens';
import UserLuxury from '../Pages/User/UserLuxury';
 
function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/latestarrival' element={<UserLatestArrivals/>}/>
        <Route path='/mens' element={<UserMens/>}/>
        <Route path='/womens' element={<UserWomens/>}/>
        <Route path='/luxury' element={<UserLuxury/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter
