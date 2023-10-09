import { useState } from 'react'
import './ActivityList.css'
import { Link } from 'react-router-dom';

import React from 'react';

import ActivityCard from './ActivityCard';
import Popup from './Popup'


function ActivityList() {
  const [cards,setCards ] = useState([
    {
      id: "u-1",
      imgURL:"",
      activityType: "Run",
      activityName:"Run for you",
      date: "Mon 14",
      duration : "15 minutes",
      activityDescription: "I'm feel good",
    },
    {
      id: "u-2",
      imgURL: "",
      activityType: "Badminton",
      activityName:"This game for you",
      date: "Sun 13",
      duration : "15 minutes",
      activityDescription: "I don't think i can be any happier right now",
    },
    {
      id: "u-3",
      imgURL:"",
      activityType: "Dance",
      activityName:"Dance for you",
      date: "Sat 12",
      duration : "15 minutes",
      activityDescription: "",
    },
    {
      id: "u-4",
      imgURL:"",
      activityType: "Dance",
      activityName: "Dance for Health",
      date: "Thu 10 ",
      duration : "20 minutes",
      activityDescription: "",
    },
    {
      id: "u-5",
      imgURL:"",
      activityType: "Swimming",
      activityName: "Swimming for you",
      date: "Wed 9",
      duration : "30 minutes",
      activityDescription: "",
    },
    {
      id: "u-6",
      imgURL:"",
      activityType: "Yoga",
      activityName: "yoga for health",
      date: "Mon 7",
      duration : "30 minutes",
      activityDescription: "I'm very happy right now",
    },
    {
      id: "u-7",
      imgURL:"",
      activityType: "Swimming",
      activityName: "Swimming for health",
      date: "Sat 5",
      duration : "30 minutes",
      activityDescription: "It's been a tough day",
    },

  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
        <section className='box-border bg-[#F0F8FF]'>
          <div className='container w-full max-w-screen-xl m-auto '>
            <h1 className='text-5xl '>Exercise List</h1>
              <div className='flex grid flex-wrap justify-between grid-cols-4 gap-3 mt-3 cards'>
                {cards.map((card,i) =>(
                  <div 
                  key={i} 
                  className='flex flex-row flex-shrink-0 w-full p-3 card bg-blue-950 flex-0 flex-basis-calc max-w-calc'>
                    <div className='text-4xl font-black text-white date_Exercise'>
                      <h2>{card.date}</h2>
                    </div>

                    <div div className='m-3 font-semibold text-white information text'>
                      <h3>{card.activityType}</h3>
                      <h3>{card.activityName}</h3>
                      <h5>{card.duration}</h5>
                  
                      <div className='m-2 trigger'>
                        
                        <div className="static mt-20 text-center">
                          <button onClick={handleOpenPopup} className="absolute font-bold text-white bg-blue-500 rounded hover:bg-blue-700 bottom-4 right-4">
                            Show more
                          </button>
                          {isPopupOpen && <Popup onClose={handleClosePopup} />}
                        </div>
                        
                      </div>
                    </div>
                  </div> 
                ))
              }
              </div>
          </div>
          
          <Link to={`/activity-card`} className="btn btn-outline btn-primary">
          Edit
        </Link>
        </section>
    </>
  )
}

export default ActivityList
