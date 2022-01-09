import Carousel from "../components/home/carousel";
import Callbar from "../components/home/callbar";
import Counter from "../components/home/coutner";
import FloatingButton from "../components/home/floatingButton";
import PrecautionCard from "../components/home/precautionCard";
import ChildrenCard from "../components/home/childrenCard";
import ShareStatusCard from "../components/home/shareStatusCard";
import WhatsNew from "../components/home/whatsNew";
import "./styles/home.css";

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
      </div>
      <div className="fixed-bottom d-md-none">
        <FloatingButton />
      </div>
    </div>
  );
}

export default Home;
