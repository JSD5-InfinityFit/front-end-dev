import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Run', 'Swim', 'Yoga', 'Badminton', 'Dance'],
  datasets: [
    {
      label: 'Exercise Activity Duration (m)',
      data: [25, 90, 30, 50, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const RadarChart = (props) => {
  return (
    <>
      <div className="max-mt-10">
        <div className="shadow-lg shadow-blue-500/50 hover:scale-110 lg:w-[250px] h-[250px] bg-sky-950 rounded-[13px] md:w-[420px] m-10 ">
          <Radar data={data}
          // options={...}
          // data={...}
          // {...props}
          />
        </div>
      </div>
    </>    
  )
}

export default RadarChart