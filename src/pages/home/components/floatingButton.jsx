import { Link } from "react-router-dom";
import "./styles/floatingButton.css";

function FloatingButton() {
  return (
    <Link to="scheduleAppointment">
      <button className="floating-button">Book Your Slot</button>
    </Link>
  );
}

export default FloatingButton;
