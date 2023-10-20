import React, { useState , useEffect} from 'react';
import './ProfileEdit.css'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const ProfileEdit = ({ onEditClick, onDeleteClick , onLogoutClick, setChange, setInformation,information}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const  id  = information.userID

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(information);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
    console.log(value)
  };
  useEffect(() => {
    fetchInformation();
  }, [id]);

  const fetchInformation = async () => {
     axios
      .get(`https://infinity-fit-backend.onrender.com/users/${id}`)
      .then((res) => {
        setInformation(res.data);
        console.error(res.data)
        if(information) {
          console.error(information)
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
        "Access-Control-Allow-Origin": "*",
      },
    };
    setChange(true)
    await axios
      .put(
        `https://infinity-fit-backend.onrender.com/activities/${id}`,
        {
          Name: '',
          Gender: '',
          Birthdate: '',
          Height: '',
          Weight: '',
          userID: "60f9b0b3c9b0a40015f1b0a4",
        },
        config
      )
  };

  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this activity?"
    );
    if (shouldDelete) {
      console.error(id);
      await axios
        .delete(`https://infinity-fit-backend.onrender.com/activities/${id}`)
        .then((res) => {
          navigate("/home");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(information);
  console.log(isEditing);

  return (
    <div className="main-profile">
      <div className="information">
        <form>
          <div className="informationtype">
            <label htmlFor="Name">Name</label>
            <input
              type="string"
              name="Name"
              value={information.Name}
              onChange={handleInputChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="informationtype">
            <label htmlFor="Gender">Gender</label>
            <select name="Gender" value={information.Gender} onChange={handleInputChange}  required >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              
            </select>
          </div>
          <div className="informationtype">
            <label htmlFor="Birthdate">BirthDate</label>
            <input
              type="date"
              name="Birthdate"
              value={information.Birthdate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="informationtype">
            <label htmlFor="Height">Height</label>
            <input
              type="number"
              name="Height"
              value={information.Height}
              onChange={handleInputChange}
              min="0"
              required
              placeholder="Height"
            />
          </div>
          <div className="informationtype">
            <label htmlFor="Weight">Weight</label>
            <input
              type="number"
              name="Weight"
              value={information.Weight}
              onChange={handleInputChange}
              min="0"
              required
              placeholder="Weight"
              
            />
          </div>
        </form>
     
        <div id="button" className="flex justify-between">
          <button onClick={handleSaveClick} className="mt-4 btn-primary w-[100px]">
            Save
          </button>
          <button className="mt-4 btn-error w-[100px]" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
        </div>
      </div>
    
  );
};

export default ProfileEdit;
