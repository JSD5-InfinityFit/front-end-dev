import React from "react";
import "./Navbar.css";
import inifityLogo from "../assets/icons/infinity.png";

const NavbarDT = () => {
  return (
    <div className="navbar">
      <button className="rounded-none bg-indigo-900">
        <a href={"/"}>
          <img
            src={inifityLogo}
            style={{ display: "inline" }}
            className="icons"
            alt="inftyFit Logo"
          />
          Infinity Fit
        </a>
      </button>
      <button className="rounded-none bg-indigo-900">
        <a href={"/activity"}>Activity</a>
      </button>
      <button className="rounded-none bg-indigo-900">
        <a href={"/setting"}>Setting</a>
      </button>
      <button className="rounded-none bg-indigo-900">
        <a href={"/profile"}>Profile</a>
      </button>
    </div>
  );
};

export default NavbarDT;
