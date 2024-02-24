import "../assets/styles/detail.css";
import WeatherStatus from "../components/Weather-Status";
import { Icon } from "@iconify/react";

function Destination() {
  return (
    <div>
      <div className="detail-status-container">
        <img className="detail-img" src="/src/assets/image/detail.png" alt="" />
        <span className="detail-status">
          <div className="status-content">
            <WeatherStatus />
            <div className="transport-container">
              <Icon icon="mdi:car-outline" width="72" height="72" />
              <Icon icon="solar:bus-linear" width="72" height="72" />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Destination;
