import { useState } from "react";
import moment from "moment";

function Time() {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  setTimeout(() => {
    setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
  return <h2>{time}</h2>;
}

export default Time;
