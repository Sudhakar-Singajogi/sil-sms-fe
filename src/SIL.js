import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import LeftNavbar from "./Components/LeftNavbar";
import Dashboard from "./Pages/School/Dashboard";
import Login from "./Pages/School/Login";
import Register from "./Pages/School/Register";
import ForgotPassword from "./Pages/School/ForgotPassword";
import Logout from "./Pages/School/Logout";



function SIL() {
  const user_Auth = useSelector((state) => state.user_Auth);
  const userId = user_Auth?.user?.userId; // Adding optional chaining
  const [showNavbar, setShowNavbar] = useState(userId > 0);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {}, [userId]);

  return (
    <div className="container-fluid">
      <div className="row">
        <BrowserRouter>
          <div className={`${userId ? "show-ham-burg" : ""}`}>
            <div className="container-fluid">
              {userId && (
                <>
                  <button
                    className={`toggle-button ${
                      showNavbar ? "toggle-open" : "toggle-closed"
                    }`}
                    onClick={toggleNavbar}
                  >
                    <FontAwesomeIcon icon={showNavbar ? faBars : faBars} />{" "}
                    {showNavbar ? "Sonet Info Labs" : ""}
                  </button>
                  <div className="profile-dropdown user-profile" >
                    <Dropdown >
                      <Dropdown.Toggle
                        variant="link"
                        id="profile-dropdown-toggle"
                        
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item><Link>Profile</Link></Dropdown.Item>
                        <Dropdown.Item><Link>Settings</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/logout" >Logout</Link></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              )}
            </div>
          </div>

          {userId > 0 && showNavbar && <LeftNavbar />}

          {/* <main role="main" className="col-md-10 ml-sm-auto"> */}
          <main
            role="main"
            className={` ${
              showNavbar
                ? "col-md-10 ml-sm-auto move-right"
                : "col-md-12 ml-sm-auto move-left"
            }`}
          >
            {/* Changed class to className */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register-school" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default SIL;
