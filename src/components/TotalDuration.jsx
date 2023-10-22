
  import {React, useState, useEffect} from 'react';
  import axios from 'axios';

  function Totalduration() {
    const [duration, setDuration] = useState([]);

    // useEffect(() => {
    //   if(userID && queryId) {
    //     axios.get(`http://localhost:3000/user/${queryId}`)
    //     .then(response => {
    //       setDuration(response.data);
    //       console.log(response.data);
    //     })
    //     .catch(error => console.error(error));
    //   }
    // }, []);

    // // Group activities by week
    // const activitiesByWeek = duration.reduce((acc, activity) => {
    //   const date = new Date(activity.date);
    //   const week = `${date.getFullYear()}-W${date.getWeek()}`;
    //   if (!acc[week]) {
    //     acc[week] = [];
    //   }
    //   acc[week].push(activity);
    //   return acc;
    // }, {});

    // // Calculate total duration for each week
    // const weeklyTotals = Object.entries(activitiesByWeek).map(([week, activities]) => {
    //   const totalDuration = activities.reduce((acc, activity) => acc + activity.duration, 0);
    //   return { week, totalDuration };
    // });

    return (
      <div>

        <div>
          <h1 className='text-white'>Time Total</h1>
        </div>
        {/* {weeklyTotals.map(({ week, totalDuration }) => (
          <div key={week}>
            <h3>Week {week}</h3>
            <p>Total duration: {totalDuration} minutes</p>
          </div>
        ))} */}
      </div>
    );
  }

  export default Totalduration;
