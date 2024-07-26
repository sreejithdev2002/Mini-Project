import React, { useState, useEffect } from "react";
import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../Assets/Icons";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { userStatus } from "../../../Services/UserApi";

function Header() {
  const navigate = useNavigate();

  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const fetchData = async () => {
    try {
      const { user } = await userStatus();
      console.log(user.username + "ascesaw");
      if (user) {
        setLoggedIn(true);
        setUserName(user.username);
      } else {
        setLoggedIn(false);
        setUserName("");
      }
    } catch (error) {
      console.log("Error fetching status:", error);
      setLoggedIn(false);
      setUserName("");
    }
  };

  useEffect(() => {
    fetchData();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSolid(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  const handleLogin = () => navigate("/login");

  const handleSignup = () => navigate("/signup");

  return (
    <div
      className={
        isSolid
          ? "flex flex-col lg:flex-row justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1] bg-gray-50"
          : "flex flex-col lg:flex-row justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1]"
      }
    >
      <div className="flex">
        <Link to="/">
          <h2 className="text-xl lg:text-2xl" id="headerBrand">
            SHOOOZ
          </h2>
        </Link>
      </div>
      <div className="flex">
        <Link to="/latestarrival">
          <div
            className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100"
            id="latestArrivals"
          >
            <p>Latest Arrivals</p>
          </div>
        </Link>
        <Link to="/mens">
          <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Mens">
            <p>Mens</p>
          </div>
        </Link>
        <Link to="/womens">
          <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Womens">
            <p>Womens</p>
          </div>
        </Link>
        <Link to="/categories">
          <div
            className="py-2 px-[10px] rounded hover:bg-gray-100"
            id="categories"
          >
            <p>Categories</p>
          </div>
        </Link>
        <Link to="/luxury">
          <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Luxury">
            <p>Luxury</p>
          </div>
        </Link>
      </div>
      <div className="flex mt-2">
        <Link to="/wishlist">
          <div className="py-[10px] px-[13px] mx-[5px] cursor-pointer">
            <WishlistIconTrue />
          </div>
        </Link>
        <Link to="/cart">
          <div className="py-[10px] px-[13px] mx-[5px] cursor-pointer">
            <CartIcon />
          </div>
        </Link>
        <div
          className="py-[10px] px-[13px] mx-[5px] cursor-pointer"
          onClick={toggleDropdown}
          title={loggedIn ? userName : "Profile"}
        >
          <ProfileIcon />
        </div>
        {isDropdownOpen && (
          <div className="flex relative top-2 left-2">
            {loggedIn ? (
              <div className="flex">
                <p className="mr-4 text-xl text-green-700">{userName}</p>
                <button
                  className="px-[8px] h-8 mx-2 border-none rounded cursor-pointer text-white bg-red-500 hover:bg-red-600 text-sm transition duration-300"
                  onClick={handleLogout}
                  id="headerSignupLogout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex">
                <button
                  className="py-2 px-4 mx-2 border-none rounded cursor-pointer text-white"
                  onClick={handleLogin}
                  id="headerLogin"
                >
                  Login
                </button>
                <button
                  className="py-2 px-4 mx-2 border-none rounded cursor-pointer text-white"
                  onClick={handleSignup}
                  id="headerSignupLogout"
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
