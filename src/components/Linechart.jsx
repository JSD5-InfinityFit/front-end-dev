import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

function Linechart () {

    const [duration, setDuration] = useState([]);
    const idtoken = localStorage.getItem('idtoken');
    if (idtoken) {
        const decoded = jwt_decode(idtoken);
        var userID = decoded.user.userID;
    }
  
    const BACKEND_URL = 'https://infinity-fit-backend.onrender.com';
    
    const fetchDuration = async (userID) => {
      try {
          const now = new Date();
          const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
          const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 6);
          
          const res = await axios.get(`${BACKEND_URL}/activities/`);
          const activities = res.data;
  
          const filteredActivities = activities.filter(activity => {
              const activityDate = new Date(activity.date);
              return activityDate >= startOfWeek && activityDate <= endOfWeek;
          });
  
          setDuration(filteredActivities.map((activity) => ({
              ...activity,
              formattedDate: formatApiDate(activity.date),
          })));
      } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error (e.g., display an error message)
      }
  };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const formatApiDate = (apiDate) => {
    
        const date = new Date(apiDate);  
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate(); // Get the day of the month
    
        return {
          dayOfWeek,
          day,
        };
    };

      // Group day by formattedDate
    const groupedDay = duration.reduce((acc, card) => {
        const key = `${card.formattedDate.dayOfWeek}`;
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key] += card.duration; // Assuming there's a property called 'duration'
        return acc;
    }, {});

      useEffect(() => {
      fetchDuration(userID);
    }, [userID]);

    const labels = daysOfWeek;
    const data = {

        labels: daysOfWeek,

        datasets: [{
          label: 'Exercise duration of the Week',

          data: daysOfWeek.map(day => groupedDay[day] || 0),
          // backgroundColor: 'aqua',
          borderColor: 'red',
          pointBorderColor: 'aqua',
          fill: true,
          tension: 0.4,
          borderWidth: 1,
        }
      ] 
      }
      console.log("Data",data)
      console.log("Labels",data.labels)

    const options = {
        scales: {
          x: [
            {
              title: {
                display: true,
              },
              ticks: {
                font: {
                  size: 32, // Increase the font size for x-axis ticks
                }
              }
            }
          ],
          y: [
            {
              title: {
                display: true,
              },
              ticks: {
                font: {
                  size: 32, // Increase the font size for y-axis ticks
                }
              }
            }
          ]
        }
      };

    return (
        <div className=" shadow-lg shadow-blue-500/50 hover:scale-110 bg-sky-950 rounded-[13px] lg:w-[450px] h-[250px] md:w-[420px] m-10 flex items-center justify-center">
          <div className="flex items-center justify-center max-mt-10 ">
            <Line 
              data = {data}
              options = {options}
            >
            </Line>
          </div>
        </div>
    ) 
}

export default Linechart;
