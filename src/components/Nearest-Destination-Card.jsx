import "../assets/styles/components/nearest-destination-card.css";

function NearestDestinationCard(props) {
  return (
    <div className="card-container">
      <img className="card-img" src="" alt="" />
      <div className="destination-desc">
        <div className="destination-name">
          <h3>Nama Destinasi</h3>
          <div className="distance">XXX KM</div>
        </div>
        <div className="desc">
          <p>
            Berbeda dari kebanyakan alun-alun, Alun-Alun Surabaya memiliki
            layout seperti kawasan komplek yang terdiri dari beberapa bangunan
            dengan design kolonial. Tak ketinggalan juga, ada pameran seni yang
            indah di bawah alun-alun ini!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NearestDestinationCard;
