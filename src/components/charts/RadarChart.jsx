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
;

const RadarChart = ({activitiesData}) => {
  let runDuration=0, swimDuration=0, yogaDuration=0, badmintonDuration=0, danceDuration=0;
  
  if (activitiesData) {
    activitiesData.map((activity) => {
      switch(activity.type) {
        case 'run' : runDuration += parseInt(activity.duration); break;
        case 'swim' : swimDuration += parseInt(activity.duration); break;
        case 'yoga' : yogaDuration += parseInt(activity.duration); break;
        case 'badminton' : badmintonDuration += parseInt(activity.duration); break;activity.duration; break;
        case 'dance' : danceDuration += parseInt(activity.duration); break;
      }
    });
  }
  const options = {
    elements: {
      line: {
        borderColor: 'white', // set the line color here
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // set the text color here
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'white', // set the angle line color here
        },
        pointLabels: {
          color: 'white', // set the point label color here
        },
        grid: {
          color: 'white', // set the grid line color here
        },
      },
    },
  };
  
  const data = {
    labels: ['Run', 'Swim', 'Yoga', 'Badminton', 'Dance'],
    datasets: [
      {
        label: 'Exercise Activity Duration (m)',
        data: [runDuration, swimDuration, yogaDuration, badmintonDuration, danceDuration],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="shadow-lg shadow-blue-500/50 hover:scale-110 lg:w-[250px] h-[250px] bg-sky-950 rounded-[13px] md:w-[420px] m-10 ">
        <div className="flex items-center justify-center max-mt-10">
          { activitiesData ? <Radar data={data} options={options} /> : "null" }
        </div>
      </div>
    </>    
  )
}

export default RadarChart