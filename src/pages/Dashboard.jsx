import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMI from "../components/BMI.jsx";
import Totalduration from "../components/TotalDuration.jsx";
import RadarChart from "../components/charts/RadarChart.jsx";
import CaloriesCard from "../components/CaloriesCard.jsx";

function Dashboard() {
  const [activitiesData, setActivitiesData] = useState("");
  const [information, setInformation] = useState({});
  let decoded, userID;

  useEffect(() => {
    fetchInformation(userID);
  }, [userID]);

  useEffect(() => {
    fetchActivity(userID);
  }, [userID]);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    decoded = jwt_decode(idtoken);
    userID = decoded.user.userID;
  }

  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  const fetchInformation = async (userID) => {
    await axios
      .get(`${BACKEND_URL}/users/${userID}`)
      .then((res) => {
        setInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchActivity = async (userID) => {
    const res = await axios.get(`${BACKEND_URL}/activities/`); /// อย่าลืมเปลี่ยน URL
    setActivitiesData(res.data);
    console.log(activitiesData);
  };

  return (
    <Layout>
      <div className="items-center justify-center pt-4 lg:flex max-md:m-auto">
          <div className="flex flex-col text-white lg:mt-5 ">
            <h1 className="text-3xl font-bold text-center"> Welcome, {information.userEmail}🎉</h1>
            <h2 className="pt-3 text-xl font-semibold text-center">Let's work out together!</h2>
          </div>
      </div>
      <div className="justify-center lg:flex">
        <BMI weight={information.userWeight} height={information.userHeight} />
        <Totalduration/>
      </div>
      <div id="radar-card" className="justify-center lg:flex">
        { activitiesData ? <RadarChart activitiesData={activitiesData} /> : "" }
        { activitiesData ? <CaloriesCard activitiesData={activitiesData} weight={information.userWeight} /> : ""}
      </div>
      <div id="line-chart">
        
      </div>
    </Layout>
  );
}

export default Dashboard;
