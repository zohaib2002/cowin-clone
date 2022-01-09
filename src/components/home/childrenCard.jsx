import "./styles/childrenCard.css";
import children from "../../images/vaccin-childrens-img.svg";

function ChildrenCard() {
  return (
    <div className="children-card">
      <div className="container-lg">
        <div className="row py-5">
          <div className="col-md-5">
            <div style={{ textAlign: "center" }}>
              <img className="big-img" src={children} />
            </div>
          </div>
          <div className="d-none d-md-block" style={{ width: "40px" }}></div>
          <div className="col-md-6">
            <h1>Vaccination for Children</h1>
            <div className="para my-4">
              Protect your child! Getting your children(15-18 yrs) vaccinated is
              the best thing you can do to protect them from COVID-19.
              Vaccination slots can now be booked for children aged 15-18 yrs.
              Both online and walk-in available.
            </div>
            <button className="r-btn btn-md">Book Your Slot</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildrenCard;
