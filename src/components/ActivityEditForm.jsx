import React from "react";
import './ActivityEditForm.css' //new in this file
import { useState } from "react"; //new in this file

const ActivityEditForm = ({  //new in this file
  activityData,
  handleInputChange,
  handleSaveClick,
  handleDeleteClick,
  setIsEditing,
  handleFileSelect, //new in this file
  setFileInput, //new in this file


  
}) => {

  let swim = 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80'
  let run = 'https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80'
  let dance = 'https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let badminton = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let yoga = 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'

  const [img, setImg] = useState(run) // new in this file
 
  return (

    <>
    <div className="grid bg-zinc-900">
      <div className="row-1 ">
        <div id="form" className="form text-white">

          <form className="" onSubmit={handleSaveClick}>
            <div className="form-group">
              <label>Activity Name</label>
              <input
              className="border-2 text-black"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={activityData.name}
              onChange={handleInputChange}
            />
            </div>

            <div className="form-group">
              <label htmlFor="activity">Activity Type</label>

              <select id="activity"  className="text-black" name="type" onChange={handleInputChange}>
                <option value="run" >Run</option>
                <option value="dance">Dance</option>
                <option value="swim">Swim</option>
                <option value="badminton">Badminton</option>
                <option value="yoga">Yoga</option>
              </select>
            </div>

            <div className="form-group">
              <label style={{ marginRight: '20px' }} htmlFor="duration">Date</label>
              <input
                type="date"
                name="date"
                value={activityData.date}
                onChange={handleInputChange}
                className="text-black"
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
              type="text"
              name="duration"
              value={activityData.duration}
              onChange={handleInputChange}
              className="text-black"
            />
            </div>
        </form>
       </div>
        <div className="img-parent">

          <img className="image" src={img} />
          <input
            type="file"
            accept="image/*" // Specify accepted file types
            onChange={handleFileSelect}
            style={{ display: 'none' }}
            // ref={(inputRef) => setFileInput(inputRef)} //Create a reference to the input element to interact with it
          />

          <svg className='w-10 h-10 camera-icon' onClick={() => {fileInput.click() }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>
        </div>
         
        
      </div>

      <div className="buttonzone">
      <textarea
          className="text"
          name="description"
          value={activityData.description}
          onChange={handleInputChange}
        />
        
        <div className="b480">
        <div className="buttons">
          <button
          className="save-button"
          type="submit"
          >
          Save
        </button>
        </div>

        <div className="buttons">
        <button
          className="delete-button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        </div>

        <div className="btn-seperator">
        <button 
          className="cancel-button"
          onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        </div>
        </div>
      </div>
    </div>
    
    </>
    // <div className="m-36">
    //   <form className="flex flex-col" onSubmit={handleSaveClick}>
    //     <div className="w-3/5 bg-gray-100 rounded-md shadow-lg">
    //       <div className="h-46">
    //         <label className="p-4 rounded-md bg-violet-800 w-14">
    //           Active Name
    //         </label>
    //         <input
    //           className="border-2"
    //           type="text"
    //           placeholder="Enter Name"
    //           name="name"
    //           value={activityData.name}
    //           onChange={handleInputChange}
    //         />
    //       </div>
    //       <div className="h-46">
    //         <label className="p-4 rounded-md bg-violet-800 w-14">Active Type </label>
    //         <input
    //           className="border-2"
    //           type="dropdown"
    //           placeholder="Selected Type"
    //           name="type"
    //           value={activityData.type}
    //           onChange={handleInputChange}
    //         />
    //       </div>
          
    //       <div className="flex flex-row">
    //         <label>Date</label>
    //         <input
    //           type="date"
    //           name="date"
    //           value={activityData.date}
    //           onChange={handleInputChange}
    //         />
    //       </div>
    //       <div className="flex flex-row">
    //         <label>Duration</label>
    //         <input
    //           type="text"
    //           name="duration"
    //           value={activityData.duration}
    //           onChange={handleInputChange}
    //         />
    //       </div>
    //     </div>
    //     <label>Description</label>
    //     <textarea
    //       className="w-5/6 shadow-lg h-52"
    //       name="description"
    //       value={activityData.description}
    //       onChange={handleInputChange}
    //     />
    //   </form>
    //   <div className="flex justify-start left-20 buttom-20">
    //     <button
    //       className="mt-4 btn-primary"
    //       type="submit"
    //     >
    //       Save
    //     </button>
    //     <button
    //       className="mt-4 btn-error"
    //       onClick={handleDeleteClick}
    //     >
    //       Delete
    //     </button>
    //     <button 
    //       className="mt-4 btn-accent"
    //       onClick={() => setIsEditing(false)}>
    //       Cancel
    //     </button>
    //   </div>
    // </div>
  );
};

export default ActivityEditForm;
