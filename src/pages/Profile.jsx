import { useState, useEffect } from "react";
import Layout from "../Layout.jsx";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../components/ProfileEdit.jsx";
import ProfileDisplay from "../components/ProfileDisplay.jsx";
import axios from "axios";

const Profile = () => {
  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  const [information, setInformation] = useState({});
  const id = "652de834bef254a0f30abb35";
  useEffect(() => {
    fetchInformation(id);
  }, []);

  const fetchInformation = async (id) => {
    await axios
      .get(`${VURI}/users/${id}`)
      .then((res) => {

        console.log(res.data);
        setInformation(res.data);
        console.log(information);
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
