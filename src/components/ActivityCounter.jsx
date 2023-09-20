import { useEffect, useState } from "react";

const ActivityCounter = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (status) {
        setTime((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [status]);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <div className="activity-counter" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
        <h1>Time: {time}</h1>
        <input value={name} onChange={handleChange} type='text' />
        <button 
          className="btn btn-blue"
          onClick={() => setStatus(!status)}
        >Start/Stop</button>
        <br />
        <button className="btn btn-blue"
          onClick={() => {
            setTime(0);
            setName("");
          }}
        >Reset</button>
        <br />
        <button className="btn btn-blue"
          onClick={() => {
            setTime(0);
            setName("");
            alert(time);
          }}
        >Finish</button>
      </div>
    </>
  );
};

export default ActivityCounter