import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import axios from "axios";

function ActivityCard() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    duration: 0,
    date: "",
    userID: "60f9b0b3c9b0a40015f1b0a4",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchActivityData();
  }, [id]);

  const fetchActivityData = async () => {
    await axios
      .get(`https://infinityfitbackenddev.onrender.com/activities/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log(formData);
    const config = {
      // set headers for axios.post
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    await axios
      .put(
        `https://infinityfitbackenddev.onrender.com/activities/${id}`,
        {
          name: formData.name,
          type: formData.type,
          description: formData.description,
          duration: formData.duration,
          date: formData.date,
          userID: "60f9b0b3c9b0a40015f1b0a4",
        },
        config
      )
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const navigate = useNavigate();
  
  const handleDeleteClick = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this activity?"
    );
    if (shouldDelete) {
      await axios
        .delete(`https://infinityfitbackenddev.onrender.com/activities/${id}`)
        .then((res) => {
          navigate("/");
          console.log(req);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Layout>
      <>
        <div className="m-36">
          <form className="flex flex-col" onSubmit={handleSaveClick}>
            <div className="bg-gray-100 w-3/5 rounded-md shadow-lg">
              <div className="h-46">
                <label className="bg-violet-800 w-14 p-4 rounded-md">
                  Active Name
                </label>
                <input
                  className="border-2"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="h-46">
                <label className="	bg-violet-800 w-14 p-4 rounded-md">
                  Active Type
                </label>
                <input
                  className="border-2"
                  type="dropdown"
                  placeholder="Selected Type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-row">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-row">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <label>Description</label>
            <textarea
              className="w-5/6 shadow-lg h-52"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <div className="relative left-20 buttom-20">
              <button
                className="absolute btn btn-outline btn-success right-20 "
                type="submit"
              >
                Save
              </button>
              <button
                className="btn btn-error absolute right-20 bottom-0.5"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </>
    </Layout>
  );
}

export default ActivityCard;
