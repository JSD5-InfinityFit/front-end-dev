import { useState } from 'react'
import './ActivityList.css'

function ActivityList() {
  const [cards,setCards ] = useState([
    {
      id: "u-1",
      img:"",
      Active_type: "Run",
      Active_name:"Run for you",
      Start: "06:00 PM",
      Date: "Mon 14",
      Duration : "15 minutes",
      Activity: "I'm feel good",
    },
    {
      id: "u-2",
      Active_type: "Badminton",
      Active_name:"This game for you",
      Start: "06:00 PM",
      Date: "Sun 13",
      Duration : "15 minutes",
      Activity: "I don't think i can be any happier right now",
    },
    {
      id: "u-3",
      img:"",
      Active_type: "Dance",
      Active_name:"Dance for you",
      Start: "05:00 PM",
      Date: "Sat 12",
      Duration : "15 minutes",
      Activity: "",
    },
    {
      id: "u-4",
      img:"",
      Active_type: "Dance",
      Active_name: "Dance for Health",
      Start: "05:00 PM",
      Date: "Thu 10 ",
      Duration : "20 minutes",
      Activity: "",
    },
    {
      id: "u-5",
      img:"",
      Active_type: "Swimming",
      Active_name: "Swimming for you",
      Start: "05:00 PM",
      Date: "Wed 9",
      Duration : "30 minutes",
      Activity: "",
    },
    {
      id: "u-6",
      img:"",
      Active_type: "Yoga",
      Active_name: "yoga for health",
      Start: "05:00 PM",
      Date: "Mon 7",
      Duration : "30 minutes",
      Activity: "I'm very happy right now",
    },
    {
      id: "u-7",
      img:"",
      Active_type: "Swimming",
      Active_name: "Swimming for health",
      Start: "05:00 PM",
      Date: "Sat 5",
      Duration : "30 minutes",
      Activity: "It's been a tough day",
    },

  ]);

  return (
    <>
      {/* <List getCards={cards}/> */}
        <section>
          <div className='container'>
            <h1>Exercise List</h1>
              <div className='cards'>
              {cards.map((card,i) =>(
                  <div key={i} className='card'>
                    <div className='date_Exercise'>
                      <h2>{card.Date}</h2>
                    </div>
                    <div div className='information'>
                      <h3>{card.Active_type}</h3>
                      <h3>{card.Active_name}</h3>
                      <h5>{card.Duration}</h5>
                    </div> 
                  </div> 
                ))
              }
              </div>
          </div>
        </section>
      
    </>
  )
}

export default ActivityList
