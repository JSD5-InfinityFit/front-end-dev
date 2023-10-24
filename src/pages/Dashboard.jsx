import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMICard from "../components/BMICard.jsx";
import RadarChart from "../components/RadarChart.jsx";
import CaloriesCard from "../components/CaloriesCard.jsx";
import Totalduration from "../components/Totalduration.jsx";

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
      <div className="mx-56 lg:flex pt-14 max-md:m-auto">
          <div className="flex flex-col text-white lg:mt-5 max-md:text-center ">
            <h1 className="text-3xl font-bold"> Welcome Back,{userData.userEmail}🎉</h1>
            <h2 className="pt-3 text-xl font-semibold">Let's work out together!</h2>
          </div>
      </div>
      <div className="mx-56 lg:flex max-md:mx-auto">
        <BMICard weight={userData.userWeight} height={userData.userHeight} />
        <Totalduration/>
        { isLoading ? <h2>Loading ... </h2> : <CaloriesCard activityData={activityData} weight={userData.userWeight} />}
      </div>
    </Layout>
  );
}

export default Dashboard;