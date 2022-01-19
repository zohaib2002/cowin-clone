import React, { Component } from "react";
import VerifyMobile from "./pages/verifyMobile/verifyMobile";
import RegisterUser from "./pages/registerUser/registerUser";

class Login extends Component {
  state = { user: null };

  handleVerify = (user) => {
    this.setState({
      user: user,
    });
  };

  handleRegister = (user) => {
    this.props.handleLogIn(user);
  };

  render() {
    if (!this.state.user) {
      return <VerifyMobile handleVerify={this.handleVerify} />;
    } else if (this.state.user.identityNo.length === 0) {
      return <RegisterUser mobile={this.state.user.mobile} handleRegister={this.handleRegister} />;
    } else {
      this.props.handleLogIn(this.state.user);
      return <div>Registration successful!</div>;
    }
  }
}

export default Login;
