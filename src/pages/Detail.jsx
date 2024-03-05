import { useState } from "react";
// import "../assets/styles/index.css";
import "../assets/styles/detail.css";
import RelatedVideo from "../components/Related-Video";
import WeatherStatus from "../components/Weather-Status";
import { Icon } from "@iconify/react";
import NearestDestinationCard from "../components/Nearest-Destination-Card";

function Destination() {
  const [videos] = useState([1, 2, 3, 4]);
  const [destinations] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="detail-container">
      <div id="status-container">
        <div className="detail-status-container">
          <img className="detail-img" src={"static/image/detail.png"} alt="" />
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
              <img src={"static/image/map.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="related-video">
          <h2 className="content-title">Video Terkait</h2>
          <div className="videos-container">
            {videos.map((video) => (
              <RelatedVideo key={video} videoId={"7317145217650429189 "} />
            ))}
          </div>
        </div>
        <div className="nearest-destination">
          <h2 className="content-title">Destinasi Terdekat</h2>
          <div className="destinations-container">
            {destinations.map((destination) => (
              <NearestDestinationCard key={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
