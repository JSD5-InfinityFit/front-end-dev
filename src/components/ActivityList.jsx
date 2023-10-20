import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";

function ActivityList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  useEffect(() => {
    currentUser(userID);
  }, []);



  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  let idtoken = localStorage.getItem("token");
  // console.log(idtoken);
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userID;
    var userEmail = decoded.user.userEmail;
    console.log(userEmail);
  }

  const currentUser = async (userID) =>
    await axios
      .get(FURI + "/users/" + userID)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.userActivities);
        setCards(res.data.userActivities);
      })
      .catch((err) => {
        console.log(err);
      });

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };

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
    const monthsOfYear = ['Jan','Feb','Mar','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const date = new Date(apiDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = monthsOfYear[date.getMonth()-1]

    const dayOfWeek = daysOfWeek[date.getDay()];

    return {
      dayOfWeek,
      day,
      month,
    };
  };

  // Group cards by formattedDate
  const groupedCards = cards.reduce((acc, card) => {
    const key = `${card.formattedDate.day}\n${card.formattedDate.month}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(card);
    return acc;
  }, {});

  const sortedGroupKeys = Object.keys(groupedCards).sort(); // Sort the keys

  return (

    <>
      <section className='box-border bg-black p-3'>
        <div className='container w-full max-w-screen-xl m-auto bg-black '>
          <h1 className='text-5xl pt-6 font-semibold text-white'>Exercise List of {userEmail}</h1>

          <div className='container flex flex-col-reverse'>
            {sortedGroupKeys.map((key) => (
              <div key={key} className='flex flex-row container'>
                {/* Date */}
                <div className='flex sm:px-2'>
                   <h2 className="text-2xl font-semibold text-white mt-14">{key}</h2>
                </div>

                {/* Avtivity Data */}
                <div className='flex-row grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {groupedCards[key].map((card) => (

                  <Link to={`/activities/${card._id}`} key={card._id}>
                    <div
                      className='flex flex-row flex-shrink-0 w-full p-3 card bg-blue-950 flex-0 flex-basis-calc max-w-calc border-l-8 '
                      style={{
                        borderColor:
                          card.type === 'run'
                            ? 'green'
                            : card.type === 'swim'
                            ? 'skyblue'
                            : card.type === 'badminton'
                            ? 'orange'
                            : card.type === 'dance'
                            ? 'red'
                            : 'pink',
                      }}>
                      
                      <div className='container mx-auto p-2 m-3 text-white information text truncate ... flex flex-col items-start'>
                        <p className='text-2xl font-semibold'>
                          {card.type.charAt(0).toUpperCase() + card.type.slice(1)}
                        </p>
                        <p className='font-semibold'>{card.name}</p>
                        <p className='font-semibold'>{card.duration}</p>
                      </div>
                    </div>
                  </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button  add activity */}
        <div className='fixed bottom-0 right-0 m-4'>
          <div className='p-2 bg-blue-800 text-white shadow rounded-full'>
            <div className='relative'>
              <a href={'/activityform'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ActivityList;