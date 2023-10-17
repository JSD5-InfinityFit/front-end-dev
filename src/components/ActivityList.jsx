// import { useEffect, useState } from 'react'
// import './ActivityList.css'
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function ActivityList() {
//   const [cards,setCards ] = useState([]);
  
//   useEffect(() => {
//     getDataFromAPI();
//   }, []);

//   const getDataFromAPI = async () => {
//     await axios.get('https://infinity-fit-backend.onrender.com/activities')
//     .catch((err) => {
//       console.log('Error', err)
//     })
//     .then((res) => {
//       console.log('Success', res.data)
//       setCards(res.data);
//       console.log(cards);
//     })
//   };

import { useEffect, useState } from 'react';
// import './ActivityList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ActivityList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    await axios
      .get('https://infinity-fit-backend.onrender.com/activities')
      .catch((err) => {
        console.log('Error', err);
      })
      .then((res) => {
        console.log('Success', res.data);
        setCards(res.data.map((card) => ({
          ...card,
          formattedDate: formatApiDate(card.date),
        })));
      });
  };

  const formatApiDate = (apiDate) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan','Feb','Mar','May','Jun','Jul','Aug','Sep','Oct','Novr','Dec'];

    const date = new Date(apiDate);
    const day = date.getDate().toString().padStart(2, '0');
    // const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    // const month = monthsOfYear[(date.getMonth()-1).toString().padStart(2, '0')]
    const month = monthsOfYear[date.getMonth()-1]

    // const year = date.getFullYear().toString().slice(-2);
    const dayOfWeek = daysOfWeek[date.getDay()];
    // const monthOfyear = monthsOfyear[date.month.getMonth()];

    // return `${day} ${month} ${year}`;
    // return `${dayOfWeek}${day}${month} `;
    return {
      dayOfWeek,day,month,
    };
  };

  
  return (
    <>
        <section className='box-border bg-[#F0F8FF]'>
          <div className='container w-full max-w-screen-xl m-auto '>
            <h1 className='text-5xl pt-6'>Exercise List</h1>
              <div className='flex grid flex-wrap justify-between grid-cols-4 gap-3 mt-3 cards '>
                {cards.map((card) =>(
                  <Link to={`/activities/${card._id}`} key={card._id} >
                    <div 
                      className='flex flex-row flex-shrink-0 w-full p-3 card bg-blue-950 flex-0 flex-basis-calc max-w-calc'>
                      
                      {/* <div className='text-4xl font-black text-white date_Exercise'> */}
                      <div className='container mx-auto p-2 text-3xl font-black text-white date_Exercise'>
                      
                        <p>{card.formattedDate.dayOfWeek}</p>
                        <p>{card.formattedDate.day}</p>
                        <p>{card.formattedDate.month}</p>

                      </div>

                      <div div className='container mx-auto p-2 m-3 font-semibold text-white information text truncate ...'>
                        <p className=''>{card.type}</p>
                        <p>{card.name}</p>
                        <p>{card.duration}</p>
                  
                        <div className='m-2 trigger'>
                        </div>
                      </div>
                    </div> 
                  </Link>
                ))
              }
              </div>
          </div>
  
              <div class="h-screen max-w-2xl mx-auto mt-24">
                <div class="flex">
                  <div class="mx-auto flex gap-10">
                    <div class="w-auto h-auto">
                      <div class="flex-1 h-full">
                        <div class="flex items-center justify-end flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full">
                          <div class="relative">
                          <a href={'/activityform'}>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         
        </section>
    </>
  )
}

export default ActivityList
