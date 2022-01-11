import "./styles/precautionCard.css";
import precaution from "../../../images/Precaution Dose.svg";

function PrecautionCard() {
  return (
    <div className="precaution-card">
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-md-6 order-3 order-md-1">
            <h1>Get Your Precaution Dose</h1>
            <div className="para my-4">
              Our citizen's health is our responsibility. Precaution Dose is
              available for fully vaccinated HCW/FLW and Senior Citizens (60+
              yrs) after 39 weeks from 2nd dose. Citizens aged 60 years or more
              and having co-morbidities, should take precaution dose, only after
              medical advice. Both online and walk-in available.
            </div>
            <button className="r-btn btn-md">Book Your Slot</button>
          </div>
          <div
            className="order-2 d-none d-md-block"
            style={{ width: "40px" }}
          ></div>
          <div className="col-md-5 order-1 order-md-2">
            <div style={{ textAlign: "center" }}>
              <img className="big-img" src={precaution} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrecautionCard;
