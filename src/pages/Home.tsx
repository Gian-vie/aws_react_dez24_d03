import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BestSelling from "../components/home/BestSelling";
import Informations from "../components/home/Informations";
import MiddleBanner from "../components/home/MiddleBanner";
import Offer from "../components/home/Offer";
import TopBaner from "../components/home/TopBaner";

const Home = () => {
  return (
    <div>
      <Header />
      <TopBaner />
      <Informations/>
      <BestSelling />
      <MiddleBanner />
      <Offer />
      {/* <p className="h-70 font-extrabold text-9xl text-center">Home</p> */}
      <Footer />
    </div>
  );
};

export default Home;
