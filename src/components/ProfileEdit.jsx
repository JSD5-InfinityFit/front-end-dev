import React, { useState } from "react";
import "./ProfileEdit.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileEdit = ({
  onEditClick,
  onDeleteClick,
  onLogoutClick,
  setChange,
  setInformation,
  information,
}) => {
  // const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(information);
  // };
  const id = information._id;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  const fetchInformation = async (id) => {
    axios
      .get(`${VURI}/users/${id}`)
      .then((res) => {
        setInformation(res.data);
        // console.error(res.data);
        if (information) {
          // console.error(information);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveClick = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log(information);
    const config = {
      // set headers for axios.post
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    };
    // setChange(true);
    await axios
      .put(
        `${VURI}/users/${id}`,
        {
          userEmail: information.userEmail,
          // userPassword: information.userPassword,
          userBiologicalGender: information.userBiologicalGender,
          userBD: information.userBD,
          userHeight: information.userHeight,
          userWeight: information.userWeight,
        },
        config
      )
      .then((res) => {
        fetchInformation(id);
        setChange(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteClick = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this activity?"
    );
    if (shouldDelete) {
      console.error(id);
      await axios
        .delete(`${VURI}/users/${id}`)
        .then((res) => {
          navigate("/home");
          const idtoken = localStorage.clear();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // console.log(information);
  // console.log(isEditing);

  return (
    <div className="main-profile">
      <div className="information">
        <form className="information-form">
          <div className="informationtype">
            <label htmlFor="Name">Email</label>
            <input
              type="string"
              name="userEmail"
              defaultValue={information.userEmail}
              onChange={handleInputChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="informationtype">
            <label htmlFor="Gender">Gender</label>
            <div className="select-g">
              <select
                name="userBiologicalGender"
                defaultValue={information.userBiologicalGender}
                onChange={handleInputChange}
                required
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="informationtype">
            <label htmlFor="Birthdate">BirthDate</label>
            <input
              style={{ paddingLeft: "10px" }}
              type="date"
              name="userBD"
              defaultValue={information.userBD}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="informationtype">
            <label htmlFor="Height">Height</label>
            <input
              type="number"
              name="userHeight"
              defaultValue={information.userHeight}
              onChange={handleInputChange}
              min="0"
              required
              placeholder="Height"
            />
            <label htmlFor="Weight">cm.</label>
          </div>
          <div className="informationtype">
            <label htmlFor="Weight">Weight</label>
            <input
              type="number"
              name="userWeight"
              defaultValue={information.userWeight}
              onChange={handleInputChange}
              min="0"
              required
              placeholder="Weight"
            />
            <label htmlFor="Weight">kg.</label>
          </div>

          <div id="button" className="flex m-5 justify-around">
            <button
              onClick={handleSaveClick}
              className="mt-4 btn-primary w-[100px]"
            >
              Save
            </button>
            <button
              className="mt-4 btn-error w-[100px]"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
