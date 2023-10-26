import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout";
import ActivityDisplay from "../components/ActivityDisplay";
import ActivityEditForm from "../components/ActivityEditForm";

function ActivityCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [activityData, setActivityData] = useState({
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
      .get(`https://infinity-fit-backend.onrender.com/activities/${id}`)
      .then((res) => {
        setActivityData(res.data);
        console.error(res.data)
        if(activityData) {
          console.error(activityData)
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData({
      ...activityData,
      [name]: value,
    });
  };

  const handleSaveClick = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    const config = {
      // set headers for axios.post
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    await axios
      .put(
        `https://infinity-fit-backend.onrender.com/activities/${id}`,
        {
          name: activityData.name,
          type: activityData.type,
          description: activityData.description,
          duration: activityData.duration,
          date: activityData.date,
          userID: "60f9b0b3c9b0a40015f1b0a4",
        },
        config
      )
      .then((res) => {
        navigate("/");
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
      console.error(id);
      await axios
        .delete(`https://infinity-fit-backend.onrender.com/activities/${id}`)
        .then((res) => {
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Layout>
      { isLoading ? (
        <div className="flex items-center justify-center text-center">Loading ... please wait</div>
      ) : isEditing ? (
          <ActivityEditForm
            activityData={activityData}
            handleInputChange={handleInputChange}
            handleSaveClick={handleSaveClick}
            handleDeleteClick={handleDeleteClick}
            setIsEditing={setIsEditing}
          />
          )
        : (
          <ActivityDisplay 
            activityData={activityData} 
            onEditClick={() => setIsEditing(true)}
            onDeleteClick={handleDeleteClick}
          />
          )}
    </Layout>
  );
}

export default ActivityCard;
