import React from "react";
import Layout from "./Layout.jsx";
// import { Button } from 'react-daisyui'

const Profile = () => {
  return (
    <Layout>
      <h1>Profile Page</h1>
      {/* <Button color="primary">Click me!</Button> */}
      <button color="primary">Click me!</button>
      <button className="primary">Click me!</button>

    </Layout>
  );
};

export default Profile;
