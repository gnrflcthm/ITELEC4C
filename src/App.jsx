import React, { useState, useEffect, useMemo } from "react";
import "./app.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [timeIn, setTimeIn] = useState();
  const [timeOut, setTimeOut] = useState();
  const [timeDiff, setTimeDiff] = useState();
  const formattedTime = useMemo(() => {
    let hours = (time.getHours() % 12).toString();
    const minutes = time.getMinutes().toString();
    const half = time.getHours() > 11 && time.getHours() < 24 ? "PM" : "AM";
    hours = hours === 0 ? hours + 1 : hours;
    return { hours, minutes: minutes.padStart(2, "0"), half };
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const onTimeIn = () => {
    setTimeIn(time);
  };

  const onTimeOut = () => {
    if (!timeIn) return;

    const lastTime = time;
    setTimeOut(lastTime);
    const diff = lastTime.getTime() - timeIn.getTime();
    setTimeDiff(diff);
    console.log(diff);
  };

  const onClear = () => {
    setTimeIn(null);
    setTimeOut(null);
    setTimeDiff(null);
  };

  function formatDiff() {
    if (!timeDiff) {
      return;
    }

    let tempMillis = timeDiff;
    let hours = tempMillis >= 360000 ? Math.floor(tempMillis / 360000) : 0;
    tempMillis -= hours * 3_600_000;
    let minutes = tempMillis >= 60000 ? Math.floor(tempMillis / 60000) : 0;
    tempMillis -= minutes * 60000;
    let seconds = tempMillis >= 1000 ? Math.floor(tempMillis / 1000) : 0;
    tempMillis -= Math.floor(seconds * 1000);
    return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
      seconds
    )}.${tempMillis}`;
  }

  function padZeros(val) {
    return String(val).padStart(2, "0");
  }

  return (
    <div className="app">
      <div className="time">
        <div className="today">
          <h1>
            {formattedTime.hours}
            <span className="sep">:</span>
            {formattedTime.minutes}
            <span>{formattedTime.half}</span>
          </h1>
          <h2>{time.toDateString().split(" ").splice(1, 3).join(" ")}</h2>
        </div>
        <div className="timeContainer">
          <div className="timeDisplay">
            <h4>Time In</h4>
            <p>{timeIn?.toLocaleTimeString() || ""}</p>
          </div>
          <div className="timeDisplay">
            <h4>Time Out</h4>
            <p>{timeOut?.toLocaleTimeString() || ""}</p>
          </div>
          <div className="timeDisplay">
            <h4>Difference</h4>
            <p>{formatDiff()}</p>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={() => onTimeIn()}>
          <span>Time In</span>
        </button>
        <button onClick={() => onTimeOut()}>
          <span>Time Out</span>
        </button>
        <button onClick={() => onClear()}>
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
}

export default App;
