import React from "react";
import './ActivityEditForm.css' //new in this file
import { useState } from "react"; //new in this file
import { useNavigate } from 'react-router-dom';
import { colors } from "@mui/material";

const ActivityEditForm = ({  //new in this file
  activityData,
  handleInputChange,
  handleSaveClick,
  handleDeleteClick,
  setIsEditing,
  handleFileSelect, //new in this file
  fileInput,
  formData, //new in this file
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
      <div className="row-1">
        <div id="form" className="text-white form sm:text-center">

          <form className="" onSubmit={handleSaveClick}>
            <div className="form-group">
              <label>Activity Name</label>
              <input
              className="activity-name"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={activityData.name}
              onChange={handleInputChange}
            />
            </div>

            <div className="form-group">
              <label htmlFor="activity">Activity Type</label>

              <select id="activity"  className="activity-type" name="type" onChange={handleInputChange}>
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
                className="text-white bg-white rounded-md"
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                className="rounded-md in"
                min="0"
                placeholder='Hour'
                type="number"
                name="hour"
                value={formData?.hour || ''}
                onChange={handleInputChange}
              /> <p>Hour</p>
        
              <input
                min="0"
                max={59}
                className="rounded-md in"
                placeholder='Minute'
                type="number"
                name="min"
                value={formData?.min || ''}
                onChange={handleInputChange}
              />  <p>Minute</p>
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

          <svg id="camera-icon" className='w-10 h-10 camera-icon' onClick={() => {fileInput.click() }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
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
          className="bg-blue-500 save-button "
          onClick={handleSaveClick}
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
    
  );
};

export default ActivityEditForm;
