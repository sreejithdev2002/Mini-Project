// import React, { useState, useEffect } from "react";
// import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../assets/Icons";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";
// import { userStatus } from "../../../Services/UserApi";

// function Header() {
//   const navigate = useNavigate();

//   const [isSolid, setIsSolid] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   const fetchData = async () => {
//     try {
//       const { user } = await userStatus();
//       console.log(user.username + "ascesaw");
//       if (user) {
//         setLoggedIn(true);
//         setUserName(user.username);
//       } else {
//         setLoggedIn(false);
//         setUserName("");
//       }
//     } catch (error) {
//       console.log("Error fetching status : ", error);
//       setLoggedIn(false);
//       setUserName("");
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsSolid(scrollPosition > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("jwt");
//     setLoggedIn(false);
//     setUserName("");
//     navigate("/login");
//   };

//   const handleLogin = () => navigate("/login");

//   const handleSignup = () => navigate("/signup");

//   return (
//     <div
//       className={
//         isSolid
//           ? "flex flex-col lg:flex-row justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1] bg-gray-50"
//           : "flex bg-red-400 flex-col lg:flex-row items-center justify-between py-[5px] px-[10px] lg:py-[20px] lg:px-[50px] fixed top-0 w-[100%] z-[1]"
//       }
//     >
//       <div className="flex">
//         <Link to="/">
//           <h2 className="text-xl lg:text-2xl" id="headerBrand">
//             SHOOOZ
//           </h2>
//         </Link>
//       </div>
//       <div className="flex">
//         <Link to="/latestarrival">
//           <div
//             className="py-2 px-[10px] lg:px-[20px] rounded hover:bg-gray-100"
//             id="latestArrivals"
//           >
//             <p>Latest Arrivals</p>
//           </div>
//         </Link>
//         <Link to="/mens">
//           <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Mens">
//             <p>Mens</p>
//           </div>
//         </Link>
//         <Link to="/womens">
//           <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Womens">
//             <p>Womens</p>
//           </div>
//         </Link>
//         <Link to="/categories">
//           <div
//             className="py-2 px-[10px] rounded hover:bg-gray-100"
//             id="categories"
//           >
//             <p>Categories</p>
//           </div>
//         </Link>
//         <Link to="/luxury">
//           <div className="py-2 px-[10px] rounded hover:bg-gray-100" id="Luxury">
//             <p>Luxury</p>
//           </div>
//         </Link>
//       </div>
//       <div className="flex mt-2">
//         <Link to="/wishlist">
//           <div className="py-[10px] px-[13px] mx-[5px] cursor-pointer">
//             <WishlistIconTrue />
//           </div>
//         </Link>
//         <Link to="/cart">
//           <div className="py-[10px] px-[13px] mx-[5px] cursor-pointer">
//             <CartIcon />
//           </div>
//         </Link>
//         <div
//           className="py-[10px] px-[13px] mx-[5px] cursor-pointer"
//           onClick={toggleDropdown}
//           title={loggedIn ? userName : "Profile"}
//         >
//           <ProfileIcon />
//         </div>
//         {isDropdownOpen && (
//           <div className="flex relative top-2 left-2">
//             {loggedIn ? (
//               <div className="flex">
//                 <p className="mr-4 text-xl text-green-700">{userName}</p>
//                 <button
//                   className="px-2 h-8 mx-2 border-none rounded cursor-pointer text-white bg-red-500 hover:bg-red-600 text-sm transition duration-300"
//                   onClick={handleLogout}
//                   id="headerSignupLogout"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex">
//                 <button
//                   className="px-2 h-8 mx-2 border-none rounded cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white"
//                   onClick={handleLogin}
//                   id="headerLogin"
//                 >
//                   Login
//                 </button>
//                 <button
//                   className="px-2 h-8 mx-2 border-none rounded cursor-pointer text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
//                   onClick={handleSignup}
//                   id="headerSignupLogout"
//                 >
//                   SignUp
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../assets/Icons";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { userStatus } from "../../../Services/UserApi";

function Header() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const fetchData = async () => {
    try {
      const { user } = await userStatus();
      if (user) {
        setLoggedIn(true);
        setUserName(user.username);
      } else {
        setLoggedIn(false);
        setUserName("");
      }
    } catch (error) {
      console.log("Error fetching status : ", error);
      setLoggedIn(false);
      setUserName("");
    }
  };

  useEffect(() => {
    fetchData();

    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
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
      className={`flex flex-col lg:flex-row justify-between items-center fixed top-0 w-full z-20 px-5 lg:px-12 transition-all duration-300 ${
        isSolid
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      {/* Brand */}
      <Link to="/">
        <h2 className="text-2xl font-medium tracking-wide" id="headerBrand">
          SHOOOZ
        </h2>
      </Link>

      {/* Nav Links */}
      <div className="flex mt-2 lg:mt-0">
        <Link to="/latestarrival">
          <p className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            Latest Arrivals
          </p>
        </Link>
        <Link to="/mens">
          <p className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            Mens
          </p>
        </Link>
        <Link to="/womens">
          <p className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            Womens
          </p>
        </Link>
        <Link to="/categories">
          <p className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            Categories
          </p>
        </Link>
        <Link to="/luxury">
          <p className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            Luxury
          </p>
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center mt-2 lg:mt-0 space-x-3 relative">
        <Link to="/wishlist">
          <div className="p-2 rounded-full transition cursor-pointer">
            <WishlistIconTrue />
          </div>
        </Link>
        <Link to="/cart">
          <div className="p-2 rounded-full transition cursor-pointer">
            <CartIcon />
          </div>
        </Link>

        {/* Profile Dropdown */}
        <div
          className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          onClick={toggleDropdown}
          title={loggedIn ? userName : "Profile"}
        >
          <ProfileIcon />
        </div>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-44 animate-fadeIn"
          >
            {loggedIn ? (
              <div className="flex flex-col space-y-2">
                <p className="text-gray-700 font-medium">👋 {userName}</p>
                <button
                  className="w-full px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <button
                  className="w-full px-3 py-1 rounded bg-green-500 text-white text-sm hover:bg-green-600 transition"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  className="w-full px-3 py-1 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                  onClick={handleSignup}
                >
                  Sign Up
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
