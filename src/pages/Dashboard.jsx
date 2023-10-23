import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMICard from "../components/BMICard.jsx";
import RadarChart from "../components/RadarChart.jsx";
import CaloriesCard from "../components/CaloriesCard.jsx";

function Dashboard() {
  
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const [activityData, setActivityData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  useEffect(async () => {
    await fetchUserID();
    await fetchUserData(userId);
    await fetchUserActivity(userId);
    setIsLoading(false);
  }, []);

  const fetchUserID = () => {
    const idtoken = localStorage.getItem("token");
    if (idtoken) {
    const decoded = jwt_decode(idtoken);
    setUserId(decoded.user.userID);
    }
  }

  const fetchUserData = async (uid) => {
    console.log('user id:',uid)
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
            <BMICard weight={userData.userWeight} height={userData.userHeight} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <h2 className="text-xl font-semibold">Let's work together!</h2>
            <BMICard />
          </div>
        )}
      </div>
      
      <div id="fai-charts" className="flex flex-col items-center justify-center md:flex-row">
        { isLoading ? 
          (
            <h2>Loading ... </h2>
          ) : (
            <CaloriesCard activityData={activityData} weight={userData.userWeight} />
          )
        }
      </div>
    </Layout>
  );
}

export default Dashboard;