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
          <div className='pt-10 max-md:pt-10 ml-36 '>
              <div className="information-2 w-2/5 grid gap-4 p-5 ">
                <div className="profile-item">
                  <span className="item-label">Email:</span>
                  <span className="item-value">{information.userEmail}</span>
                </div>
                <div className="profile-item">
                  <span className="item-label">Gender:</span>
                  <span className="item-value">{information.userBiologicalGender}</span>
                </div>
                <div className="profile-item">
                  <span className="item-label">Birthdate:</span>
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


          <div id="button" className="flex m-5 justify-around w-3/6 max-md:mx-20">
        <button className="mt-4 btn-primary w-[100px]" onClick={() => setChange(false)}>
            Edit
          </button>
          <button className="mt-4 btn-error w-[100px]" onClick={logout}>
            Logout
          </button>
          </div>
        
      </section>



  );
};

export default ProfileDisplay;


