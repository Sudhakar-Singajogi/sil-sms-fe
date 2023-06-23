import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/School/Login";
import Register from "./Pages/School/Register";
import ForgotPassword from "./Pages/School/ForgotPassword";

function SIL() {
  return (
    <div className="container "> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register-school" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default SIL;
