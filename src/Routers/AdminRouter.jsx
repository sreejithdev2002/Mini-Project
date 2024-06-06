import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Admin/AdminHomePage";
import ErrorPage from "../Pages/Admin/ErrorPage";
import AdminAddProducts from "../Pages/Admin/AdminAddProducts";
import AdminViewProducts from "../Pages/Admin/AdminViewProducts";
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminEditProducts from "../Pages/Admin/AdminEditProducts";
import AdminOrderList from "../Pages/Admin/AdminOrderList";
import AdminAdminDashboard from "../Pages/Admin/AdminAdminDashboard";

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/view" element={<AdminViewProducts />} />
        <Route path="/add" element={<AdminAddProducts />} />
        <Route path="/editproducts/:id" element={<AdminEditProducts />} />
        <Route path="/orderlist" element={<AdminOrderList/>}/>
        <Route path="/dashboard" element={<AdminAdminDashboard/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default AdminRouter;
