import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout.jsx";
import axios from "axios";

function LoginPage() {
  // const [email, setEmail] = useState();
  // const [error, setError] = useState("");
  // const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const logining = async (value) =>
      await axios
        .post(VURI + "/login", value, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          navigate("/");
          localStorage.setItem("token", res.data.token);
          console.log('Login Success')
        })
        .catch((err) => {
          console.log(err.response.data);
          toast.error(err.response.data);
        });
    logining(value);
  };

  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User Email</label>
              <input
                type="text"
                name="userEmail"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="userPassword"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
        <div>2</div>
      </div>
    </Layout>
  );
}

export default LoginPage;
