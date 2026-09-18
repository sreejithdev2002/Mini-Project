import React, { useState, useEffect } from "react";
import { ProfileIcon } from "../../../Assets/Icons";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminjwt");
    navigate("/admin/login");
    console.log("Logout clicked");
  };

  return (
    <>
      <div
        className={
          isSolid
            ? "flex flex-col lg:flex-row justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1] bg-gray-50"
            : "flex flex-col lg:flex-row justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1]"
        }
      >
        <div className="flex">
          <Link to="/admin">
            <h2 className="text-xl lg:text-2xl">
              SHOOOZ
              <span className="text-3xl lg:text-4xl font-sans ml-1">Admin</span>
            </h2>
          </Link>
        </div>
        <div className="flex">
          <Link to="/admin/view">
            <div className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100">
              <p>View Products</p>
            </div>
          </Link>
          <Link to="/admin/add">
            <div className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100">
              <p>Add Products</p>
            </div>
          </Link>
          <Link to="/admin/orderlist">
            <div className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100">
              <p>Order List</p>
            </div>
          </Link>
          <Link to="/admin/dashboard">
            <div className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100">
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/admin/reviews">
            <div className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100">
              <p>Reviews</p>
            </div>
          </Link>
        </div>
          <div className="py-[10px] px-[13px] mx-[5px] cursor-pointer" onClick={toggleDropdown}>
            <ProfileIcon />
          {isDropdownOpen && (
            <div className="flex items-center relative -top-8 left-10">
              <p className="mr-4 text-xl text-green-700">Admin</p>
              <button onClick={handleLogout} className="px-[8px] h-8 mx-2 border-none rounded cursor-pointer text-white bg-red-500 hover:bg-red-600 text-sm transition duration-300">Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
