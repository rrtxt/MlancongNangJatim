import { Suspense, useEffect, useState } from "react";
// import "../assets/styles/index.css";
import "../assets/styles/detail.css";
import RelatedVideo from "../components/Related-Video";
import WeatherStatus from "../components/Weather-Status";
import { Icon } from "@iconify/react";
import NearestDestinationCard from "../components/Nearest-Destination-Card";

import data from "../data.json";
import { useParams } from "react-router";

function Destination() {
  // const [destinations] = useState([1, 2, 3, 4, 5, 6]);
  const [destination, setDestination] = useState(null);
  const params = useParams();
  const destinationId = params.destination_id;

  useEffect(() => {
    const destinasi = data.surabaya.filter(
      (destinasi) => destinasi.id == destinationId
    );
    console.log(destinasi[0]);
    setDestination(destinasi[0]);
  }, [destinationId]);

  function getFinalPath(url) {
    // const trimmedUrl = String(url.trim());
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.split("/").pop();
  }

  return (
    <div className="detail-container">
      <div id="status-container">
        <div className="detail-status-container">
          <img className="detail-img" src={destination?.image} alt="" />
          <span className="detail-status">
            <div className="status-content">
              <div className="weather">
                <WeatherStatus />
              </div>
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
          <Suspense fallback={<div>Loading</div>}>
            <h2 className="content-title">{destination?.place_name}</h2>
          </Suspense>
          <div className="content-desc">
            <p>{destination?.deskripsi}</p>
            <div className="content-price">
              <Icon
                icon="la:money-bill-wave"
                width="48"
                height="48"
                style={{ color: "white" }}
              />
              <span>Rp. {destination?.ticket_price}</span>
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
              <img src={"/static/image/map.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="related-video">
          <h2 className="content-title">Video Terkait</h2>
          <div className="videos-container">
            <div className="video-container">
              {!destination?.tiktok_video ? (
                <h3>Tidak ada Video Tiktok</h3>
              ) : (
                destination?.tiktok_video.map((videoUrl, key) => (
                  <RelatedVideo key={key} videoId={getFinalPath(videoUrl)} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="nearest-destination">
          <h2 className="content-title">Destinasi Terdekat</h2>
          <div className="destinations-container">
            {!destination?.nearest_destinations ? (
              <h3>Tidak ada Destinasi Terdekat</h3>
            ) : (
              destination?.nearest_destinations.map((destination, key) => (
                <NearestDestinationCard key={key} props={destination} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
