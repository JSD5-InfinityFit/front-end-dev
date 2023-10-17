import React, { useState } from 'react';

const ActivityDisplay = ({ activityData, onEditClick, onDeleteClick}) => {

  console.log(activityData)
  console.log(typeof activityData.date)
  // value for the img 
  let swim = 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80'
  let run = 'https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80'
  let dance = 'https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let badminton = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let yoga = 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'

  const [img, setImg] = useState(run)
  // setImg(activityData.type);
  
  return (
    <div className="w-full h-full mx-4 my-2 bg-#061a40 rounded-t-lg">
      <div className="flex items-center justify-around rounded shadow-lg bg-white-500">
        <div id="left" className="w-3/5">
            <div className='m-3 font-semibold text-white bg-black border-l-4 border-green-500 h-1/5 information text'>Type: {activityData.type}</div>
            <div className='m-3 font-semibold text-white bg-black border-l-4 border-green-500 h-1/5 information text'>Name: {activityData.name}</div>
            <div className='m-3 font-semibold text-white bg-black border-l-4 border-green-500 h-1/5 information text'>{new Date(activityData.date).toLocaleString('th-TH', {dateStyle: "medium", timeStyle: "short"})}</div>
            <div className='m-3 font-semibold text-white bg-black border-l-4 border-green-500 h-1/5 information text'>Duration: {activityData.duration} minutes</div>
            <div className='m-3 font-semibold text-white bg-black border-l-4 border-green-500 h-1/5 information text'>Description: {activityData.description}</div>
        </div>
        <div id="right" className="flex flex-col w-2/5 mt-4">
          <img src={img}></img>
          <button className="btn-primary" onClick={onEditClick}>
            Edit
          </button>
          <button className="btn-error" onClick={onDeleteClick}>
            Delete
          </button>
      </div>
      </div>
    </div>
  );
};

export default ActivityDisplay;