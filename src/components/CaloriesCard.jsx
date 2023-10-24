import * as React from "react";
import calculateCalories from "../utils/calories";
import { Gauge } from "./charts/Gauge";
import GaugeChart from "./charts/GaugeChart";

const CaloriesCard = ({ activityData, weight }) => {
  let calories = 0;
  activityData.map((activity) => {
    calories += calculateCalories(activity.type, weight, activity.duration);
  });

  return (
    <>
      <div className="mt-10 card">
        <div className="shadow-lg shadow-blue-500/50 hover:scale-110  bg-sky-950 rounded-[13px] lg:w-[450px] h-[250px] md:w-[420px] m-10 ">
          <div className="flex flex-auto">
            <Gauge
              value={calories ? calories : 3000}
              size="large"
              showValue={true}
            />
            <h2 className="pt-10 text-2xl text-center text-white text-bold pl-14">
              Total Calories Burned
            </h2>
            <h2 className="pl-10 text-3xl text-center text-blue-500 text-bold pt-7">
              {calories ? calories : 3000} kCal
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaloriesCard;