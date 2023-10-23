import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import BMI from "../components/BMI.jsx";

function Dashboard() {
  const [queryId, setQueryId] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  useEffect(() => {
    fetchUserID();
    fetchUserData(userID);
    fetchUserActivity(userID);
  }, []);

  const fetchUserID = () => {
    const idtoken = localStorage.getItem("token");
    if (idtoken) {
    const decoded = jwt_decode(idtoken);
    setUserID(decoded.user.userID);
    }
  }

  const fetchUserData = async (uid) => {
    await axios
    .get(`${BACKEND_URL}/users/${uid}`)
    .then((res) => {
      setUserData(res.data);
      console.log('get user success',res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const fetchUserActivity = async (uid) => {
    await axios
    // .get(`${BACKEND_URL}/activities/users/${uid}`)
    .get(`${BACKEND_URL}/activities/`)
    .then((res) => {
      setActivityData(res.data);
      console.log('get activity success',res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <Layout>
      <div id="greeting">
        { userData ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              Welcome back, {userData.userEmail}!
            </h1>
            <h2 className="text-xl font-semibold">Let's work together!</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <h2 className="text-xl font-semibold">Let's work together!</h2>
          </div>
        )}
      </div>

      <BMI weight={information.userWeight} height={information.userHeight} />


      <div id="fai-charts" className="flex flex-col items-center justify-center md:flex-row">
        <RadarChart />
        <ProgressBar  />
        <GaugeChart />
        <RadialProgress />
        <CaloriesCard />
      </div>
      
    </Layout>
  );
}

export default Dashboard;
