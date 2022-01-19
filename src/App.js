import React, { Component } from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import ScheduleAppointment from "./pages/scheduleAppointment/scheduleAppointment";
import Footer from "./components/footer";

class App extends Component {
  state = {
    isLoggedIn: false, // for components that we dont have to pass user details but still require logged in status
    user: null,
  };

  handleLogIn = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      isLoggedIn: true,
      user: user,
    });
  };

  componentDidMount() {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    this.setState({
      isLoggedIn: true,
      user: user,
    });
  }

  // <Route path="/login" element={<Login handleLogIn={this.handleLogIn} />} />
  // We dont need to have a linkable route to login

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/scheduleAppointment"
                element={<ScheduleAppointment user={this.state.user} handleLogIn={this.handleLogIn} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
