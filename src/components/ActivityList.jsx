import { useEffect, useState } from 'react'
import './ActivityList.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from './Popup'

function ActivityList() {
  const [cards,setCards ] = useState([]);
  
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    // get data from API https://infinity-fit-backend.onrender.com/activities using axios
    await axios.get('https://infinity-fit-backend.onrender.com/activities')
    .catch((err) => {
      console.log('Error', err)
    })
    .then((res) => {
      console.log('Success', res.data)
      setCards(res.data);
      console.log(cards);
    })
  };

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
                {cards.map((card) =>(
                  <div 
                  key={card._id} 
                  className='flex flex-row flex-shrink-0 w-full p-3 card bg-blue-950 flex-0 flex-basis-calc max-w-calc'>
                    <div className='text-4xl font-black text-white date_Exercise'>
                      {/* <h2>{card.date}</h2> */}
                    </div>

                    <div div className='m-3 font-semibold text-white information text'>
                      <h3>{card.type}</h3>
                      <h3>{card.name}</h3>
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
