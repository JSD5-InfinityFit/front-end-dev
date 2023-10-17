import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ActivityForm.css'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import axios from 'axios'; 

function ActivityForm() {

  // value for the img 
  let swim = 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80'
  let run = 'https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80'
  let dance = 'https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let badminton = 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  let yoga = 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'

  const [img, setImg] = useState(run)
  const [value, setValue] = useState(dayjs());
  const [fileInput, setFileInput] = useState()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'run',
    min: 0,
    hour: 0,
    date: new Date(),
    imageURL: '',
  })

  const handleFileSelect = (e) =>{
    let [ file ] = e.target.files

    // To display them as images as is, Have to transform them to dataUrl using the URL.createObjectURL method.
    let pic = URL.createObjectURL(file)
    
    setImg(pic)
    setFormData({ ...formData, imageURL: pic });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // if type is changed, Update the picture.
    if (name === 'type') {
      setImg(eval(value))
    }
  };

  // formErrors code here

  const ACTIVITY_TYPES = ["run", "bicycle", "ride", "swim", "walk", "hike", "dance", "badminton", "yoga"];

  const validateActivity = (name, type, description, date, durationTime) => {
    /**
     * All form fields are validated on form submission(Name, Description, type:[ACTIVITY_TYPES], Duration, Date)
     * A meaningful error message is displayed when a form field is invalid
     * @param {string} name - Name of the Activity
     * @param {string} type - Type of the Activity
     * @param {string} description - Description of the Activity
     * @param {Date} date - Date of the Activity
     * @param {number} durationTime - Duration of the Activity in minutes
     */
    console.log(name, type, description, date, durationTime);

    if (typeof name != 'string') {
      toast('Error! Activity Name is not a string');
      return false;
    }
    if (!name.length) {
      toast('Error! Activity Name is empty');
      return false;
    }
    if (typeof type != 'string') {
      toast('Error! Activity Type is not a string');
      return false;
    }
    if (!ACTIVITY_TYPES.includes(type)) {
      toast('Error! Activity Type is not valid');
      return false;
    }
    if (typeof description != 'string') {
      toast('Error! Activity Description is not a string');
      return errorMessage;
    }
    if (!(date instanceof Date)) {
      toast('Error! Activity Date is not a Date');
      return false;
    }
    if (date > new Date()) {
      toast('Error! Activity Date is in the future');
      return false;
    }
    if (!durationTime) {
      toast('Error! Activity Duration is empty');
      return false;
    }
    if (!Number.isFinite(durationTime)) {
      toast('Error! Activity Duration is not a valid number');
      return false;
    }
    console.log('Activity Form Submission is valid');
    return true;
  }

  // validateForm code here

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    setFormData({ ...formData, date: currentDate });
    const activityValid = validateActivity(formData.name, formData.type, formData.description, currentDate, parseInt(formData.hour * 60 + formData.min));
    console.log(activityValid);
    console.log(formData);

    if (activityValid) {
      // post to server
      postData();
    }
  }

  const postData = async () => {
    const config = {
      // set headers for axios.post
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
    const postObject = {
      name: formData.name,
      type: formData.type,
      description: formData.description,
      duration: parseInt(formData.hour * 60 + formData.min),
      date: formData.date,
      userID: '60f9b0b3c9b0a40015f1b0a4',
    };
    await axios.post('https://infinityfitbackenddev.onrender.com',postObject, config)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const cancel = () => {
    setFormData({
      name: '',
      description: '',
      type: 'run',
      min: 0,
      hour: 0,
      date: new Date(),
    })

    setValue(dayjs())
    setImg(run)

  }



  return (
    <div className="grid">
      <div className="row-1">
        <div className="form">

          <form>

            <div className="form-group">
              <label>Activity Name</label>
              <input
                style={{ padding: '6px', borderBottom: '1px solid grey' }}
                placeholder='Activity Name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="activity">Activity Type</label>

              <select id="activity" value={formData.type} name="type" onChange={handleInputChange}>
                <option value="run" >Run</option>
                <option value="dance">Dance</option>
                <option value="swim">Swim</option>
                <option value="badminton">Badminton</option>
                <option value="yoga">Yoga</option>
              </select>
            </div>

            <div className="form-group">
              <label style={{ marginRight: '20px' }} htmlFor="duration">Date</label>
              <DateTimePicker
                format="DD/MM/YYYY hh:mm"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                className="in"
                min="0"
                placeholder='Hour'
                type="number"
                name="hour"
                value={formData.hour}
                onChange={handleInputChange}
              />
              <input
                min="0"
                max={59}
                className="in"
                placeholder='Minute'
                type="number"
                name="min"
                value={formData.min}
                onChange={handleInputChange}
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
            ref={(inputRef) => setFileInput(inputRef)} //Create a reference to the input element to interact with it
          />

          <svg className='w-10 h-10 camera-icon' onClick={() => {fileInput.click() }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>

        </div>

      </div>

      <div className="row-2">
        <textarea 
          placeholder="How did you feel during exercise?  ( Optional )" 
          className="text"
          onChange={handleInputChange}
          name="description"
          value={formData.description}
        ></textarea>

        <div className="buttons">
          <button className='add-button'
            onClick={handleSubmit}
          >
            Add
          </button>
          <ToastContainer
            position="top-center"
            pauseOnHover
          />
          <div className="btn-seperator"></div>
          <button className='cancel-button' onClick={cancel} >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivityForm


