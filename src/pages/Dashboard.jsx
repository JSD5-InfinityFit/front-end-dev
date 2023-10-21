import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from '../Layout.jsx'
import ActivityList from "../components/ActivityList.jsx";

function Dashboard() {
  
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
        <h1>{userId}</h1>
        <h2>Let's work together!</h2>
      </div>
      <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px]" />
    </Layout>
  ) 
}

export default Dashboard;