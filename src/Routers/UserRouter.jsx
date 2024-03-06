import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/User/UserHomePage';
import SignUp from '../Pages/User/UserSignUp';
import SingleProduct from '../Pages/User/UserSingleProduct';
import ErrorPage from '../Pages/User/ErrorPage';
import UserLatestArrivals from '../Pages/User/UserLatestArrivals';
import UserMens from '../Pages/User/UserMens';
import UserWomens from '../Pages/User/UserWomens';
import UserLuxury from '../Pages/User/UserLuxury';
import UserCategories from '../Pages/User/UserCategories';
import UserCasuals from '../Pages/User/UserCasuals';
import UserFormals from '../Pages/User/UserFormals';
import UserSandals from '../Pages/User/UserSandals';
import UserSneakers from '../Pages/User/UserSneakers';
import UserWishlist from '../Pages/User/UserWishlist';
import UserLogin from '../Pages/User/UserLogin';
 
function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/latestarrival' element={<UserLatestArrivals/>}/>
        <Route path='/mens' element={<UserMens/>}/>
        <Route path='/womens' element={<UserWomens/>}/>
        <Route path='/luxury' element={<UserLuxury/>}/>
        <Route path='/categories' element={<UserCategories/>}/>
        <Route path='/categories/casuals' element={<UserCasuals/>}/>
        <Route path='/categories/formals' element={<UserFormals/>}/>
        <Route path='/categories/sandals' element={<UserSandals/>}/>
        <Route path='/categories/sneakers' element={<UserSneakers/>}/>
        <Route path='/wishlist' element={<UserWishlist/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter
