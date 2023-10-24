import React from "react";
import bmiicon from "../assets/icons/bmi.png";

function BMI({ weight, height }) {
  return (
    <div className="w-[250px] h-[250px] ml-10 bg-sky-950 rounded-[13px] text-2xl font-bold">
      <img src={bmiicon} alt="BMI" className="h-16" />
      <h2 className="text-2xl text-bold text-white text-center pt-10 pl-14">
        Your BMI is{" "}
      </h2>
      <h2 className="text-3xl text-bold text-blue-500 text-center pt-7 pl-10">
        {((weight * 10000) / (height * height)).toFixed(2)}
      </h2>
    </div>
  );
}

export default BMI;
