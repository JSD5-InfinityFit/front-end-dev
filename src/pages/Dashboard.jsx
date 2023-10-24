import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMI from "../components/BMI.jsx";
import Totalduration from "../components/TotalDuration.jsx";
import Linechart from "../components/Linechart.jsx";

function Dashboard() {
  const [queryId, setQueryId] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [information, setInformation] = useState({});

  useEffect(() => {

    fetchInformation(userId);
  }, []);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userId;
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
      <div>
        <h1> Welcome Back,{information.userEmail}</h1>
        <h2>Let's work together!</h2>
      </div>
      
      <BMI weight={information.userWeight} height={information.userHeight} />
      <div>
         <Totalduration/>
      </div>

      <div>
        <Linechart />
      </div>

    </Layout>
  );
}

export default Dashboard;
