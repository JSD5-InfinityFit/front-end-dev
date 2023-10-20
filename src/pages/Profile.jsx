import React from "react";
import Layout from "../Layout.jsx";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };
  return (
    <Layout>
      <div className="container"><h1>Profile Page</h1></div>
      <button onClick={logout} >Logout</button>
    </Layout>
  );
};

export default Profile;