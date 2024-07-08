import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Saturday")
    } else if (day === "Saturday") {
      setDay("Sunday")
    }
    else if (day === "Sunday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);

  
  useEffect(() => {
    if (val === "Saturday" || val === "Sunday") {
      ref.current = "Friday"; 
    } else if (val === "Monday") {
      ref.current = "Monday"; 
    } else {
      ref.current = val;
    }
  }, [val]);

  return ref.current;
}