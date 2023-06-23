import React, { useEffect, useState } from "react";
import "../../Styles/login.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slices/UserAuthSlice";
import Dashboard from "./Dashboard";

function Login() {
  const dispatch = useDispatch();
  const user_Auth = useSelector(state=>state.user_Auth);
  console.log('state object is:', user_Auth)
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });

  useEffect(() => {}, [user_Auth]);

  const handleOnchange = (e) => {
    setFormData(
      (prev) => ({
        ...prev,
        [e.target.name] : e.target.value
      })
    )
  }

  const submitLoginForm = () => {
    dispatch(loginUser(formData))
  }



  if (user_Auth?.user.userId > 0) {
    return (
      <>
        <Dashboard />
      </>
    );
  } 
  return (
    <div className="row  full-height">
      
      <div className="col-md-5 slider-container ">
        <h3 className="mt-3 ">SIL School Slider</h3>
      </div>
      <div className="col-md-7 form-container">
        <h3 className="mt-3">SIL School Login</h3>
        {user_Auth.user.error.length>0 && 
        <div class="alert alert-danger errmsg-div err-msg">
          <strong>Success!</strong> Invalid credentials  
        </div>
} 
        <form className="col-md-8">
          <div className="mb-3 ">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="loginId"
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={(e) => handleOnchange(e)}
            />
          </div> 
          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={() => {
              submitLoginForm()
            }}>
              Submit
            </button>
          </div>

          <div className="d-flex">
            <p className="signup">
              Register Here <Link to="/register-school">Signup</Link>
            </p> 
            
            <p className="forgot-password text-right">
              Forgot <Link to="/forgot-password">password?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
