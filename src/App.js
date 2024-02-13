import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./Routers/UserRouter";
import AdminRouter from "./Routers/AdminRouter";
// import Header from "./Components/User/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />}/>
          <Route path="/admin/*" element={<AdminRouter />}/>
        </Routes>
      </BrowserRouter>
    </>
    //path="/*" is UserRouter
    //path="/admin/*" is AdminRouter
  );
}

export default App;
