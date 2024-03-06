import React, { useState } from "react";
import './destinationcard.css'; // Assuming the CSS file exists in the components folder
import 'remixicon/fonts/remixicon.css'; // Assuming you're using Remix Icons

export default function DestinationCard({ data = {} }) {
  const [isHovered, setIsHovered] = useState(false);
  

  // Destructuring with default values
  const { image = "", title = "", description = "", videoUrl = "" } = data;

  return (
    <div className="destination"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <img src={image} alt="" />
      {isHovered && (
        <>
          {videoUrl && <video src={videoUrl} autoPlay loop />}
          <div className="title-desc">
            <h3>{title}</h3>
            <div className="icon">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div className="iteminfotop">
             <h5>{description.slice(0, 120)}...</h5>
          </div>
        </>
      )}
    </div>
  );
}
