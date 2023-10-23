import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from '../Layout.jsx'
import ActivityList from "../components/ActivityList.jsx";
import Linechart from "../components/Linechart.jsx";

function Dashboard() {

  const [queryId, setQueryId] = useState("");
  const [userData, setUserData] = useState(null);
  const [information, setInformation] = useState({});
  
  useEffect(() => {

    fetchInformation(userId);
  }, []);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userId = decoded.user.userId;
  }
  
  const fetchInformation = async (userId) => {
    await axios
    // .get(`${VURI}/users/${userID}`)
    .get(`http://localhost:3000/user/${userId}`)
    .then((res) => {
      setInformation(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  };

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
        <h1>{information.userEmail}</h1>
        <h2>Let's work together!</h2>
      </div>
      <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px]" />
      <div className="">
        <h2>Your BMI is </h2>
        <h2>{(information.userWeight*10000/(information.userHeight*information.userHeight)).toFixed(2)}</h2>
      </div>

      <div>
        <Linechart />
      </div>

    </Layout>
  ) 
}

export default Dashboard;