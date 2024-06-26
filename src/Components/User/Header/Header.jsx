import React, { useState, useEffect } from "react";
import {
  CartIcon,
  ProfileIcon,
  WishlistIconTrue,
} from "../../../Assets/Icons";
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
    <div className={isSolid ? "header" : "transHeader"}>
      <div className="headerName">
        <Link to="/">
          <h2>SHOOOZ</h2>
        </Link>
      </div>
      <div className="headerLinks">
        <Link to="/latestarrival">
          <div className="headerLinksIndividual" id="latestArrivals">
            <p>Latest Arrivals</p>
          </div>
        </Link>
        <Link to="/mens">
          <div className="headerLinksIndividual" id="Mens">
            <p>Mens</p>
          </div>
        </Link>
        <Link to="/womens">
          <div className="headerLinksIndividual" id="Womens">
            <p>Womens</p>
          </div>
        </Link>
        <Link to="/categories">
          <div className="headerLinksIndividual" id="categories">
            <p>Categories</p>
          </div>
        </Link>
        <Link to="/luxury">
          <div className="headerLinksIndividual" id="Luxury">
            <p>Luxury</p>
          </div>
        </Link>
      </div>
      <div className="headerButtons">
        <Link to="/wishlist">
        <div className="headerProfileIcon">
          <WishlistIconTrue />
        </div></Link>
        <Link to="/cart">
        <div className="headerProfileIcon">
          <CartIcon />
        </div></Link>
        <div
          className="headerProfileIcon"
          onClick={toggleDropdown}
          title={loggedIn ? userName : "Profile"}
        >
          <ProfileIcon />
        </div>
        {isDropdownOpen && (
          <div className="userDropdownContent">
            {loggedIn ? (
              <div className="headerProUserName">
                <p>{userName}</p>
                <button onClick={handleLogout} id="headerSignupLogout">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button onClick={handleLogin} id="headerLogin">
                  Login
                </button>
                <button onClick={handleSignup} id="headerSignupLogout">
                  SignUp
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
