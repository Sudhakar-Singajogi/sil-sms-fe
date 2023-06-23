import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import SiteLinks from "../Routes/SiteLinks";

function ProfileDropDown({ userId, toggleNavbar, showNavbar }) {
    const profileDropDown = SiteLinks.filter((item) => item.type === "profile-dropdown");
  return (
    <>
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
              
              {/** User profile icons on the right hand side */}

              <div className="profile-dropdown user-profile">
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="profile-dropdown-toggle">
                    <FontAwesomeIcon icon={faUser} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {
                        profileDropDown.map((dropdown) => (
                            <Dropdown.Item>
                            <Link to={dropdown.link}>{dropdown.label}</Link>
                          </Dropdown.Item>        
                        ))
                    } 
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileDropDown;
