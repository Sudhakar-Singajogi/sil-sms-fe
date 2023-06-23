import React from "react";
import "../../Styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="row  full-height" >
      <div className="col-md-5 slider-container "> 
          <h3 className="mt-3 ">SIL School Slider</h3> 
      </div>
      <div className="col-md-7 form-container">
        <h3 className="mt-3">SIL School Login</h3>
        <form className="col-md-8">
          <div className="mb-3 ">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
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
