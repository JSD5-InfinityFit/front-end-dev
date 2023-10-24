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
        //   backgroundColor: 'aqua',
          borderColor: 'red',
          pointBorderColor: 'aqua',
          fill: true,
          tension: 0.4,
          borderWidth: 0.8,
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
                display: false,
                labelString: 'X Axis Name'
              }
            }
          ],
          y: [
            {
              title: {
                display: true,
                labelString: 'Y Axis Name'
              }
            }
          ]
        }
      };

    return (
        <div className="flex justify-center items-center  hover:scale-110">
          <div className="w-600 h-300 p-10  bg-sky-950 rounded-[13px] lg:w-[450px] h-[250px] md:w-[420px] " >
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





// import { useEffect, useState } from "react";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

// // ... (your other imports)
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale, // x axis
//   LinearScale, // y axis
//   PointElement,
//   Legend,
//   Tooltip
// } from 'chart.js';

// // Registering ChartJS components
// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Legend,
//   Tooltip
// )

// function Linechart() {
//   const [duration, setDuration] = useState([]);
//   const idtoken = localStorage.getItem('idtoken');

//   if (idtoken) {
//     const decoded = jwt_decode(idtoken);
//     var userID = decoded.user.userID;
//   }

//   const BACKEND_URL = 'https://infinity-fit-backend.onrender.com';

//   const fetchDuration = async (userID) => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/activities/`);
//       const activities = res.data;
//       setDuration(activities.map((activity) => ({
//         ...activity,
//         formattedDate: formatApiDate(activity.date),
//       })));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const formatApiDate = (apiDate) => {
//     const date = new Date(apiDate);
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const day = date.getDate();

//     return {
//       dayOfWeek,
//       day,
//     };
//   };

//   const groupedDay = duration.reduce((acc, card) => {
//     const key = `${card.formattedDate.day}`;
//     if (!acc[key]) {
//       acc[key] = 0;
//     }
//     acc[key] += card.duration;
//     return acc;
//   }, {});

//   useEffect(() => {
//     fetchDuration(userID);
//   }, [userID]);

//   const labels = daysOfWeek;

//   // Filter data for current week
//   const currentDate = new Date();
//   const startOfWeek = new Date(currentDate);
//   startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
//   const endOfWeek = new Date(currentDate);
//   endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 6);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Exercise duration of the Week',
//         data: labels.map(day => groupedDay[day] || 0),
//         backgroundColor: 'aqua',
//         borderColor: 'red',
//         pointBorderColor: 'aqua',
//         fill: true,
//         tension: 0.4,
//         borderWidth: 5,
//       }
//     ]
//   };

//   const options = {
//     scales: {
//       x: [
//         {
//           title: {
//             display: false,
//             labelString: 'X Axis Name'
//           }
//         }
//       ],
//       y: [
//         {
//           title: {
//             display: true,
//             labelString: 'Y Axis Name'
//           }
//         }
//       ]
//     }
//   };

//   return (
//     <div>
//       <div style={
//         {
//           width: '600px',
//           height: '300px',
//           padding: '20px',
//           background: 'white'
//         }

//       }>
//         <Line
//           data={data}
//           options={options}
//         >
//         </Line>
//       </div>
//     </div>
//   )
// }

// export default Linechart;


