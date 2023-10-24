import React from 'react'
import './ProfileDisplay.css'
import { useNavigate } from "react-router-dom";

const ProfileDisplay = ({ setChange, information }) => {
 
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };

  return (
   
    <section id='card-item' className='card-items-center'>
    <div className='pt-20 md:mx-60 lg:mx-96  max-md:mx-16'>
        <div className="information-2 grid gap-4 p-5 ">
          <div className="profile-item">
            <span className="item-label ">Email:</span>
            <span className="item-value">{information.userEmail}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Gender:</span>
            <span className="item-value">{information.userBiologicalGender}</span>
          </div>
          <div className="profile-item">
            <span className="item-label ">Birthdate:</span>
            <span className="item-value">{information.userBD}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Height:</span>
            <span className="item-value">{information.userHeight}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Weight:</span>
            <span className="item-value">{information.userWeight}</span>
          </div>
        </div>
  </div>


    <div id="button" className="flex justify-center mt-10 pr-10 ">
  <button className="mt-4 btn-primary w-[100px] mx-32 max-md:mx-20" onClick={() => setChange(false)}>
      Edit
    </button>
    <button className="mt-4 btn-error w-[100px] mx-32 max-md:mx-12" onClick={logout}>
      Logout
    </button>
    </div>
  
</section>


  );
};

export default ProfileDisplay;


