import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SpecialOffer from "../../components/home/SpecialOffer";
import FeaturedTrip from "../../components/home/FeaturedTrip";
import WhyAlUmrah from "../../components/home/WhyAlUmrah";
import LogoCloud from "../../components/home/LogoCloud";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <div className="container m-auto my-4 px-4 h-[600px]">
          <div className="w-full h-full bg-gradient-to-tr from-gray-900 via-gray-600  to-gray-500 bg-purple-600 rounded-xl"></div>
        </div>
        <SpecialOffer />
        <FeaturedTrip />
        <WhyAlUmrah />
        <LogoCloud />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
