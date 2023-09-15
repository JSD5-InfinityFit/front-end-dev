import { useState } from "react"

function Form (){

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
        activityType : '',
        min: '',
        hour: '',
        date: '',
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


    // validateForm code here

    const handleSubmit = (e) =>{

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

            <select id="activity" name="activityType" onChange={handleInputChange} >
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
  
          <button className='add-button' type="submit">ADD</button>
  
        </form>
       
        
      </div>
      )



    




}











export default Form