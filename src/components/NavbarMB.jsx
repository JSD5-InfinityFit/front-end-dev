import React from "react";
import homeLogo from "../assets/icons/home.gif";
import screenLogo from "../assets/icons/activity.gif";
import gearLogo from "../assets/icons/setting.gif";
import profileLogo from "../assets/icons/user.gif";
import "./Navbar.css";

const NavbarMB = () => {
  return (
    <div className="navbar">
      <a href={"/"}>
        <img src={homeLogo} className="icons" alt="home logo" />
      </a>
      <a href={"/activity"}>
        <img src={screenLogo} className="icons" alt="activity logo" />
      </a>
      <a href={"/setting"}>
        <img src={gearLogo} className="icons" alt="setting logo" />
      </a>
      <a href={"/profile"}>
        <img src={profileLogo} className="icons" alt="profile logo" />
      </a>
    </div>
  );
};

export default NavbarMB;
