import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Layout from "../Layout.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import "./ActivityForm.css";

const Login = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // setLoading(true);
    e.preventDefault();
    // console.log(value);

    const logining = async (value) =>
      await axios
        .post("https://infinityfitbackenddev.onrender.com" + "/login/", value)
        .then((res) => {
          // setLoading(false);
          // toast.info(res.data.payload.user.username + " Login Success");
          // res.json(res.data.payload.user.username + " Login Success");
          // dispatch({
            //   type: "LOGIN",
            //   payload: {
              //     token: res.data.token,
              //     username: res.data.payload.user.username,
              //     role: res.data.payload.user.role,
              //   },
              // });
              console.log(req);
              localStorage.setItem("token", res.data.token);
          // roleBaseRedirect(res.data.payload.user.role);
        })
        .catch((err) => {
          // setLoading(false);
          console.log(err.response.data);
          toast.error(err.response.data);
        });
  logining()

  };

  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="password"
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
};

export default Login;
