import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row list-title" style={{ textAlign: "left" }}>
          <div className="col-md-2 col-6">
            Vaccination Services
            <br />
            <a href="">Register Members</a>
            <br />
            <a href="">Search Vaccination Centers</a>
            <br />
            <a href="">Book Vaccination Slots</a>
            <br />
            <a href="">Manage Appointment</a>
            <br />
            <a href="">Download Certificate</a>
            <br />
            <br />
          </div>
          <div className="col-md-2 col-6">
            Platforms
            <br />
            <a href="">Co-WIN International</a>
            <br />
            <a href="">Vaccinator</a>
            <br />
            <a href="">Department Login</a>
            <br />
            <a href="">Verify Certificates</a>
            <br />
            <a href="">Vaccination Statistics</a>
          </div>
          <div className="col-md-2 col-6">
            Resources
            <br />
            <a href="">How To Get Vaccinated</a>
            <br />
            <a href="">Dos and Don'ts</a>
            <br />
            <a href="">Overview</a>
            <br />
            <a href="">API Guidelines</a>
            <br />
            <a href="">Open API's</a>
            <br />
            <a href="">Grievance Guidelines</a>
            <br />
            <br />
          </div>
          <div className="col-md-2 col-6 ftr-vl">
            Support
            <br />
            <a href="">Frequently Asked Questions</a>
            <br />
            <a href="">Certificate Corrections</a>
          </div>
          <div className="col-md-3 col-6">
            Contact Us
            <br />
            <a href="">Helpline: +91-11-23978046 (Toll Free - 1075 )</a>
            <br />
            <a href="">Technical Helpline: 0120 4473222</a>
          </div>
        </div>
        <br />
        <div className="row cw">
          <div className="col-md-8 order-3 order-md-1">
            Copyright © 2021 Co-WIN. All Rights Reserved
          </div>
          <div className="col-md-2 order-1 order-md-2">
            <a style={{ fontWeight: 300 }} href="">
              Terms of Service
            </a>
          </div>
          <div className="col-md-2 order-2 order-md-3">
            <a style={{ fontWeight: 300 }} href="">
              Privacy Policy
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
