import { React, useState, useEffect } from "react";
import axios from "axios";

function Totalduration() {
  const [duration, setDuration] = useState(0);
  const idtoken = localStorage.getItem("idtoken");
  let decoded, userID;
  if (idtoken) {
    decoded = jwt_decode(idtoken);
    userID = decoded.user.userID;
  }

  const BACKEND_URL = "https://infinity-fit-backend.onrender.com";

  const fetchDuration = async (userID) => {
    const res = await axios.get(`${BACKEND_URL}/activities/`); /// อย่าลืมเปลี่ยน URL
    const activities = res.data;

    const totalDuration = activities.reduce((accumulator, activity) => {
      return accumulator + activity.duration;
    }, 0);
    setDuration(totalDuration);
  };

  useEffect(() => {
    fetchDuration(userID);
  }, [userID]);

  return (
    <div>
      <div className="mt-10 card-total-duration">
        <div className="shadow-lg shadow-blue-500/50 hover:scale-110  bg-sky-950 rounded-[13px] lg:w-[450px] h-[250px] md:w-[420px] m-10 ">
          <div className="flex flex-auto bmi-card">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/11432/11432052.png"
                className="pt-16 pl-7"
                alt="duration-pic"
              />
            </div>
            <div className="total-duration">
              <h2 className="pt-10 text-2xl text-center text-white text-bold pl-14">
                Total Duration
              </h2>
              <h2 className="pl-10 text-3xl text-center text-blue-500 text-bold pt-7">
                {duration} Minutes
              </h2>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totalduration;
