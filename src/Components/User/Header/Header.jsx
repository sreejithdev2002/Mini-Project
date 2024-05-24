import React, { useState, useEffect } from "react";
import { ProfileIcon } from "../../../Assets/Icons";
import "./Header.css";
import { Link , useNavigate} from "react-router-dom";
import { userStatus } from "../../../Services/UserApi";

function Header() {

  const navigate = useNavigate();

  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [LoggedIn, setLoggedIn] = useState(false);

  const fetchData = async () => {
    try{
      const {isLoggedIn} = await userStatus();
      if(!isLoggedIn){
        setLoggedIn(false);
      } 
    } catch(error){
      console.log("Error fetching status:",error);
    }
  };

  useEffect(() => {
    fetchData();

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
    // Handle logout logic here
    console.log("Logout clicked");
    localStorage.removeItem("jwt");

    navigate("/login");
    // For example, you can clear local storage or log out from the server
  };

  const handleLogin = () => {
    console.log("Login Clicked");
    navigate("/login")

  };

  const handleSignup = () => {
    console.log("Signup clicked");
    navigate("/signup")
  };

  return (
    <>
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
          <div className="headerProfileIcon" onClick={toggleDropdown}>
            <ProfileIcon />
          </div>
          {isDropdownOpen && (
            <div className="userDropdownContent">
              {LoggedIn && (
                <div>
                  <button onClick={handleLogin}>Login</button>
                  <button onClick={handleSignup}>SignUp</button>
                </div>
              )}
              {!LoggedIn && (
                <div>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
