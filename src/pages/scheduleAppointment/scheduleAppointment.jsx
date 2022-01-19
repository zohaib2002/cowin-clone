import React, { Component } from "react";

import "./scheduleAppointment.css";
import Login from "../login/login";
import AppointmentDetails from "../appointmentDetails";

class ScheduleAppointment extends Component {
  state = {};
  render() {
    if (!this.props.user) {
      // We can use Link to but then we will loose our route
      return <Login handleLogIn={this.props.handleLogIn} />;
    }

    if (this.props.user.appointmentId.length > 0) {
      return AppointmentDetails;
    }

    console.log(this.props.user);

    return (
      <div className="form-wrapper">
        <h1 className="register-title my-3">Schedule an Appointment</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ textAlign: "left" }}>
            <br />
            <label>
              <p>Select State</p>
            </label>
            <select style={{ width: "100%" }} class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Select City</p>
            </label>
            <select style={{ width: "100%" }} class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Select Center</p>
            </label>
            <select style={{ width: "100%" }} class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <br />
          <div>
            <button type="submit" className="b-btn">
              Book Appointment
            </button>
          </div>
          <br />
          <div>
            <p className="agree-text">
              By Sign In/Registration, I agree to the <a href="">Terms of service</a> and <a href="">Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default ScheduleAppointment;
