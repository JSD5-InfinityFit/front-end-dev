import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMI from "../components/BMI.jsx";
import Totalduration from "../components/TotalDuration.jsx";

function Dashboard() {
  const [queryId, setQueryId] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [information, setInformation] = useState({});

  useEffect(() => {
    fetchInformation(userID);
  }, []);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userID;
  }

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  const fetchInformation = async (userID) => {
    await axios
      .get(`${BACKEND_URL}/users/${userID}`)
      .then((res) => {
        setInformation(res.data);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="lg:flex pt-14 mx-56 max-md:m-auto">
        <div className="text-white lg:mt-5 flex flex-col max-md:text-center ">
          <h1 className="text-3xl font-bold">
            {" "}
            Welcome Back,{information.userEmail}🎉
          </h1>
          <h2 className="text-xl font-semibold pt-3">
            Let's work out together!
          </h2>
        </div>
      </div>

      <div className="lg:flex mx-56 max-md:mx-auto">
        <BMI weight={information.userWeight} height={information.userHeight} />
        <Totalduration />
      </div>
    </Layout>
  );
}

export default Dashboard;
