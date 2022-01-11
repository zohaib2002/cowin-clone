import Carousel from "./components/carousel";
import Callbar from "./components/callbar";
import Counter from "./components/coutner";
import FloatingButton from "./components/floatingButton";
import PrecautionCard from "./components/precautionCard";
import ChildrenCard from "./components/childrenCard";
import ShareStatusCard from "./components/shareStatusCard";
import WhatsNew from "./components/whatsNew";
import partners from "../../images/partners.png";
import "./home.css";

function Home() {
  return (
    <div>
      <div>
        <Carousel />
        <Callbar />
        <Counter />
        <PrecautionCard />
        <ChildrenCard />
        <ShareStatusCard />
        <WhatsNew />
        <img
          src={partners}
          alt="Our Partners: Digilocker, Umang, Arogya Setu"
          style={{ width: "100vw", height: "50vh", objectFit: "cover" }}
        />
      </div>
      <div className="fixed-bottom d-md-none">
        <FloatingButton />
      </div>
    </div>
  );
}

export default Home;
