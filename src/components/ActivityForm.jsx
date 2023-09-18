import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActivityForm (){

    // value for the img 
    let swim = 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80'
    let run = 'https://images.unsplash.com/photo-1559166631-ef208440c75a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80'
    let dance = 'https://images.unsplash.com/photo-1590803246097-7be47831ab35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2715&q=80'
    let badminton = 'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3111&q=80'
    let yoga = 'https://images.unsplash.com/photo-1527698205475-0779b7bb9ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3143&q=80'
    
    const [img,setImg] = useState(run)

    const [formData,setFormData] = useState({
        activityName : '',
        description : '',
        activityType : null,
        min: 0,
        hour: 0,
        date: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // if activityType is changed, Update the picture.
        if(name === 'activityType' ){
            setImg( eval(value) )
        }
    };

    // formErrors code here

    const ACTIVITY_TYPES = ["run", "bicycle", "ride", "swim", "walk", "hike", "dance", "badminton", "yoga"];

    const validateActivity = (name, type, description, date, durationTime) => {
    /**
     * All form fields are validated on form submission(Name, Description, ActivityType:[ACTIVITY_TYPES], Duration, Date)
     * A meaningful error message is displayed when a form field is invalid
     * @param {string} name - Name of the Activity
     * @param {string} type - Type of the Activity
     * @param {string} description - Description of the Activity
     * @param {Date} date - Date of the Activity
     * @param {number} durationTime - Duration of the Activity in minutes
     */
      // debug
      console.log(name, type, description, date, durationTime);

      if (typeof name != 'string'){
        toast('Error! Activity Name is not a string');
        return false;
      }
      if (!name.length){
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
      if (!description.length) {
        toast('Error! Activity Description is empty');
        return errorMessage;
    }
    if (typeof date != 'Date') {
      toast('Error! Activity Date is not a Date');
      return false;
    }
    if (date > new Date()) {
      toast('Error! Activity Date is in the future');
      return false;
    }
    if (typeof durationTime != 'number') {
      toast('Error! Activity Duration is not a valid number');
      return false;
    }
    if (!durationTime.length) {
      toast('Error! Activity Duration is empty');
      return false;
    }
    toast('Error! Activity Form Submission is valid');
    return true;
  }

    // validateForm code here
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const currentDate = new Date();
      setFormData({ ...formData, date: currentDate });
      const activityValid = validateActivity(formData.activityName, formData.activityType, formData.description, formData.date, (formData.hour * 60 + formData.min));
      if(activityValid) {
        // post to server
        toast(formData);
      }
    }

    return (

    <div className="form">
         
        <img style={{width:'200px'}} src={img}/>
        <h1>Activity Form</h1>
  
        <form onSubmit={handleSubmit}>
  
          <div className="form-group">
            
            <input
            placeholder='Activity Name'
              type="text"
              name="activityName"
              value={formData.activityName}
              onChange={handleInputChange}
            />
          </div>
  
          <div className="form-group">
            <input
            placeholder='Description'
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
  
          <div className="form-group">
          <label htmlFor="activity">Choose a Activity:</label>

            <select id="activity" name="activityType" onChange={handleInputChange}>
                <option defaultValue value="run" >Run</option>
                <option value="dance">Dance</option>
                <option value="swim">Swim</option>
                <option value="badminton">Badminton</option>
                <option value="yoga">Yoga</option>
            </select>   
          </div>

          <div className="form-group">
          <label htmlFor="duration">Choose Duration:</label>
          <input
              min="0" 
              placeholder='Hour'
              type="number"
              name="hour"
              value={formData.hour}
              onChange={handleInputChange}
            />
            <input
              min="0" 
              placeholder='Minute'
              type="number"
              name="min"
              value={formData.min}
              onChange={handleInputChange}
            />

           
          </div>
  
          <button 
            className='add-button'
            type="submit"
          >ADD</button>
          <ToastContainer />
        </form> 
      </div>
      )
}

export default ActivityForm