import Footer from "../../component/Footer";
import Nav from "../../component/Nav";
import BestSell from "./sections/BestSell";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Services from "./sections/Services";

const Home = () => {
  return (
    <>
    <title>Cofee</title>
      <Nav />
      <Hero />
      <BestSell />
      <Services />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
