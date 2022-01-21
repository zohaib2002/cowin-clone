import "./verifyMobile.css";
import React, { Component } from "react";

import heart from "../../../../images/login-screen.svg";
import axios from "axios";

class VerifyMobile extends Component {
  state = {
    isOTPSent: false,
    isOTPInvalid: false,
    inputField: "",
    mobile: "",
    code: 0,
  };

  requestOTP = () => {
    const options = {
      url: process.env.REACT_APP_API_URL + "/user/generate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.state.mobile,
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        var code = response.data.code;
        this.setState({ isOTPSent: true });
        // OTP will be sent by SMS, for now response contains the OTP
        alert("OTP: " + code);
      } else {
        alert("Error requesting OTP! " + response.status);
      }
    });
  };

  verifyOTP = () => {
    const options = {
      url: process.env.REACT_APP_API_URL + "/user/validate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.state.mobile,
        code: this.state.code,
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        var user = response.data;
        this.props.handleVerify(user);
      } else if (response.status === 205) {
        this.setState({ isOTPInvalid: true });
      } else {
        alert("Error verifying OTP! " + response.status);
      }
    });
  };

  handleMobileSubmit = () => {
    if (!this.state.isOTPSent) {
      this.state.mobile = this.state.inputField;
    }
    if (this.state.mobile.length < 10) {
      alert("Please enter a valid 10 digit mobile number");
    } else {
      this.setState({ inputField: "" });
      this.requestOTP();
    }
  };

  handleOTPSubmit = () => {
    this.state.code = parseInt(this.state.inputField);
    this.setState({ inputField: "" });
    if (this.state.code.length < 4) {
      this.setState({ isOTPInvalid: true });
    } else {
      this.verifyOTP();
    }
  };

  render() {
    const { isOTPSent } = this.state;
    return (
      <div className="form-wrapper">
        <div className="heart-wrapper">
          <img className="heart-img" src={heart} alt="" />
        </div>
        <h1 className="register-title my-3">Register or Sign In for Vaccination</h1>
        <div>
          <div>
            <p>An OTP {isOTPSent ? "has been" : "will be"} sent to your mobile number for verification</p>
          </div>
          <div>
            <input
              maxLength={isOTPSent ? "4" : "10"}
              style={{ borderColor: this.state.isOTPInvalid ? "red" : "#0d153f" }}
              className={isOTPSent ? "otp-input" : "mobile-input"}
              placeholder={isOTPSent ? "OTP" : "Enter your mobile number"}
              value={this.state.inputField}
              onChange={(e) => {
                this.setState({ inputField: e.target.value });
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (isOTPSent) {
                    this.handleOTPSubmit();
                  } else {
                    this.handleMobileSubmit();
                  }
                }
              }}
            />
          </div>
          <br />
          <div>
            <button onClick={this.handleMobileSubmit} className="b-btn">
              {isOTPSent ? "Resend OTP" : "Get OTP"}
            </button>
          </div>
          <br />
          <div>
            <p className="agree-text">
              By Sign In/Registration, I agree to the <a href="">Terms of service</a> and <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyMobile;
