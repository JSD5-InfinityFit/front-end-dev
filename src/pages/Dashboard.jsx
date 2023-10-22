import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from '../Layout.jsx'
import ActivityList from "../components/ActivityList.jsx";
import Totalduration from "../components/TotalDuration.jsx";

function Dashboard() {
  
  Totalduration();
  const [queryId, setQueryId] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const idtoken = localStorage.getItem("token");
    if (idtoken) {
      const decoded = jwt_decode(idtoken);
      var userId = decoded.user.userID;
      var userEmail = decoded.user.userEmail;
      console.log(userEmail);

      axios.get(`http://localhost:3000/user/${userId}`)
        .then(response => {
          setQueryId(response.data[0]._Id);
          console.log(response.data[0]._Id);
        })
        .catch(error => console.error(error));
          console.log(queryId);
    }
  }, []);

  // useEffect(() => {
  //   if (userData && bmi) {
  //     axios.put(`http://localhost:3000/user/${queryId}`, {
  //       ...userData,
  //       bmi: bmi
  //     })
  //     .then(response => console.log(response))
  //     .catch(error => console.error(error));
  //   }
  // }, [bmi]);

  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
  }

  const weight = 70; // in kg
  const height = 1.75; // in meters

  const bmi = calculateBMI(weight, height);
  console.log(bmi.toFixed(2)); // output: 22.86

  

  return (
    <Layout>
      {/* {userData ? (
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
        <h1>{userId}</h1>
        <h2>Let's work together!</h2>
      </div> */}
      <div className="grip grid-cols-3">
          <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-2xl mb-4">Total Duration</h2>
            <Totalduration />
          </div>
          
          <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-2xl mb-4">Your BMI</h2>
            <h1 className="text-white font-bold text-6xl">insert data</h1>
          </div>

          <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-2xl mb-4">Your BMI</h2>
            <h1 className="text-white font-bold text-6xl">insert data</h1>
          </div>

          

        </div>
    </Layout>
  ) 
}

export default Dashboard;