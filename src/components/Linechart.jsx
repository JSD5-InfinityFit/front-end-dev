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
            const res = await axios.get(`${BACKEND_URL}/activities/`);
            const activities = res.data;
            setDuration(activities.map((activity) => ({
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
        const key = `${card.formattedDate.day}`;
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key] += card.duration; // Assuming there's a property called 'duration'
        return acc;
    }, {});

      useEffect(() => {
      fetchDuration(userID);
    }, [userID]);


    const data = {
        // labels: Object.keys(groupedDay).map((day) => groupedDay[day].dayOfWeek),
        labels: Object.keys(groupedDay),
        datasets: [{
          label: 'Exercise duration of the Week',
        //   data: [6, 3, 9,15,7,3,5,13],
          data: Object.values(groupedDay),
          backgroundColor: 'aqua',
          borderColor: 'red',
          pointBorderColor: 'aqua',
          fill: true,
          tension: 0.4
        }
      ] 
      }
      console.log("Data",data)
      console.log("Labels",data.labels)

    const options = {
        plugins: {
          legend: true
        },
        scales: {
          y:{
            min: 3,
            max:6
          }
        }
      }

    return (
        <div>
        
          <div style={
            {
              width: '600px',
              height: '300px',
              padding: '20px',
            //   background: 'white'
            }
            
          }>
            <Line
              data = {data}
              option = {options}
            >
            </Line>
          </div>
        </div>
    ) 
}

export default Linechart;

