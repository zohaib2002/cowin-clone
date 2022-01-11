import "./styles/shareStatusCard.css";
import shareStatus from "../../../images/share-status-new.svg";

function ShareStatusCard() {
  return (
    <div className="share-status-card">
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-md-6 order-3 order-md-1">
            <h1>Share Your Vaccination Status</h1>
            <div className="para my-4">
              Be a Fighter! If you are fully or partially vaccinated, you can
              now share your vaccination status in your social circle. Let's
              encourage our friends and followers in joining India's battle
              against COVID-19.
            </div>
            <button className="r-btn btn-md">Share Your Status</button>
          </div>
          <div
            className="order-2 d-none d-md-block"
            style={{ width: "40px" }}
          ></div>
          <div className="col-md-5 order-1 order-md-2">
            <div style={{ textAlign: "center" }}>
              <img className="big-img" src={shareStatus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareStatusCard;
