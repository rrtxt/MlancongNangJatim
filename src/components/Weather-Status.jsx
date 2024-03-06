import { Icon } from "@iconify/react";
import "../assets/styles/components/weather-status.css";
import { useState, useEffect } from "react";

function WeatherStatus() {
  const [initDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    var newDates = [];
    for (let i = 1; i <= 5; i++) {
      const nextDay = new Date(initDate.getTime()); // Create a copy to avoid modifying original
      nextDay.setDate(nextDay.getDate() + i); // Add 'i' days to the copied date
      newDates.push(nextDay); // Push the modified date to the array
    }
    setDates(newDates);
  }, [initDate]);

  function getDayMonthYear(dateString) {
    const dateObj = new Date(dateString);

    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <div
        className="weather-container"
        onClick={() => {
          setIsActive(!isActive);
        }}>
        <div className="date">{getDayMonthYear(initDate)}</div>
        <div className="weather-icon">
          <Icon
            icon="fluent:weather-hail-day-24-regular"
            width="64"
            height="64"
            style={{ color: "black" }}
          />
        </div>
      </div>
      {isActive ? (
        <div className="weather-dropdown">
          {dates.map((date) => (
            <div key={date} className="weather-dd-content">
              <div className="date">{getDayMonthYear(date)}</div>
              <div className="temp">34&deg;</div>
              <Icon
                icon="fluent:weather-hail-day-24-regular"
                width="64"
                height="64"
                style={{ color: "black" }}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WeatherStatus;
