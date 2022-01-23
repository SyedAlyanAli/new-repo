import React,{useEffect} from "react";
import "./Header.css";
import profile from "../../Images/profile2.jpg";

import logo from "./../../Images/logo.png";
// import logos from "./../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../../Store/Action/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(()=>{
    if(auth.user === null && auth.isAuthenticated === false){
      navigate("/login")
    }
  },[auth])

  const handlelogout = () => {
    dispatch(logout());
  };


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-primary border-3 naveBar p-xxl-3 p-2">
        <div className="container-fluid ps-5 pe-5">
          <Link to="/" className="navbar-brand img-responsive ">
            <img src={logo} alt="" className="logoimg " />
          </Link>
          <div className="ms-md-2 mt-2">
            <form class="navbar-form" role="search">
              <div class="input-group add-on">
                <input
                  class="form-control rounded-0  "
                  placeholder="Search"
                  name="srch-term"
                  id="srch-term"
                  type="text"
                />
                <div class="input-group-btn ">
                  <button class="btn btn-light rounded-0 " type="submit">
                    <i className="bi bi-search text-dark"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <button
            className="navbar-toggler mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-auto "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item mt-1">
                <Link to="/home" className="nav-link fs-3">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item mt-1">
                <Link to="/payment" className="nav-link fs-3">
                  Payment
                </Link>
              </li> */}

              <li className="nav-item mt-1">
                <Link to="/leaderboard" className="nav-link fs-3">
                  LeaderBoard
                </Link>
              </li>
              {/* <li className="nav-item mt-1">
                <Link to="/playerprofile" className="nav-link">
                  Games
                </Link>
              </li> */}

              <li className="nav-item mt-1">
                <Link to="/tournament" className="nav-link fs-3">
                  Tournament
                </Link>
              </li>
              
     {auth.loginUser.role === "user" ? (
<li className="nav-item mt-1 fs-3">
<Link to="/login" className="nav-link fs-3">
{ (auth.registereduser.role === "user"  && auth.loginUser.firstname) ? auth.registereduser.firstname  : "Login"}
   </Link> 
 </li>
     ):(
             


          
                <li className="nav-item mt-1 fs-3 ">
                <Link to="/login" className="nav-link fs-3">
                {auth.loginUser.role === "admin" ?   auth.loginUser.firstname : "Login"}
                </Link>
                  </li>
     )
            }

                  
             <li className="nav-item mt-1 fs-3">
                <Link to="/adminTournaments" className="nav-link">
                {auth.loginUser.role === "admin" &&   "AdminPanel" }
                    </Link> 
                  </li>

           
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle d-flex align-items-baseline  "
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="user-tray ">
                    <img
                      src={profile}
                      alt="Friend Image"
                      className="user-image"
                    />
                  </div>
                </Link>
                <ul
                  className=" dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  {auth.isAuthenticated ? (
                    <div>
                  <li className="dropdown-item">
                    <button
                      onClick={handlelogout}
                      className="fw-bold fa fa-sign-out fa-fw"
                    >
                    
                      Logout
                    </button>
                  </li>
                  <li className="dropdown-item">
                  <Link to="/profile" className="fw-bold fa fa-sign-in fa-fw">
                  
                    Profile Setting
                  </Link>
                </li>
                {/* <li className="dropdown-item">
                <Link to="/adminTournaments" className="fw-bold fa fa-sign-in fa-fw">
                {auth.loginUser.role === "admin" &&   "AdminPanel" }
                    </Link> 
                  </li> */}
                </div>
                  ) : (
                  <div>
                   
                    <li className="dropdown-item">
                      <Link
                        to="/signup"
                        className=" fw-bold fa fa-user-plus fa-fw"
                      >
                        {" "}
                        SignUp
                      </Link>
                    </li>
                  </div>
                   )} 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


