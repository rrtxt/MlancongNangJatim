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
              {/* <Icon icon="mdi:car-outline" width="72" height="72" /> */}
              <Icon icon="ph:car" width="72" height="72" />
              <Icon icon="solar:bus-linear" width="72" height="72" />
            </div>
          </div>
        </span>
      </div>
      <div className="detail-content-container">
        <div className="detail-content">
          <h2 className="content-title">Bukit What</h2>
          <div className="content-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              ipsum laudantium, vitae magni hic placeat quo ipsam alias laborum
              quis possimus. Quaerat, cupiditate! Nesciunt, dolorum debitis!
              Sunt exercitationem molestias quos. Sequi mollitia laudantium
              quasi magnam voluptatem quo enim dolores consectetur, pariatur
              odio illum rerum nulla, omnis itaque corrupti ut unde iste quas,
              dolor aspernatur. Expedita soluta velit recusandae? In,
              repudiandae?
            </p>
            <div className="content-price">
              <Icon
                icon="la:money-bill-wave"
                width="48"
                height="48"
                style={{ color: "white" }}
              />
              <span>Rp. 6000</span>
            </div>
            <div className="content-facility">
              <h3>Fasilitas</h3>
              <div className="facilities">
                <div className="facility">
                  <Icon
                    icon="material-symbols-light:mosque-outline"
                    width="48"
                    height="48"
                    style={{ color: "white" }}
                  />
                  <h4>Masjid</h4>
                </div>
                <div className="facility">
                  <Icon
                    icon="iconoir:bathroom"
                    width="48"
                    height="48"
                    style={{ color: "white" }}
                  />
                  <h4>Kamar Mandi</h4>
                </div>
              </div>
            </div>
            <div className="content-map">
              <img src="/src/assets/image/map.png" alt="" />
            </div>
          </div>
        </div>
        <div className="related-video">
          <h2 className="content-title">Video Terkait</h2>
        </div>
      </div>
    </div>
  );
}

export default Destination;
