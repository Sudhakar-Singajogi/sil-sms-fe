import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useSelector } from "react-redux";

import LeftNavbar from "./Components/LeftNavbar";
import ProfileDropDown from "./Components/ProfileDropDown"; 

import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/ProtectedRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

import routes from "./Routes/routes";

function SIL() {
  const user_Auth = useSelector((state) => state.user_Auth);
  const userId = user_Auth?.user?.userId; // Adding optional chaining
  const [showNavbar, setShowNavbar] = useState(userId > 0);
  let isAuthenticated = false;
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  if (userId > 0) {
    isAuthenticated = true;
  }
  

  useEffect(() => {}, [userId, isAuthenticated]);

  return (
    <div className="container-fluid">
      <div className="row">
        <BrowserRouter> 

          <ProfileDropDown
            userId={userId}
            toggleNavbar={toggleNavbar}
            showNavbar={showNavbar}
          />

          {userId > 0 && showNavbar && <LeftNavbar />}
          <main
            role="main"
            className={` ${
              showNavbar
                ? "col-md-10 ml-sm-auto move-right"
                : "col-md-12 ml-sm-auto move-left"
            }`}
          >
            <Routes>
              {routes.public_routes.map(
                ({ path, exact, component, permalink }) => (
                  <Route
                    key={permalink}
                    path={path}
                    exact={exact}
                    element={
                      <PublicRoutes isAuthenticated={isAuthenticated}>
                        {component}
                      </PublicRoutes>
                    }
                  />
                )
              )}

              <Route
                path="/*"
                element={
                  <PrivateRoutes path="/*" isAuthenticated={isAuthenticated}>
                    <ProtectedRoutes isAuthenticated={isAuthenticated} />
                  </PrivateRoutes>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default SIL;
