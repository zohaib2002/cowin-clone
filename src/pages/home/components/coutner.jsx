import React, { Component } from "react";
import "./styles/counter.css";
import vaccine from "../../../images/vaccine.svg";
import syringe from "../../../images/syringe.png";
// import './scripts/counter.js';
// Scripts are executed before DOM is loaded

// Using useState, useEffect with multiple setIntervals gets complicated
// Can also use setInterval with setState but this approach feels simpler

class Counter extends React.Component {
  componentDidMount() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var seconds = 0;
    var totalDoses = 1518498562;
    var todayDoses = 2507890;
    var totalElt = document.getElementById("total-doses");
    var todayElt = document.getElementById("today-doses");

    function incrementNumber() {
      if (seconds % 2 === 0) {
        totalDoses += 1;
        todayDoses += 1;
        totalElt.innerText = numberWithCommas(totalDoses);
        todayElt.innerText = numberWithCommas(todayDoses);
      }
    }

    function incrementSeconds() {
      seconds += 1;
    }

    var tik = setInterval(incrementNumber, 10);
    var tok = setInterval(incrementSeconds, 1000);
  }

  render() {
    return (
      <div className="counter">
        <div className="container">
          <div
            className="row"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <div className="col-md counter-col">
              <div className="row">
                <div className="col-1" style={{ marginRight: "30px" }}>
                  <img className="tiny-img" src={vaccine} alt="vaccine" />
                </div>
                <div className="col">
                  <div className="row title">Total Vaccination Doses</div>
                  <div id="total-doses" className="row number">
                    1,518,498,562
                  </div>
                </div>
              </div>
              <div className="row">
                <h2>
                  <br /> India marches beyond 1 Billion Vaccine doses
                </h2>
              </div>
            </div>

            <div className="col-1 vl"></div>

            <div className="col-md counter-col">
              <div className="row">
                <div className="col-1" style={{ marginRight: "30px" }}>
                  <img className="tiny-img" src={syringe} alt="vaccine" />
                </div>
                <div className="col">
                  <div className="row title">Total Vaccination Doses</div>
                  <div id="today-doses" className="row number">
                    2,507,890
                  </div>
                </div>
              </div>
              <div className="row">
                <h2>
                  <br /> India sets world record of 2.5 Cr+ Vaccinations in a
                  day
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
