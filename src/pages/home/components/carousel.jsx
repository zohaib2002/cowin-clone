import "./styles/carousel.css";
import carousel1 from "../../../images/carousel1.png";
import carousel2 from "../../../images/carousel2.png";
import carousel3 from "../../../images/carousel3.png";
import carousel4 from "../../../images/carousel4.png";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      // style={{ width: "99.7vw" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="20000">
          <img
            src={carousel1}
            className="d-block w-100"
            alt="Good Times for all"
          />
        </div>
        <div className="carousel-item" data-bs-interval="20000">
          <img
            src={carousel2}
            className="d-block w-100"
            alt="Protect yout children"
          />
        </div>
        <div className="carousel-item" data-bs-interval="20000">
          <img src={carousel3} className="d-block w-100" alt="Risk is low" />
        </div>
        <div className="carousel-item" data-bs-interval="20000">
          <img
            src={carousel4}
            className="d-block w-100"
            alt="Schedule second dose"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
