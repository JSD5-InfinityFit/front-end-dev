import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Layout from '../Layout.jsx'
import ActivityList from "../components/ActivityList.jsx";

// import { Line } from "react-chartjs-2";

function Dashboard() {
  // const [chartData, setChartData] = useState({});
  // const [duration, setDuration] = useState([]);
  // const [date, setDate] = useState([]);
  
  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await axios.get('https://infinity-fit-backend.onrender.com/activities');
  //             const uers = response.data.data;
  //             const activityDuration = uers.map(user => parseInt(user.duration));
  //             const activityDay = uers.map(user => parseInt(user.dayOfWeek));
              
  //         } catch (error) {
  //             console.error("Error fetching data:", error);
  //             setLoading(false);
  //         }
  //     }
      
  // });

  // const formatApiDate = (apiDate) => {
  //     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  //     const date = new Date(apiDate);
  //     const day = date.getDate().toString().padStart(2, '0');
  
  //     const dayOfWeek = daysOfWeek[date.getDay()];
  
  //     return {
  //       dayOfWeek,
  //       day,
       
  //     };
  //   };

  
  const [queryId, setQueryId] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  // const [userData, setUserData] = useState(null);
  
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
        .catch((error) => {
          console.error(error)
          console.log(queryId)
        })
        .then((res) => {
          console.log('Success', res.data);
          setUserData(res.data.map((userData) => ({
            ...userData,
            
          })))
        })
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