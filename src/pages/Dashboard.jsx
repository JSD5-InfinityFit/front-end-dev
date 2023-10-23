import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from '../Layout.jsx'

// Charts
import RadarChart from "../components/RadarChart.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import RadialProgress from "../components/RadialProgress.jsx";
import CaloriesCard from '../components/CaloriesCard.jsx'
import GaugeChart from "../components/GaugeChart.jsx";

function Dashboard() {

  const [userID, setUserID] = useState("60f9b0b3c9b0a40015f1b0a4");
  const [userData, setUserData] = useState({});
  const [activityData, setActivityData] = useState({});
  
  useEffect(() => {
    fetchUserID();
    fetchUserData(userID);
    fetchUserActivity(userID);
  }, []);
  
  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

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
      {userData ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome back, {userData.userEmail}!</h1>
          <h2 className="text-xl font-semibold">Let's work together!</h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <h2 className="text-xl font-semibold">Let's work together!</h2>
        </div>
      )}
      <div>
        <h1>{userData.userEmail}</h1>
        <h2>Let's work together!</h2>
      </div>

      <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px]">
        <h2>Your BMI is </h2>
        <h2>{(userData.userWeight*10000/(userData.userHeight*userData.userHeight)).toFixed(2)}</h2>
      </div>


      <div id="fai-charts" className="flex flex-col items-center justify-center md:flex-row">
        <RadarChart />
        <ProgressBar  />
        <GaugeChart />
        <RadialProgress />
        <CaloriesCard />
      </div>
      
    </Layout>
  ) 
}

export default Dashboard;