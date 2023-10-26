import React from "react";
import "./ProfileDisplay.css";
import { useNavigate } from "react-router-dom";

const ProfileDisplay = ({ setChange, information }) => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };

  return (
    <section id="card-item" className="card-items-center">
      <div className="pt-20 md:mx-60 lg:mx-96 max-md:mx-16 ">
        <div className="grid gap-4 p-5 information-2 ">
          <div className="profile-item">
            <span className="item-label ">Email:</span>
            <span className="truncate item-value">{information.userEmail}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Gender:</span>
            <span className="truncate item-value">
              {information.userBiologicalGender}
            </span>
          </div>
          <div className="profile-item">
            <span className="item-label ">Birthdate:</span>
            <span className="truncate item-value">{information.userBD}</span>
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

      <div id="button" className="flex justify-center pr-10 mt-10 ">
        <button
          className="mt-4 btn-primary w-[100px] mx-32 max-md:mx-20"
          onClick={() => setChange(false)}
        >
          Edit
        </button>
        <button
          id="del-button"
          className="mt-4 pl-2 w-[100px] mx-32 max-md:mx-12"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="grid justify-items-stretch">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3684/3684816.png"
          className="w-60 justify-self-center"
        />
      </div>
    </section>
  );
};

export default ProfileDisplay;
