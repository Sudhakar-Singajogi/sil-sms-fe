import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom"; 

function ForgotPassword() { 
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    code:"",
    password: "",
    confirmPassword: "",
  }); 

  const handleRestPwdData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };



  useEffect(() => {
    console.log("user now is:", user);
  }, [user, disabled]);

  const passwordRest = () => {
    axios
      .patch("http://localhost:8080/api/users/resetpassword", formData)
      .then((response) => {
        setUser((prevData) => ({ ...response.data.data.resultSet }));
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  const sendCode = () => {
    console.log('entered email is', formData.email);
    axios
      .post("http://localhost:8080/api/users/sendresetcode", {"email":formData.email})
      .then((response) => {
        setDisabled(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });

  }

  if (user.userId > 0) {
    return (
      <>
        <div className="alert alert-success" role="alert">
          Password has been reset successfully, you can login now
        </div>
        <Login />
      </>
    );
  }

  return (
    <div className="row  full-height">
      <div className="col-md-5 slider-container ">
        <h3 className="mt-3 ">SIL School Slider</h3>
      </div>
      <div className="col-md-7 form-container">
        <h3 className="mt-3">Forgot password</h3>
        <form className="col-md-8">
          <div className="col-md-12 mb-3">
            <div className="col-md-12">
              <input
                type="email" 
                style={{width:"80%", float:'left'}}
                className="form-control mb-3"
                placeholder="Enter email"
                name="email"
                onChange={(e) => handleRestPwdData(e)}  
              />
              <input className="btn btn-block btn-primary" type="button" value="Send Code" style={{width:'19%', marginLeft:'2px', float:'left'}} onClick={() => sendCode()}/>
            </div> 
          </div>
          <div className="col-md-12 mb-3">
          <div className="mb-3 col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter code"
                name="code"
                disabled={disabled}
                onChange={(e) => handleRestPwdData(e)}
              />
            </div>
            <div className="mb-3 col-md-12">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                disabled={disabled}
                onChange={(e) => handleRestPwdData(e)}
              />
            </div>
            <div className="mb-3 col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter confirm  password"
                name="confirmPassword"
                disabled={disabled}
                onChange={(e) => handleRestPwdData(e)}
              />
            </div>
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => passwordRest()}
              >
                Submit
              </button>
            </div>
            <div className="d-flex">
              <p className="signup">
                Already Registerd <Link to="/">Please Login Here</Link>
              </p>
              <p className="forgot-password text-right">
                Forgot <Link to="/forgot-password">password?</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
