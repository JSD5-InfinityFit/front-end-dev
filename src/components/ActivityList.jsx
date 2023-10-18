import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

function ActivityList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // getDataFromAPI();
    currentUser(userID);

  }, []);

  const VURI = "https://infinityfitbackenddev.onrender.com";
  const FURI = "https://infinity-fit-backend.onrender.com";

  let idtoken = localStorage.getItem("token");
  // console.log(idtoken);
  if (idtoken) {
    const decoded = jwt_decode(idtoken);
    var userID = decoded.user.userID;
    var userEmail = decoded.user.userEmail;
    console.log(userEmail);
  }

  const currentUser = async (userID) =>
    await axios
      .get(VURI + "/users/" + userID)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.userActivities);
        setCards(res.data.userActivities);
      })
      .catch((err) => {
        console.log(err);
      });

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    const idtoken = localStorage.clear();
  };

  const getDataFromAPI = async () => {
    await axios
      .get("https://infinity-fit-backend.onrender.com/activities")
      .catch((err) => {
        console.log("Error", err);
      })
      .then((res) => {
        console.log("Success", res.data);
        setCards(
          res.data.map((card) => ({
            ...card,
            formattedDate: formatApiDate(card.date),
          }))
        );
      });
  };

  // const formatApiDate = (apiDate) => {
  //   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const monthsOfYear = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

    // const date = new Date(apiDate);
    // const day = date.getDate().toString().padStart(2, "0");
    // const month = monthsOfYear[date.getMonth() - 1];

    // const dayOfWeek = daysOfWeek[date.getDay()];

  //   return {
  //     dayOfWeek,
  //     day,
  //     month,
  //   };
  // };

  return (
    <>
      <section className="box-border bg-[#F0F8FF]">
        <div className="sm:container w-full max-w-screen-xl m-auto ">
          <h1 className="text-5xl pt-6 font-semibold	">Exercise List of {userEmail}</h1>

          {/* <div className='flex flex-col-reverse '> */}
          <div className="grid flex-wrap justify-between grid-row-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3 cards container md:mx-auto">
            {cards.map((card) => (
              <Link to={`/activities/${card._id}`} key={card._id}>
                <div
                  className="flex flex-row flex-shrink-0 w-full p-3 card bg-blue-950 flex-0 flex-basis-calc max-w-calc border-l-8"
                  style={{
                    borderColor:
                      card.type === "run"
                        ? "green"
                        : card.type === "swim"
                        ? "skyblue"
                        : card.type === "badminton"
                        ? "orange"
                        : card.type === "dance"
                        ? "red"
                        : "pink",
                  }}
                >
                  <div className=" mx-auto p-2 text-3xl font-black text-white date_Exercise">
                    <div className="flex flex-col items-center pr-5">
                      {/* <p>{card.formattedDate.dayOfWeek}</p>
                      <p>{card.formattedDate.day}</p>
                      <p>{card.formattedDate.month}</p> */}
                    </div>
                  </div>

                  <div
                    div
                    className="container mx-auto p-2 m-3  text-white information text truncate ... flex flex-col items-start"
                  >
                    <p className="text-3xl font-semibold">{card.type}</p>
                    <p className="font-semibold">{card.name}</p>
                    <p className="font-semibold">{card.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div class="max-w-2xl mx-auto mt-12">
          <div class="flex">
            <div class="mx-auto flex gap-10">
              <div class="w-auto h-auto">
                <div class="flex-1 h-full">
                  <div class="flex items-center justify-end flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-full">
                    <div class="relative">
                      <a href={"/activityform"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ActivityList;
