import axios from "axios";
const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

export const handleSocialLogin = async (provider) => {
    try {
      const res = await axios.get(`${BACKEND_LOCAL}/auth/${provider}/callback`);
      localStorage.setItem("token", res.data.token); // Store the token in local storage
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
};