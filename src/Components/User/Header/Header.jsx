import React, { useState, useEffect, useRef } from "react";
import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../assets/Icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userStatus } from "../../../Services/UserApi";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsScrolled(window.scrollY > 20);
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

  const navLinks = [
    { name: "New Arrivals", path: "/latestarrival" },
    { name: "Mens", path: "/mens" },
    { name: "Womens", path: "/womens" },
    { name: "Categories", path: "/categories" },
    { name: "Luxury", path: "/luxury" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold group-hover:bg-gray-800 transition-colors">
            S
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">
            SHOOOZ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons & Actions */}
        <div className="flex items-center space-x-2 relative">
          <Link
            to="/wishlist"
            className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <WishlistIconTrue className="w-5 h-5" />
          </Link>
          <Link
            to="/cart"
            className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <CartIcon className="w-5 h-5" />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100 hover:text-black transition-colors focus:outline-none"
              title={loggedIn ? userName : "Profile"}
            >
              <ProfileIcon className="w-5 h-5" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden origin-top-right transform transition-all duration-200 opacity-100 scale-100">
                <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                  {loggedIn ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Signed in as</p>
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {userName}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm font-medium text-gray-900">
                      Welcome to Shoooz
                    </p>
                  )}
                </div>
                <div className="p-2">
                  {loggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate("/login");
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate("/signup");
                        }}
                        className="w-full text-center px-4 py-2 mt-2 text-sm text-white bg-black hover:bg-gray-800 rounded-lg transition-colors font-medium"
                      >
                        Create Account
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
