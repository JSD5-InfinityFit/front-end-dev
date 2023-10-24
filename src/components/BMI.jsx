import React from "react";

function BMI({weight,height}) {

  return (
    <div id="main-card-dashboard" className="max-md:mt-10">
      <div className="shadow-lg shadow-blue-500/50 hover:scale-110 lg:w-[250px] h-[250px] bg-sky-950 rounded-[13px] md:w-[420px] m-10 ">
        <div className="bmi-card ">
          <img src="https://cdn-icons-png.flaticon.com/128/12130/12130857.png" className="w-16 pt-4 pl-4" alt="bmi-pic"/>
          <div className="bmi-shown">
            <h2 className="text-2xl text-center text-white text-bold pt-7">Your BMI is </h2>
            <h2 className="text-5xl text-center text-blue-500 text-bold">
              {(weight*10000/(height*height)).toFixed(2)}
            </h2>
          </div>
        </div> 
      </div>
    </div>
  )
};

export default BMI;
