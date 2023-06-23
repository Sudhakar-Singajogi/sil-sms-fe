import React, { useEffect, useState } from "react";
import "../../Styles/login.css";
import { Link } from "react-router-dom";
import Login from "./Login"
import axios from "axios";
import ResetPassword from "./ResetPassword";

function Register() {
  const [schoolData, setSchooldData] = useState({
    schoolName: "",
    identity: "",
    email: "",
    contactNumber: "",
    primaryContactPerson: "",
  });
  const [school, setSchool] = useState({ 
  });

  const handleSchoolData = (e) => {
    // console.log('target element is: ', e.target.name);
    setSchooldData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    
  }, [school]);

  

  const handleSubmit = async (e) => {
    const response = await axios.post('http://localhost:8080/api/schools/create', schoolData);
     
    if(response.data.resultCode === 200) {
      console.log('school created successfully');
      setSchool((prevData) => response.data.data);
    }
    
  }

  if (school.schoolId > 0) {
    return (
      <>
        <div className="alert alert-success" role="alert">
          School has been successfully
        </div> 
        <ResetPassword />
      </>
    );
  }

  return (
    <div className="row  full-height">
      <div className="col-md-5 slider-container ">
        <h3 className="mt-3 ">SIL School Slider</h3>
      </div>
      <div className="col-md-7 form-container">
        <h3 className="mt-3">School Signup</h3>
        <form className="col-md-8">
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter school name"
              name="schoolName"
              onChange={(e) => handleSchoolData(e)}
            />
          </div>

          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter school code"
              name="identity"
              onChange={(e) => handleSchoolData(e)}
            />
          </div>

          <div className="mb-3 ">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e) => handleSchoolData(e)}
            />
          </div>
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter contact person"
              name="primaryContactPerson"
              onChange={(e) => handleSchoolData(e)}
            />
          </div>

          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter contact number"
              name="contactNumber"
              onChange={(e) => handleSchoolData(e)}
            />
          </div>

          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={(e)=>handleSubmit()}>
              Submit
            </button>
          </div>

          <div className="d-flex">
            <p className="signup">
              Already Register, <Link to="/">Please Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
