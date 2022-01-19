import React, { Component } from "react";
import "./registerUser.css";

import axios from "axios";

class RegisterUser extends Component {
  state = {
    fullName: "",
    identityNo: "",
  };

  setUser = () => {
    const options = {
      url: "http://localhost:8080/user",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.props.mobile,
        fullName: this.state.fullName,
        identityNo: this.state.identityNo,
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        var user = response.data;
        this.props.handleRegister(user);
      } else {
        alert("Error registering beneficiary! " + response.status);
      }
    });
  };

  handleSubmit = () => {
    if (this.state.fullName.length < 0 || this.state.fullName.split(" ").length < 2) {
      alert("Please enter your Full Name");
    } else if (this.state.identityNo.length < 5) {
      alert("Please enter a valid Identity Number");
    } else {
      this.setUser();
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="register-title my-3">Register as a beneficiary</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ textAlign: "left" }}>
            <br />
            <label>
              <p>Enter your full name</p>
            </label>
            <input
              style={{ width: "100%" }}
              className="form-control"
              placeholder="Full Name"
              onChange={(e) => {
                this.setState({ fullName: e.target.value });
              }}
            />
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Enter your identity number</p>
            </label>
            <input
              className="form-control"
              placeholder="Aadhaar / Passport"
              onChange={(e) => {
                this.setState({ identityNo: e.target.value });
              }}
            />
          </div>
          <br />
          <div>
            <button type="submit" className="b-btn">
              Register
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

export default RegisterUser;
