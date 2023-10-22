import React from "react";
import Layout from '../Layout.jsx'

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Dashboard() {
  const [chartData, setChartData] = useState({});
  const [duration, setDuration] = useState([]);
  const [date, setDate] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://infinity-fit-backend.onrender.com/activities');
              const uers = response.data.data;
              const activityDuration = uers.map(user => parseInt(user.duration));
              const activityDay = uers.map(user => parseInt(user.dayOfWeek));
              
          } catch (error) {
              console.error("Error fetching data:", error);
              setLoading(false);
          }
      }
      
  });

  const formatApiDate = (apiDate) => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
      const date = new Date(apiDate);
      const day = date.getDate().toString().padStart(2, '0');
  
      const dayOfWeek = daysOfWeek[date.getDay()];
  
      return {
        dayOfWeek,
        day,
       
      };
    };



  return (
    <Layout>
    <div className="w-[390px] h-[933px] bg-sky-950">

     






    </div>
   
    </Layout>
  

  ) 
}

export default Dashboard;