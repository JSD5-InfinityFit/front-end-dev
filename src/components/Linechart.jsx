
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import Layout from '../Layout.jsx'
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
    const [cards, setCards] = useState([]);

    const getDataFromAPI = async () => {
        await axios
        .get('https://infinity-fit-backend.onrender.com/activities')
        .catch((err) => {
            console.log("Error", err)
        })
        .then((res) => {
            setCards(res.data)
            console.log(res.data)

        })
    }

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          label: 'Sales of the Week',
          data: [6, 3, 9,15,7,3,5,13],
          backgroundColor: 'aqua',
          borderColor: 'black',
          poinBorderColor: 'aqua',
          fill: true,
          tension: 0.4
        }
      ] 
      }

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
              background: 'white'
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