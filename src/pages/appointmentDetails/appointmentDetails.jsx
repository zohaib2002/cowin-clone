import React, { Component } from "react";
import "./appointmentDetails.css";
import ScheduleAppointment from "../scheduleAppointment/scheduleAppointment";
import Login from "../login/login";

import axios from "axios";

class AppointmentDetails extends Component {
  state = {
    isAppointmentLoaded: false,
    appointment: null,
    center: null,
  };

  getCenter = (appointment) => {
    const options = {
      url: "http://localhost:8080/center/" + appointment.centerId,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        this.setState({ appointment: appointment, isAppointmentLoaded: true, center: response.data });
      } else {
        alert("Error getting center " + response.status);
      }
    });
  };

  getAppointment = () => {
    const options = {
      url: "http://localhost:8080/appointment/" + this.props.user.appointmentId,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        this.getCenter(response.data);
      } else if (response.status === 400) {
        this.setState({ isAppointmentLoaded: true });
      } else {
        alert("Error getting appointment " + response.status);
      }
    });
  };

  checkAppointmentValid = () => {
    if (this.props.user) {
      if (this.props.user.appointmentId) {
        // appointmentId exists check if it is valid
        this.getAppointment();
      } else {
        this.setState({ isAppointmentLoaded: true });
      }
    }
  };

  componentDidMount() {
    this.checkAppointmentValid();
  }

  handleLogIn = (user) => {
    this.props.handleLogIn(user);
    this.checkAppointmentValid();
  };

  render() {
    //handleLogIn is used to update user
    if (!this.props.user || !this.props.user.identityNo) {
      // We can use Link to but then we will loose our route
      return <Login user={this.props.user} handleLogIn={this.props.handleLogIn} />;
    }

    if (!this.state.isAppointmentLoaded) {
      this.checkAppointmentValid();
      return (
        <div className="form-wrapper" style={{ height: "500px" }}>
          <h2>Loading...</h2>
        </div>
      );
    }

    if (this.state.isAppointmentLoaded && !this.state.appointment) {
      return <ScheduleAppointment user={this.props.user} handleLogIn={this.handleLogIn} />;
    }

    const { appointment, center } = this.state;

    return (
      <div className="form-wrapper">
        <h1 className="register-title my-3">Appointment Details</h1>
        <br />
        <table className="table center-table">
          <tbody>
            <tr>
              <th>Full Name</th>
              <td>{appointment.fullName}</td>
            </tr>
            <tr>
              <th>Identity Number</th>
              <td>{appointment.identityNo}</td>
            </tr>
            <tr>
              <th>Appointment ID</th>
              <td>{appointment._id}</td>
            </tr>
            <tr>
              <th>Appointment No</th>
              <td>{appointment.appointmentNo}</td>
            </tr>
            <tr>
              <th>Center Name</th>
              <td>{center.centerName}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{center.city + ", " + center.state + " " + center.pinCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppointmentDetails;
