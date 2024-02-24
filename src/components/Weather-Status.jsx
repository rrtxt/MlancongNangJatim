import { Icon } from "@iconify/react";
import "../assets/styles/components/weather-status.css";

function WeatherStatus() {
  return (
    <div className="weather-container">
      <div className="date">16/02/2024</div>
      <Icon
        icon="fluent:weather-hail-day-24-regular"
        width="64"
        height="64"
        style={{ color: "black" }}
      />
    </div>
  );
}

export default WeatherStatus;
