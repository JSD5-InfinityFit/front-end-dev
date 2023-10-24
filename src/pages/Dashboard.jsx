import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from "../Layout.jsx";
import BMI from "../components/BMI.jsx";
import Totalduration from "../components/TotalDuration.jsx";

function Dashboard() {
  const [activitiesData, setActivitiesData] = useState("");
  const [information, setInformation] = useState({});

  useEffect(() => {

    fetchInformation(userId);
  }, []);

  useEffect(() => {
    fetchActivity(userID);
  }, [userID]);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userId;
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
      <div className="mx-56 lg:flex pt-14 max-md:m-auto">
          <div className="flex flex-col text-white lg:mt-5 max-md:text-center ">
            <h1 className="text-3xl font-bold"> Welcome Back,{information.userEmail}🎉</h1>
            <h2 className="pt-3 text-xl font-semibold">Let's work out together!</h2>
          </div>
      </div>
      
        <div className="lg:flex mx-56 max-md:mx-auto">
              <BMI weight={information.userWeight} height={information.userHeight} />
              <Totalduration/>
        </div>
        
       
    </Layout>
  );
}

export default Dashboard;
