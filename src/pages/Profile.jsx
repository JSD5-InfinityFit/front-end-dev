import { useState, useEffect } from "react";
import Layout from "../Layout.jsx";
import ProfileEdit from "../components/ProfileEdit.jsx";
import ProfileDisplay from "../components/ProfileDisplay.jsx";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [information, setInformation] = useState({});

  useEffect(() => {
    fetchInformation(userID);
  }, []);

  const idtoken = localStorage.getItem("token");
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userID;
  }

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  const fetchInformation = async (userID) => {
    await axios
      .get(`${VURI}/users/${userID}`)
      .then((res) => {
        console.log(res.data)
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
