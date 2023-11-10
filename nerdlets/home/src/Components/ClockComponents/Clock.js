import React, { useState, useEffect } from "react";
import '../../Styles/Clock.css';

const Clock = ({ title, zone }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  };

  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const handleDate = () => {
      const time = new Date().toLocaleTimeString('en-US', { timeZone: zone });
      const timeDate = new Date('January 1, 2023 ' + time);
      const hours = timeDate.getHours();
      const minutes = timeDate.getMinutes();
      setHours(hours);
      setMinutes(minutes);
    };

    const clockInterval = setInterval(handleDate, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  });

  return (

    <div className={"clock"}>
      <div className={"analog-clock"}>
        <div className={"dial minutes"} style={minutesStyle} />
        <div className={"dial hours"} style={hoursStyle} />
      </div>
      <div>{title}</div>
      {/* <div className={"digital-clock"}>
        {hours}:{minutes}
      </div> */}
    </div>

  );
};

export default Clock;