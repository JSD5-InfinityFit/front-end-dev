import React, { useState } from "react";
import Layout from "../Layout.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import "./ActivityList.css";

const Register = () => {
  const [value, setValue] = useState({
    userEmail: "",
    userPassword: "",
    password1: "",
    userBiologicalGender: "",
    userBD: "",
    userWeight: "",
    userHeight: "",
    userActivities: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  

  const register = async (value) =>
    await axios.post("https://infinityfitbackenddev.onrender.com" + "/register", value, {headers: {
      'Content-Type': 'application/json',
    }});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if (value.userPassword !== value.password1) {
      toast.error("Password not match");
      console.log("Password not match");
    } else {
      register(value)
        .then((res) => {
          console.log(res.data);
          toast.success(res.data);
        })
        .catch((err) => {
          // console.log(err.response.data);
          // toast.error(err.response.data);          
          console.log(err);
          toast.error(err.response);
        });
    }
  };
  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="userEmail"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your E-Mail"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="userPassword"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Password"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="password1"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Confirm Your Password"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="userBiologicalGender"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="userBiologicalGender"
                />
                <input
                  type="text"
                  name="userBD"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="userBD"
                />
                <input
                  type="text"
                  name="userWeight"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="userWeight"
                />
                <input
                  type="text"
                  name="userHeight"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="userHeight"
                />
              </label>
            </div>
            <br />
            <button
              disabled={value.userPassword.length < 6}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </div>
        <div>2</div>
      </div>
    </Layout>
  );
};

export default Register;
