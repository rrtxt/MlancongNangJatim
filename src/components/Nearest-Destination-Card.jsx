import "../assets/styles/components/nearest-destination-card.css";

function NearestDestinationCard({ props }) {
  return (
    <div className="card-container">
      <img className="card-img" src={props?.image} alt="" />
      <div className="destination-desc">
        <div className="destination-name">
          <h3>{props?.place_name}</h3>
          <div className="distance">{props?.distance}</div>
        </div>
        <div className="desc">
          <p>
            {props?.deskripsi !== "" ? props.deskripsi : "Tidak ada Deskripsi"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NearestDestinationCard;
