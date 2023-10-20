import React from 'react';

import { useNavigate } from "react-router-dom";

const ProfileDisplay = ({ setChange, information }) => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };

  return (
    <div className="main-profile">
      <div className="information">
        <div className="profile-item">
          <span className="item-label">Name:</span>
          <span className="item-value">{information.name}</span>
        </div>
        <div className="profile-item">
          <span className="item-label">Gender:</span>
          <span className="item-value">{information.Gender}</span>
        </div>
        <div className="profile-item">
          <span className="item-label">Birthdate:</span>
          <span className="item-value">{information.Birthdate}</span>
        </div>
        <div className="profile-item">
          <span className="item-label">Height:</span>
          <span className="item-value">{information.Height}</span>
        </div>
        <div className="profile-item">
          <span className="item-label">Weight:</span>
          <span className="item-value">{information.Weight}</span>
        </div>
      </div>
      <div id="button" className="flex justify-between">
        <button
          className="mt-4 btn-primary w-[100px]"
          onClick={() => setChange(false)}
        >
          Edit
        </button>
        <button className="mt-4 btn-error w-[100px]" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDisplay;
