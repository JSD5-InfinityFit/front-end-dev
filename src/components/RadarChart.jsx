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

const RadarChart = ({activityData}) => {
  return (
    <>
        <div className='bg-white w-[250px] h-[250px] m-10 rounded-[13px] border-pink-300 border-2'>
            <Radar data={data}
            // options={...}
            // data={...}
            // {...props}
            />
        </div>
    </>    
  )
}

export default RadarChart