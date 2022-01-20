import React, { Component } from "react";
import VerifyMobile from "./pages/verifyMobile/verifyMobile";
import RegisterUser from "./pages/registerUser/registerUser";

class Login extends Component {
  // state = { user: null };

  // handleVerify = (user) => {
  //   // this.setState({
  //   //   user: user,
  //   // });
  // };

  // handleRegister = (user) => {
  //   // this.setState({
  //   //   user: user,
  //   // });
  // };

  render() {
    if (!this.props.user) {
      return <VerifyMobile handleVerify={this.props.handleLogIn} />;
    }

    if (!this.props.user.identityNo) {
      return <RegisterUser mobile={this.props.user.mobile} handleRegister={this.props.handleLogIn} />;
    }
    return <div>Registration successful!</div>;
  }
}

export default Login;
