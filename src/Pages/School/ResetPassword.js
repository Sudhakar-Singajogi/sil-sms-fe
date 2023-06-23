import axios from "axios";
import React, { useEffect, useState } from "react";

function ResetPassword() {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRestPwdData = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {}, user);

  const passwordRest = () => {
    axios.patch("http://localhost:8080/api/users/resetpassword", formData)
    .then(
        response => console.log('response is', response.data)

    ).catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className="row  full-height">
      <div className="col-md-5 slider-container ">
        <h3 className="mt-3 ">SIL School Login</h3>
      </div>
      <div className="col-md-7 form-container">
        <h3 className="mt-3">Reset password</h3>
        <form className="col-md-8">
          <div className="mb-3 ">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e) => handleRestPwdData(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={(e) => handleRestPwdData(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter confirm  password"
              name="confirmPassword"
              onChange={(e) => handleRestPwdData(e)}
            />
          </div>
          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={() => passwordRest()}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
