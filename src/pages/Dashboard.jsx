import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import ActivityList from "../components/ActivityList.jsx";
<<<<<<< HEAD
import Totalduration from "../components/TotalDuration.jsx";

function Dashboard() {
  Totalduration();

=======
import BMI from "../components/BMI.jsx";

function Dashboard() {
>>>>>>> 1cb041bd7fb812e5cf2f721ca4b99d33b0f39c9d
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
<<<<<<< HEAD
      <div className=" max-md:m-auto lg:mx-40 max-2xl:mx-56 mt-20">
        <div className="user-id-banner max-md:text-center">
          <h2 className="text-white text-4xl ">Welcome back, {userID} 🎉</h2>
          <h2 className="text-white text-2xl">let's get to work out !</h2>
=======
      {userData ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">
            Welcome back, {userData.userEmail}!
          </h1>
          <h2 className="text-xl font-semibold">Let's work together!</h2>
>>>>>>> 1cb041bd7fb812e5cf2f721ca4b99d33b0f39c9d
        </div>
  
        <div id="main-card-dashboard" className="max-md:mt-10 lg:grid grid-cols-3 ">
          <div className="lg:w-[250px] h-[250px] bg-sky-950 rounded-[13px] max-md:w-[420px] m-10">
              <div className="bmi-card">
                <img src="https://cdn-icons-png.flaticon.com/128/12130/12130857.png" className="w-16 pl-4 pt-4" alt="bmi-pic"/>
                    <div className="bmi-shown">
                    <h2 className="text-2xl text-bold text-white text-center pt-7">Your BMI is </h2>
                    <h2 className="text-5xl text-bold text-blue-500 text-center">{(information.userWeight*10000/(information.userHeight*information.userHeight)).toFixed(2)}</h2>
                    </div>
                </div> 
          </div>


                 
                    <div>
                      <Totalduration/>
                    </div>
                    {/* <div>
                      <Totalduration/>
                    </div> */}


        </div>
<<<<<<< HEAD

       


      </div>
=======
      )}
      <div>
        <h1>{information.userEmail}</h1>
        <h2>Let's work together!</h2>
      </div>
      <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px]"></div>
      <BMI weight={information.userWeight} height={information.userHeight} />
>>>>>>> 1cb041bd7fb812e5cf2f721ca4b99d33b0f39c9d
    </Layout>
  );
}

export default Dashboard;
