import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import inifityLogo from "../assets/icons/infinity.png";
import { colors } from "@mui/material";
import LoginPage from "./LoginPage";
import "./RegisterPage.css";
import axios from "axios";

function RegisterPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
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

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       updateProfile(auth.currentUser, {
  //         displayName: e.userName,
  //         photoURL:
  //           "https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png",
  //       });
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       // ..
  //     });
  // };

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const register = async (value) =>
    await axios.post(VURI + "/register", value, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if (value.userPassword !== value.password1) {
      // toast.error("Password not match");
      console.log("Password not match");
    } else {
      register(value)
        .then((res) => {
          console.log(res.data);
          // toast.success(res.data);
          navigate("/");
        })
        .catch((err) => {
          // console.log(err.response.data);
          // toast.error(err.response.data);
          console.log(err);
          // toast.error(err.response);
        });
    }
  };

  return (
    <main className="center-top pt-12">
      <section className="">
        <div className="card">
          <div className="box-logo">
            <h1>
              <img
                src={inifityLogo}
                className="h-12 "
                alt="Infinity Fit Logo"
              />
              INFINITY FIT{" "}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formtype pt-12">
              <label htmlFor="email-address">Email</label> <br></br>
              <input
                type="text"
                name="userEmail"
                onChange={handleChange}
                // className="form-control"
                placeholder="Your E-Mail"
              />
            </div>
            <div className="formtype">
              <label htmlFor="password">Password</label> <br></br>
              <input
                type="text"
                name="userPassword"
                onChange={handleChange}
                // className="form-control"
                placeholder="Your Password"
              />
            </div>
            <div className="formtype">
              <label htmlFor="password1">Confrim Password</label> <br></br>
              <input
                type="text"
                name="password1"
                onChange={handleChange}
                // className="form-control"
                placeholder="Confirm Your Password"
              />
            </div>
            <div className="formtype">
              <label htmlFor="userBiologicalGender">Biological Gender</label>{" "}
              <br></br>
              <input
                type="text"
                name="userBiologicalGender"
                onChange={handleChange}
                // className="form-control"
                placeholder="User Biological Gender"
              />
            </div>
            <div className="formtype">
              <label htmlFor="userBD">Your Birth Day</label> <br></br>
              <input
                type="text"
                name="userBD"
                onChange={handleChange}
                // className="form-control"
                placeholder="User Birth Day"
              />
            </div>
            <div className="formtype">
              <label htmlFor="userWeight">Your Weight</label> <br></br>
              <input
                type="text"
                name="userWeight"
                onChange={handleChange}
                // className="form-control"
                placeholder="User Weight"
              />
            </div>
            <div className="formtype">
              <label htmlFor="userHeight">Your Height</label> <br></br>
              <input
                type="text"
                name="userHeight"
                onChange={handleChange}
                // className="form-control"
                placeholder="User Height"
              />
            </div>
            <div className="register-2">
              <button
                className="button-register"
                style={{ backgroundColor: "#0353A4" }}
                disabled={value.userPassword.length < 6}
              >
                {" "}
                Register{" "}
              </button>
            </div>
          </form>

          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
