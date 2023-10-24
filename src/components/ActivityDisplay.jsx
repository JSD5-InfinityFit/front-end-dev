import React, { useState, useEffect } from "react";

const ActivityDisplay = ({ activityData, onEditClick, onDeleteClick }) => {
  console.log(activityData);
  // value for the img
  let swim =
    "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80";
  let run =
    "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80";
  let dance =
    "https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
  let badminton =
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
  let yoga =
    "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";

  const [img, setImg] = useState(run);

  useEffect ( () => {
    if (activityData.type === "swim") {
      setImg(swim);
    } else if (activityData.type === "run") {
      setImg(run);
    } else if (activityData.type === "dance") {
      setImg(dance);
    } else if (activityData.type === "badminton") {
      setImg(badminton);
    } else if (activityData.type === "yoga") {
      setImg(yoga);
    } 

    let ImgInit = async ()=>{
      let imgURL = `data:${activityData.imgType};base64,${activityData.img}`
      setImg(imgURL)
      console.log(imgURL)
    }

    console.log(activityData.img)

    if(activityData.imageURL == 'custom'){
      try{
        ImgInit()
      } catch (err) {console.log(err)}
    }
    
  }, [])

  return (
    <div className="flex flex-col w-screen min-h-screen pt-4 bg-black md:pt-10">
      <div className="flex flex-col items-center justify-around w-screen rounded md:flex-row-reverse">
        <div id="photo" className="mt-4 md:mr-10 md:w-2/5 md:auto">
          <img
            className="w-full h-full p-4"
            src={img}
          ></img>
        </div>
        <div id="information" className="flex flex-col justify-start w-full mt-4 md:ml-10 md:w-3/5">
          <div className="rounded-md ml-[calc(7vw + 18px)] h-full p-4 font-semibold text-white bg-blue-900 border-l-8 w-full" style={{borderColor: activityData.type === 'run' ? 'green' : activityData.type === 'swim' ? 'skyblue' : activityData.type === 'badminton' ? 'orange' : activityData.type === 'dance' ? 'red' : 'pink'}}>
            {activityData.type.charAt(0).toUpperCase() +
              activityData.type.slice(1)}
          </div>
          <div className="rounded-md ml-[calc(7vw + 18px)] h-full p-4 mt-4 font-semibold text-white bg-blue-900 border-l-8 w-full"  style={{borderColor: activityData.type === 'run' ? 'green' : activityData.type === 'swim' ? 'skyblue' : activityData.type === 'badminton' ? 'orange' : activityData.type === 'dance' ? 'red' : 'pink'}}>
            {activityData.name}
          </div>
          <div className="rounded-md ml-[calc(7vw + 18px)] h-full p-4 mt-4 font-semibold text-white bg-blue-900 border-l-8 w-full"  style={{borderColor: activityData.type === 'run' ? 'green' : activityData.type === 'swim' ? 'skyblue' : activityData.type === 'badminton' ? 'orange' : activityData.type === 'dance' ? 'red' : 'pink'}}>
            {new Date(activityData.date).toLocaleString("th-TH", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </div>
          <div className="mt-4 font-semibold text-white bg-blue-900 border-l-8 w-full rounded-md ml-[calc(7vw + 18px)] h-full p-4"  style={{borderColor: activityData.type === 'run' ? 'green' : activityData.type === 'swim' ? 'skyblue' : activityData.type === 'badminton' ? 'orange' : activityData.type === 'dance' ? 'red' : 'pink'}}>
            {activityData.duration} minutes
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full rounded md:items-center md:justify-around md:flex-row">
        <div id="description" className="w-full md:ml-10 md:w-4/5">
          <div className="mt-4 font-semibold text-white bg-blue-900 border-l-8 w-full rounded-md md:ml-[calc(7vw + 18px)] h-full p-4"  style={{borderColor: activityData.type === 'run' ? 'green' : activityData.type === 'swim' ? 'skyblue' : activityData.type === 'badminton' ? 'orange' : activityData.type === 'dance' ? 'red' : 'pink', minHeight: '10rem'}}>
            {activityData.description}
          </div>
        </div>
        <div
          id="button"
          className="flex items-center justify-around w-full m-3 mt-4 md:mr-10 md:flex-col md:w-1/5"
        >
          <button className="mt-4 btn-primary w-[100px]" onClick={onEditClick}>
            Edit
          </button>
          <button className="mt-4 btn-error w-[100px]" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDisplay;
