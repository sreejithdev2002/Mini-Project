import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./Routers/UserRouter";
import AdminRouter from "./Routers/AdminRouter";
import { SpeedInsights } from "@vercel/speed-insights/react"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <SpeedInsights/>
    </>
  );
}

export default App;
