import { useState, useEffect } from "react";
import Layout from "../Layout.jsx";
import ProfileEdit from "../components/ProfileEdit.jsx";
import ProfileDisplay from "../components/ProfileDisplay.jsx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [information, setInformation] = useState({});

  useEffect(() => {
    fetchInformation(userID);
  }, []);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userID;
  } else {
    const navigate = useNavigate();
    navigate("/");
  }

  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  const fetchInformation = async (userID) => {
    await axios
      .get(`${BACKEND_URL}/users/${userID}`)
      .then((res) => {
        setInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [change, setChange] = useState(true);
  let component = (
    <ProfileDisplay setChange={setChange} information={information} />
  );
  if (!change)
    component = (
      <ProfileEdit
        setChange={setChange}
        setInformation={setInformation}
        information={information}
      />
    );
  return <Layout>{component}</Layout>;
};

export default Profile;
