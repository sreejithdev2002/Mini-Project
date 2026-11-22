import { useState, useEffect, useRef } from "react";
import { FiHeart, FiMenu, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userStatus } from "../../../Services/UserApi";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

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

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };


    window.addEventListener("mousedown", handleClickOutside);

    return () => {

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
    { name: "Men", path: "/mens" },
    { name: "Women", path: "/womens" },
    { name: "Categories", path: "/categories" },
    { name: "Luxury", path: "/luxury" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="store-header"
    >
      <div className="store-header__inner">
        {/* Logo */}
        <Link to="/" className="store-brand">
          <span className="font-display">
            SHOOOZ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Shop" className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="store-header__link" aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="store-header__action lg:hidden!"
          aria-label={isMobileMenuOpen ? "Close shop menu" : "Open shop menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Icons & Actions */}
        <div className="flex items-center space-x-2 relative">
          <Link
            to="/wishlist" aria-label="Wishlist"
            className="store-header__action"
          >
            <FiHeart size={20} />
          </Link>
          <Link
            to="/cart" aria-label="Cart"
            className="store-header__action"
          >
            <FiShoppingBag size={20} />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              className="store-header__action"
              title={loggedIn ? userName : "Profile"}
            >
              <FiUser size={20} />
            </button>

            {isDropdownOpen && (
              <div className="store-account">
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
      {isMobileMenuOpen && (
        <nav aria-label="Shop" className="store-header__mobile lg:hidden">
          {navLinks.map(({ path, name }) => (
            <Link
              key={path}
              className="store-header__link"
              to={path}
              aria-current={isActive(path) ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
