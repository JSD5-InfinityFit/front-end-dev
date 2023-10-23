import inifityLogo from "../assets/icons/infinity.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

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
        .post(BACKEND_URL + "/users/login", value, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          navigate("/activity");
          localStorage.setItem("token", res.data.token);
          console.log("Login Success");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    logining(value);
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.get(BACKEND_URL + "/auth/google")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/activity");
        console.log('Login through Google Success')
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleFacebookLogin = async () => {
    e.preventDefault();
    try {
      await axios.get(BACKEND_URL + "/auth/facebook")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/activity");
        console.log('Login through Facebook Success')
      })
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleGitHubLogin = async () => {
    e.preventDefault();
    try {
      await axios.get(BACKEND_URL + "/auth/github")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/activity");
        console.log('Login through GitHub Success');
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="pt-12 center-top">
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
            <div className="pt-8 formtype">
              <label htmlFor="email-address">Email</label> <br></br>
              <input
                type="email"
                label="Email address"
                name="userEmail"
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div className="formtype">
              <label htmlFor="password">Password</label> <br></br>
              <input
                type="password"
                label="Create password"
                name="userPassword"
                onChange={handleChange}
                required
                placeholder="Password"
              />
            </div>

            <div className="register-2">
              <button
                className="button-register"
                style={{ backgroundColor: "#0353A4" }}
                type="submit"
              >
                {" "}
                Login
              </button>
            </div>

            <div className="line-login">
              <div className="line-1"></div>
              <div className="line-2">
                <h2>Or login with</h2>
              </div>
              <div className="line-1"></div>
            </div>
            <div className="main-icons">
              <div className="social-icons">
                  <div 
                    onClick={handleGoogleLogin} 
                    style={{ cursor: "pointer" }} 
                    type="submit" 
                    name="google" 
                    value="Google" 
                    id="google" 
                    href={BACKEND_URL + "/auth/google"} 
                    target="_blank"
                    className="google">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </div>
              </div>
              <div className="social-icons-2">
                <a href={BACKEND_URL + "/auth/facebook"}>
                  <div className="facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="social-icons-3">
                <a href={BACKEND_URL + "/auth/github"}>
                  <div className="github">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
